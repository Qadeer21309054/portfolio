import React, { useState, useRef } from 'react';
import {
  UploadCloud,
  X,
  CheckCircle2,
  Trash2,
  Sparkles,
  Camera,
  FolderArchive,
  Layers,
  Scale,
  Globe,
  GraduationCap,
  BookOpen,
  FileText,
  Award,
} from 'lucide-react';
import { GALLERY_SLIDES, EVENT_CATEGORIES, EventCategory } from '../data/portfolioData';
import {
  getStoredPhotos,
  saveStoredPhotos,
  matchEventKeyFromFilename,
  clearAllStoredPhotos,
  getProfilePhoto,
  saveProfilePhoto,
  removeProfilePhoto,
} from '../utils/photoStorage';

interface Props {
  isOpen: boolean;
  onClose: () => void;
  onPhotosUpdated?: () => void;
}

export const PhotoUploaderModal: React.FC<Props> = ({
  isOpen,
  onClose,
  onPhotosUpdated,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [photos, setPhotos] = useState<Record<string, string>>(() => getStoredPhotos());
  const [profilePhoto, setProfilePhoto] = useState<string | null>(() => getProfilePhoto());
  const [uploadFeedback, setUploadFeedback] = useState<string | null>(null);
  const [isDragging, setIsDragging] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const profilePhotoInputRef = useRef<HTMLInputElement>(null);

  if (!isOpen) return null;

  const handleProfilePhotoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (uploadEvent) => {
        const result = uploadEvent.target?.result as string;
        if (result) {
          saveProfilePhoto(result);
          setProfilePhoto(result);
          setUploadFeedback(`✓ Profile photo saved and persisted across refreshes!`);
          if (onPhotosUpdated) onPhotosUpdated();
        }
      };
      reader.readAsDataURL(file);
    }
    e.target.value = '';
  };

  const handleRemoveProfilePhoto = () => {
    removeProfilePhoto();
    setProfilePhoto(null);
    setUploadFeedback(`Profile photo removed.`);
    if (onPhotosUpdated) onPhotosUpdated();
  };

  const handleFiles = (files: FileList | null) => {
    if (!files || files.length === 0) return;

    let matchedCount = 0;
    const updated = { ...photos };

    Array.from(files).forEach((file) => {
      const detectedKey = matchEventKeyFromFilename(file.name);
      const reader = new FileReader();

      reader.onload = (e) => {
        const result = e.target?.result as string;
        if (detectedKey === 'profile') {
          saveProfilePhoto(result);
          setProfilePhoto(result);
          setUploadFeedback(`✓ Matched and saved "${file.name}" as Official Profile Photo!`);
          if (onPhotosUpdated) onPhotosUpdated();
        } else if (detectedKey) {
          updated[detectedKey] = result;
          matchedCount++;
          setPhotos({ ...updated });
          saveStoredPhotos(updated);
          const targetSlide = GALLERY_SLIDES.find((s) => s.eventKey === detectedKey);
          setUploadFeedback(`✓ Matched and assigned ${file.name} to [${targetSlide?.categoryName || 'Category'}]`);
          if (onPhotosUpdated) onPhotosUpdated();
        } else {
          // If no automatic match, pick first empty slot
          const emptySlide = GALLERY_SLIDES.find((s) => !updated[s.eventKey]);
          if (emptySlide) {
            updated[emptySlide.eventKey] = result;
            matchedCount++;
            setPhotos({ ...updated });
            saveStoredPhotos(updated);
            setUploadFeedback(`✓ Assigned ${file.name} to [${emptySlide.categoryName}] ${emptySlide.title}`);
            if (onPhotosUpdated) onPhotosUpdated();
          }
        }
      };

      reader.readAsDataURL(file);
    });
  };

  const handleSingleEventFile = (eventKey: string, file: File) => {
    const reader = new FileReader();
    reader.onload = (e) => {
      const result = e.target?.result as string;
      const updated = { ...photos, [eventKey]: result };
      setPhotos(updated);
      saveStoredPhotos(updated);
      const targetSlide = GALLERY_SLIDES.find((s) => s.eventKey === eventKey);
      setUploadFeedback(`✓ Uploaded photo for [${targetSlide?.categoryName}] ${targetSlide?.title}`);
      if (onPhotosUpdated) onPhotosUpdated();
    };
    reader.readAsDataURL(file);
  };

  const handleRemovePhoto = (eventKey: string) => {
    const updated = { ...photos };
    delete updated[eventKey];
    setPhotos(updated);
    saveStoredPhotos(updated);
    if (onPhotosUpdated) onPhotosUpdated();
  };

  const handleClearAll = () => {
    if (window.confirm('Remove all uploaded photos across all categories?')) {
      clearAllStoredPhotos();
      setPhotos({});
      setUploadFeedback('All event photos removed.');
      if (onPhotosUpdated) onPhotosUpdated();
    }
  };

  const displayedSlides = selectedCategory === 'all'
    ? GALLERY_SLIDES
    : GALLERY_SLIDES.filter((s) => s.categoryKey === selectedCategory);

  const uploadedCount = Object.keys(photos).length;

  const getCategoryIcon = (iconName: string) => {
    switch (iconName) {
      case 'Scale':
        return <Scale className="w-3.5 h-3.5" />;
      case 'Globe':
        return <Globe className="w-3.5 h-3.5" />;
      case 'GraduationCap':
        return <GraduationCap className="w-3.5 h-3.5" />;
      case 'BookOpen':
        return <BookOpen className="w-3.5 h-3.5" />;
      case 'FileText':
        return <FileText className="w-3.5 h-3.5" />;
      case 'Award':
        return <Award className="w-3.5 h-3.5" />;
      case 'Layers':
      default:
        return <Layers className="w-3.5 h-3.5" />;
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 backdrop-blur-md p-4 overflow-y-auto">
      <div className="relative w-full max-w-4xl bg-slate-900 border border-slate-700/80 rounded-3xl p-6 sm:p-8 shadow-2xl my-8">
        {/* Header */}
        <div className="flex items-start justify-between pb-5 border-b border-slate-800">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono font-semibold text-amber-400 mb-1">
              <Camera className="w-4 h-4" />
              <span>Category Photo Manager</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-white">
              Upload Photos for Each Category
            </h2>
            <p className="text-xs sm:text-sm text-slate-400 mt-1 max-w-2xl">
              Artificial photos have been removed. Upload your authentic photos individually for each category or batch-assign them automatically.
            </p>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-slate-400 hover:text-white rounded-xl bg-slate-800/80 hover:bg-slate-700 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Global Multi-file Drag & Drop Zone */}
        <div
          onDragOver={(e) => {
            e.preventDefault();
            setIsDragging(true);
          }}
          onDragLeave={() => setIsDragging(false)}
          onDrop={(e) => {
            e.preventDefault();
            setIsDragging(false);
            handleFiles(e.dataTransfer.files);
          }}
          className={`mt-6 p-6 sm:p-8 border-2 border-dashed rounded-2xl text-center transition-all ${
            isDragging
              ? 'border-amber-400 bg-amber-500/10 scale-[1.01]'
              : 'border-slate-700 hover:border-slate-500 bg-slate-950/60'
          }`}
        >
          <input
            type="file"
            ref={fileInputRef}
            multiple
            accept="image/*"
            className="hidden"
            onChange={(e) => handleFiles(e.target.files)}
          />

          <div className="w-12 h-12 mx-auto rounded-2xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 mb-3 shadow-inner">
            <UploadCloud className="w-6 h-6" />
          </div>

          <h3 className="text-base sm:text-lg font-bold text-white mb-1">
            Drag &amp; Drop photos here or browse your computer
          </h3>
          <p className="text-xs text-slate-400 max-w-xl mx-auto mb-4">
            Filename detector maps pictures automatically (e.g., <code className="text-amber-300 font-mono bg-slate-900 px-1 py-0.5 rounded">kakuma</code>, <code className="text-amber-300 font-mono bg-slate-900 px-1 py-0.5 rounded">space_law</code>, <code className="text-amber-300 font-mono bg-slate-900 px-1 py-0.5 rounded">vilnius</code>, <code className="text-amber-300 font-mono bg-slate-900 px-1 py-0.5 rounded">copenhagen</code>, <code className="text-amber-300 font-mono bg-slate-900 px-1 py-0.5 rounded">ceu</code>, <code className="text-amber-300 font-mono bg-slate-900 px-1 py-0.5 rounded">brac</code>).
          </p>

          <button
            onClick={() => fileInputRef.current?.click()}
            className="px-6 py-2.5 bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs sm:text-sm rounded-xl transition-all shadow-md shadow-amber-500/20"
          >
            Select Photos from Computer
          </button>
        </div>

        {uploadFeedback && (
          <div className="mt-4 p-3 bg-emerald-500/10 border border-emerald-500/30 rounded-xl flex items-center gap-2 text-xs font-mono text-emerald-300">
            <CheckCircle2 className="w-4 h-4 shrink-0 text-emerald-400" />
            <span>{uploadFeedback}</span>
          </div>
        )}

        {/* Official Profile Photo Section */}
        <div className="mt-6 p-4 sm:p-5 rounded-2xl bg-gradient-to-r from-amber-500/10 via-slate-900 to-slate-950 border border-amber-500/30 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <input
            type="file"
            ref={profilePhotoInputRef}
            accept="image/*"
            className="hidden"
            onChange={handleProfilePhotoUpload}
          />
          <div className="flex items-center gap-3.5">
            <div className="relative w-14 h-14 rounded-2xl overflow-hidden border-2 border-amber-500/60 shadow-lg shrink-0 bg-slate-950 flex items-center justify-center">
              <Scale className="w-6 h-6 text-amber-400" />
              {profilePhoto && (
                <img
                  src={profilePhoto}
                  alt="Profile"
                  className="absolute inset-0 w-full h-full object-cover object-top"
                />
              )}
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-xs font-bold text-white">Official Profile Picture</span>
                <span className={`px-2 py-0.5 rounded text-[10px] font-mono font-semibold ${
                  profilePhoto ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/30' : 'bg-slate-800 text-slate-400'
                }`}>
                  {profilePhoto ? 'Active & Saved in Storage' : 'Not Set (Using Monogram)'}
                </span>
              </div>
              <p className="text-[11px] text-slate-400 mt-0.5">
                Saved in your browser storage. Displays in Navbar, Hero Card, and Footer across page reloads.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2 w-full sm:w-auto">
            <button
              onClick={() => profilePhotoInputRef.current?.click()}
              className="flex-1 sm:flex-none px-4 py-2 bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold rounded-xl text-xs transition-all shadow-md shadow-amber-500/20 flex items-center justify-center gap-1.5"
            >
              <Camera className="w-3.5 h-3.5" />
              <span>{profilePhoto ? 'Change Picture' : 'Upload Picture'}</span>
            </button>
            {profilePhoto && (
              <button
                onClick={handleRemoveProfilePhoto}
                className="p-2 bg-slate-800 hover:bg-rose-950/40 text-slate-400 hover:text-rose-300 border border-slate-700 hover:border-rose-500/50 rounded-xl text-xs transition-all"
                title="Remove profile picture"
              >
                <Trash2 className="w-4 h-4 text-rose-400" />
              </button>
            )}
          </div>
        </div>

        {/* Category Filter Pills */}
        <div className="mt-8">
          <div className="flex items-center justify-between gap-2 mb-3">
            <span className="text-xs font-mono uppercase tracking-wider text-slate-400 font-semibold flex items-center gap-1.5">
              <Layers className="w-3.5 h-3.5 text-amber-400" />
              <span>Filter Slots by Category:</span>
            </span>
            {uploadedCount > 0 && (
              <button
                onClick={handleClearAll}
                className="text-xs text-rose-400 hover:text-rose-300 flex items-center gap-1 font-mono"
              >
                <Trash2 className="w-3.5 h-3.5" />
                <span>Remove All Photos</span>
              </button>
            )}
          </div>

          <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-thin scrollbar-thumb-slate-800">
            {EVENT_CATEGORIES.map((cat: EventCategory) => {
              const isSelected = selectedCategory === cat.id;
              const catSlides = cat.id === 'all'
                ? GALLERY_SLIDES
                : GALLERY_SLIDES.filter((s) => s.categoryKey === cat.id);
              const uploadedInCat = catSlides.filter((s) => Boolean(photos[s.eventKey])).length;

              return (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium whitespace-nowrap transition-all shrink-0 border ${
                    isSelected
                      ? 'bg-amber-500 text-slate-950 font-bold border-amber-400'
                      : 'bg-slate-950 text-slate-300 border-slate-800 hover:border-slate-700 hover:text-white'
                  }`}
                >
                  <span>{getCategoryIcon(cat.icon)}</span>
                  <span>{cat.shortName}</span>
                  <span className={`px-1.5 py-0.2 rounded-full text-[10px] font-mono ${
                    isSelected ? 'bg-slate-950/20 text-slate-950' : 'bg-slate-800 text-slate-400'
                  }`}>
                    {uploadedInCat}/{catSlides.length}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Category Event Slots Grid */}
        <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-3 max-h-[380px] overflow-y-auto pr-2">
          {displayedSlides.map((slide) => {
            const hasPhoto = Boolean(photos[slide.eventKey]);
            const photoSrc = photos[slide.eventKey];

            return (
              <div
                key={slide.id}
                className={`p-4 rounded-2xl border transition-all ${
                  hasPhoto
                    ? 'bg-slate-950/90 border-emerald-500/40 shadow-sm'
                    : 'bg-slate-950/50 border-slate-800 hover:border-slate-700'
                }`}
              >
                <div className="flex items-start gap-3">
                  {/* Thumbnail / Status */}
                  <div className="w-16 h-16 rounded-xl bg-slate-900 border border-slate-800 overflow-hidden shrink-0 flex items-center justify-center relative">
                    {hasPhoto ? (
                      <>
                        <img
                          src={photoSrc}
                          alt={slide.title}
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute top-1 right-1 w-4 h-4 rounded-full bg-emerald-500 text-slate-950 flex items-center justify-center text-[10px] font-bold">
                          ✓
                        </div>
                      </>
                    ) : (
                      <div className="text-center p-1">
                        <Camera className="w-5 h-5 text-slate-600 mx-auto" />
                        <span className="text-[9px] text-slate-500 block leading-tight mt-0.5">
                          Awaiting
                        </span>
                      </div>
                    )}
                  </div>

                  {/* Meta */}
                  <div className="flex-1 min-w-0 space-y-1">
                    <div className="flex items-center justify-between gap-1">
                      <span className="text-xs font-bold text-white truncate block">
                        {slide.title}
                      </span>
                      <span className="text-[10px] font-mono text-amber-400 shrink-0">
                        {slide.year}
                      </span>
                    </div>

                    <div className="flex items-center gap-1.5 text-[10px] text-slate-400">
                      <span className="text-amber-400/90 font-mono font-semibold">[{slide.categoryName}]</span>
                    </div>

                    <div className="pt-1 flex items-center justify-between gap-2">
                      <span className="text-[10px] font-mono text-slate-400 bg-slate-900 px-2 py-0.5 rounded border border-slate-800 truncate max-w-[150px]">
                        Hint: <code className="text-amber-300 font-bold">{slide.expectedFilename}</code>
                      </span>

                      <div className="flex items-center gap-1">
                        <label className="cursor-pointer px-2.5 py-1 bg-slate-800 hover:bg-slate-700 text-slate-200 text-[11px] font-medium rounded-lg transition-colors border border-slate-700 hover:border-amber-400">
                          <span>{hasPhoto ? 'Replace' : 'Upload'}</span>
                          <input
                            type="file"
                            accept="image/*"
                            className="hidden"
                            onChange={(e) => {
                              const file = e.target.files?.[0];
                              if (file) handleSingleEventFile(slide.eventKey, file);
                            }}
                          />
                        </label>

                        {hasPhoto && (
                          <button
                            onClick={() => handleRemovePhoto(slide.eventKey)}
                            className="p-1 text-slate-500 hover:text-rose-400 transition-colors"
                            title="Remove photo"
                          >
                            <Trash2 className="w-3.5 h-3.5" />
                          </button>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Footer info & Done */}
        <div className="mt-8 pt-5 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-xs text-slate-400 flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-amber-400 shrink-0" />
            <span>
              Photos persist locally in your browser and automatically update on the slider.
            </span>
          </div>

          <button
            onClick={onClose}
            className="w-full sm:w-auto px-6 py-2.5 bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-sm rounded-xl transition-all shadow-md active:scale-95"
          >
            Done &amp; View in Slider
          </button>
        </div>
      </div>
    </div>
  );
};
