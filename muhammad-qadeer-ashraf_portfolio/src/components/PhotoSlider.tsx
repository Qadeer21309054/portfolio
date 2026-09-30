import React, { useState, useEffect, useRef } from 'react';
import {
  ChevronLeft,
  ChevronRight,
  Maximize2,
  X,
  Play,
  Pause,
  MapPin,
  Calendar,
  Award,
  Sparkles,
  Camera,
  CheckCircle2,
  UploadCloud,
  ShieldCheck,
  Building,
  GraduationCap,
  Scale,
  RefreshCw,
  FolderOpen,
  Globe,
  BookOpen,
  FileText,
  Layers,
  Trash2,
  Image as ImageIcon,
} from 'lucide-react';
import {
  GALLERY_SLIDES,
  EVENT_CATEGORIES,
  GalleryPhoto,
  EventCategory,
} from '../data/portfolioData';
import {
  getStoredPhotos,
  savePhotoForEvent,
  removePhotoForEvent,
  saveStoredPhotos,
  matchEventKeyFromFilename,
  clearAllStoredPhotos,
  saveProfilePhoto,
} from '../utils/photoStorage';
import { PhotoUploaderModal } from './PhotoUploaderModal';

export const PhotoSlider: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [lightboxPhoto, setLightboxPhoto] = useState<{ slide: GalleryPhoto; src: string } | null>(null);
  const [userPhotos, setUserPhotos] = useState<Record<string, string>>(() => getStoredPhotos());
  const [isUploaderOpen, setIsUploaderOpen] = useState(false);
  const [autoMatchReport, setAutoMatchReport] = useState<string[] | null>(null);
  const [isDragOver, setIsDragOver] = useState(false);
  
  const multiFileInputRef = useRef<HTMLInputElement>(null);
  const singleSlideFileInputRef = useRef<HTMLInputElement>(null);

  // Sync photos whenever updated in modal or storage
  useEffect(() => {
    const handleUpdate = (e: Event) => {
      const customEvent = e as CustomEvent<Record<string, string>>;
      if (customEvent.detail) {
        setUserPhotos(customEvent.detail);
      } else {
        setUserPhotos(getStoredPhotos());
      }
    };

    window.addEventListener('mqa_photos_updated', handleUpdate);
    return () => window.removeEventListener('mqa_photos_updated', handleUpdate);
  }, []);

  // Filter slides based on active category
  const filteredSlides: GalleryPhoto[] = selectedCategory === 'all'
    ? GALLERY_SLIDES
    : GALLERY_SLIDES.filter((s) => s.categoryKey === selectedCategory);

  // Ensure currentIndex stays within bounds when category changes
  useEffect(() => {
    setCurrentIndex(0);
  }, [selectedCategory]);

  // Auto-play interval
  useEffect(() => {
    if (!isPlaying || filteredSlides.length <= 1) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % filteredSlides.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [isPlaying, filteredSlides.length]);

  const handlePrev = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? filteredSlides.length - 1 : prev - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % filteredSlides.length);
  };

  // Process uploaded files with automatic detection and category mapping
  const processAutoFiles = (files: FileList | null) => {
    if (!files || files.length === 0) return;

    const currentPhotos = { ...userPhotos };
    const matchedLog: string[] = [];

    Array.from(files).forEach((file) => {
      const matchedKey = matchEventKeyFromFilename(file.name);
      const reader = new FileReader();

      reader.onload = (e) => {
        const dataUrl = e.target?.result as string;

        if (matchedKey === 'profile') {
          saveProfilePhoto(dataUrl);
          matchedLog.push(`✓ Saved "${file.name}" as Official Profile Photo (Persisted across refreshes)`);
        } else if (matchedKey) {
          const targetSlide = GALLERY_SLIDES.find((s) => s.eventKey === matchedKey);
          currentPhotos[matchedKey] = dataUrl;
          matchedLog.push(`✓ Read "${file.name}" → [${targetSlide?.categoryName || 'Category'}] ${targetSlide?.title || matchedKey}`);
        } else {
          // If no keyword match, find first empty slot in active filtered list or all slides
          const emptySlide = filteredSlides.find((s) => !currentPhotos[s.eventKey]) ||
            GALLERY_SLIDES.find((s) => !currentPhotos[s.eventKey]);
          if (emptySlide) {
            currentPhotos[emptySlide.eventKey] = dataUrl;
            matchedLog.push(`✓ Assigned "${file.name}" → [${emptySlide.categoryName}] ${emptySlide.title}`);
          }
        }

        setUserPhotos({ ...currentPhotos });
        saveStoredPhotos(currentPhotos);
        setAutoMatchReport([...matchedLog]);
      };

      reader.readAsDataURL(file);
    });
  };

  const handleCurrentSlideUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file && currentSlide) {
      const reader = new FileReader();
      reader.onload = (uploadEvent) => {
        const result = uploadEvent.target?.result as string;
        savePhotoForEvent(currentSlide.eventKey, result);
        setUserPhotos((prev) => ({ ...prev, [currentSlide.eventKey]: result }));
        setAutoMatchReport([`✓ Uploaded photo for [${currentSlide.categoryName}] "${currentSlide.title}"`]);
      };
      reader.readAsDataURL(file);
    }
    // reset input value so re-uploading same filename works
    e.target.value = '';
  };

  const handleRemoveCurrentPhoto = () => {
    if (!currentSlide) return;
    removePhotoForEvent(currentSlide.eventKey);
    setUserPhotos((prev) => {
      const next = { ...prev };
      delete next[currentSlide.eventKey];
      return next;
    });
    setAutoMatchReport([`Removed photo from [${currentSlide.categoryName}]`]);
  };

  const handleClearAllPhotos = () => {
    if (window.confirm('Remove all uploaded photos from all categories?')) {
      clearAllStoredPhotos();
      setUserPhotos({});
      setAutoMatchReport(['All uploaded photos have been removed.']);
    }
  };

  const currentSlide: GalleryPhoto | undefined = filteredSlides[currentIndex] || filteredSlides[0];
  const currentPhotoSrc = currentSlide ? userPhotos[currentSlide.eventKey] : undefined;
  const totalUploadedCount = Object.keys(userPhotos).length;

  const getCategoryIcon = (iconName: string, className = 'w-4 h-4') => {
    switch (iconName) {
      case 'Scale':
        return <Scale className={className} />;
      case 'Globe':
        return <Globe className={className} />;
      case 'GraduationCap':
        return <GraduationCap className={className} />;
      case 'BookOpen':
        return <BookOpen className={className} />;
      case 'FileText':
        return <FileText className={className} />;
      case 'Award':
        return <Award className={className} />;
      case 'Layers':
      default:
        return <Layers className={className} />;
    }
  };

  const getCategoryUploadedCount = (catId: string) => {
    if (catId === 'all') return totalUploadedCount;
    const catSlides = GALLERY_SLIDES.filter((s) => s.categoryKey === catId);
    return catSlides.filter((s) => Boolean(userPhotos[s.eventKey])).length;
  };

  const getCategoryTotalCount = (catId: string) => {
    if (catId === 'all') return GALLERY_SLIDES.length;
    return GALLERY_SLIDES.filter((s) => s.categoryKey === catId).length;
  };

  return (
    <section 
      id="gallery" 
      className="py-20 sm:py-28 bg-slate-950 border-t border-b border-slate-800/80 relative"
      onDragOver={(e) => {
        e.preventDefault();
        setIsDragOver(true);
      }}
      onDragLeave={() => setIsDragOver(false)}
      onDrop={(e) => {
        e.preventDefault();
        setIsDragOver(false);
        processAutoFiles(e.dataTransfer.files);
      }}
    >
      {/* Hidden file input for batch multi-file import */}
      <input
        type="file"
        ref={multiFileInputRef}
        multiple
        accept="image/*"
        className="hidden"
        onChange={(e) => processAutoFiles(e.target.files)}
      />

      {/* Hidden file input for current slide upload */}
      <input
        type="file"
        ref={singleSlideFileInputRef}
        accept="image/*"
        className="hidden"
        onChange={handleCurrentSlideUpload}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-mono font-semibold">
              <Camera className="w-3.5 h-3.5" />
              <span>Authentic Documentation by Category</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-serif font-bold text-white tracking-tight">
              Photographic Documentation
            </h2>
            <p className="text-sm sm:text-base text-slate-400 leading-relaxed">
              Organized across legal practice, international summits, research fellowships, and the 4-year law degree. Upload and manage your authentic photos for each category directly on the slider.
            </p>
          </div>

          {/* Quick Action Toolbar */}
          <div className="flex flex-wrap items-center gap-2.5">
            <button
              onClick={() => singleSlideFileInputRef.current?.click()}
              className="flex items-center gap-2 px-4 py-2.5 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-bold text-xs rounded-xl transition-all shadow-md shadow-amber-500/20 active:scale-[0.98]"
              title={`Upload photo for current slide: ${currentSlide?.title || 'Current Event'}`}
            >
              <UploadCloud className="w-4 h-4" />
              <span>Upload for this Category</span>
            </button>

            <button
              onClick={() => setIsUploaderOpen(true)}
              className="flex items-center gap-1.5 px-3 py-2.5 bg-slate-900 hover:bg-slate-800 border border-slate-700 rounded-xl text-xs font-mono text-slate-300 transition-colors"
              title="Open category upload manager for all events"
            >
              <FolderOpen className="w-3.5 h-3.5 text-amber-400" />
              <span>Manage All ({totalUploadedCount}/{GALLERY_SLIDES.length})</span>
            </button>

            {totalUploadedCount > 0 && (
              <button
                onClick={handleClearAllPhotos}
                className="flex items-center gap-1.5 px-3 py-2.5 bg-slate-900 hover:bg-rose-950/40 border border-slate-700 hover:border-rose-500/50 rounded-xl text-xs font-mono text-rose-300 transition-colors"
                title="Remove all uploaded photos"
              >
                <Trash2 className="w-3.5 h-3.5 text-rose-400" />
                <span className="hidden sm:inline">Reset</span>
              </button>
            )}

            <button
              onClick={() => setIsPlaying(!isPlaying)}
              className="flex items-center gap-1.5 px-3 py-2.5 bg-slate-900 hover:bg-slate-800 border border-slate-700 rounded-xl text-xs font-mono text-slate-300 transition-colors"
            >
              {isPlaying ? (
                <>
                  <Pause className="w-3.5 h-3.5 text-amber-400" />
                  <span className="hidden sm:inline">Pause</span>
                </>
              ) : (
                <>
                  <Play className="w-3.5 h-3.5 text-emerald-400" />
                  <span className="hidden sm:inline">Play</span>
                </>
              )}
            </button>
          </div>
        </div>

        {/* Category Navigation Pills */}
        <div className="mb-8">
          <div className="flex items-center justify-between gap-2 mb-3">
            <span className="text-xs font-mono uppercase tracking-wider text-slate-400 font-semibold flex items-center gap-1.5">
              <Layers className="w-3.5 h-3.5 text-amber-400" />
              <span>Select Category to View &amp; Upload:</span>
            </span>
            <span className="text-[11px] font-mono text-slate-500">
              {filteredSlides.length} {filteredSlides.length === 1 ? 'event' : 'events'} in this view
            </span>
          </div>

          <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-thin scrollbar-thumb-slate-800">
            {EVENT_CATEGORIES.map((cat: EventCategory) => {
              const isSelected = selectedCategory === cat.id;
              const uploadedInCat = getCategoryUploadedCount(cat.id);
              const totalInCat = getCategoryTotalCount(cat.id);
              const hasPhotos = uploadedInCat > 0;

              return (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-medium whitespace-nowrap transition-all shrink-0 border ${
                    isSelected
                      ? 'bg-amber-500 text-slate-950 font-bold border-amber-400 shadow-md shadow-amber-500/20'
                      : 'bg-slate-900/90 text-slate-300 border-slate-800 hover:border-slate-700 hover:text-white'
                  }`}
                >
                  <span className={isSelected ? 'text-slate-950' : 'text-amber-400'}>
                    {getCategoryIcon(cat.icon, 'w-3.5 h-3.5')}
                  </span>
                  <span>{cat.shortName}</span>
                  <span
                    className={`px-1.5 py-0.5 rounded-full text-[10px] font-mono ${
                      isSelected
                        ? 'bg-slate-950/20 text-slate-950'
                        : hasPhotos
                        ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/30'
                        : 'bg-slate-800 text-slate-400'
                    }`}
                  >
                    {uploadedInCat}/{totalInCat}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Auto-match Report Feedback */}
        {autoMatchReport && autoMatchReport.length > 0 && (
          <div className="mb-6 p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/30 space-y-1">
            <div className="flex items-center justify-between text-xs font-bold text-emerald-300 font-mono mb-2">
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>Documentation Update Notice:</span>
              </span>
              <button 
                onClick={() => setAutoMatchReport(null)}
                className="text-slate-400 hover:text-white"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            </div>
            {autoMatchReport.map((msg, mIdx) => (
              <p key={mIdx} className="text-xs font-mono text-emerald-200/90 pl-5">
                {msg}
              </p>
            ))}
          </div>
        )}

        {/* Main Slider Card */}
        {currentSlide && (
          <div className={`relative bg-slate-900 border rounded-3xl overflow-hidden shadow-2xl transition-all ${
            isDragOver ? 'border-amber-400 ring-4 ring-amber-500/20' : 'border-slate-800'
          }`}>
            <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[480px] lg:min-h-[540px]">
              
              {/* Left 7/12: Image Preview OR Category Upload Dropzone */}
              <div className="lg:col-span-7 relative bg-slate-950 flex items-center justify-center overflow-hidden min-h-[280px] sm:min-h-[360px] lg:min-h-full">
                {currentPhotoSrc ? (
                  /* Uploaded Photo State */
                  <div className="relative w-full h-full flex items-center justify-center group bg-black">
                    <img
                      src={currentPhotoSrc}
                      alt={currentSlide.title}
                      className="w-full h-full object-cover max-h-[600px] transition-transform duration-700 group-hover:scale-102"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent lg:hidden" />

                    {/* Top Floating Badge & Actions */}
                    <div className="absolute top-3 left-3 sm:top-4 sm:left-4">
                      <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-500/90 text-slate-950 font-bold text-[11px] sm:text-xs backdrop-blur-md shadow-lg">
                        <CheckCircle2 className="w-3.5 h-3.5" />
                        <span className="truncate max-w-[140px] sm:max-w-none">Your Photo • {currentSlide.categoryName}</span>
                      </span>
                    </div>

                    <div className="absolute top-3 right-3 sm:top-4 sm:right-4 flex items-center gap-1.5 sm:gap-2">
                      <button
                        onClick={() => singleSlideFileInputRef.current?.click()}
                        className="px-2.5 py-1.5 bg-slate-900/90 hover:bg-amber-500 hover:text-slate-950 text-slate-200 text-[11px] sm:text-xs font-semibold rounded-xl backdrop-blur-md border border-slate-700/80 transition-all flex items-center gap-1 shadow-lg"
                        title="Replace this photo"
                      >
                        <RefreshCw className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
                        <span className="hidden sm:inline">Replace</span>
                      </button>

                      <button
                        onClick={handleRemoveCurrentPhoto}
                        className="p-1.5 sm:p-2 bg-slate-900/90 hover:bg-rose-600 text-slate-300 hover:text-white rounded-xl backdrop-blur-md border border-slate-700/80 transition-all shadow-lg"
                        title="Remove this photo"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>

                      <button
                        onClick={() => setLightboxPhoto({ slide: currentSlide, src: currentPhotoSrc })}
                        className="p-1.5 sm:p-2 bg-slate-900/90 hover:bg-slate-800 text-slate-200 rounded-xl backdrop-blur-md border border-slate-700/80 transition-all shadow-lg"
                        title="View Fullscreen"
                      >
                        <Maximize2 className="w-3.5 h-3.5" />
                      </button>
                    </div>

                    {/* Bottom Status bar */}
                    <div className="absolute bottom-3 left-3 right-3 sm:bottom-4 sm:left-4 sm:right-4 flex items-center justify-between text-[10px] sm:text-[11px] font-mono text-slate-300 bg-slate-900/80 backdrop-blur-md px-3 py-1.5 rounded-lg border border-slate-800">
                      <span>✓ Authentic documentation active</span>
                      <button
                        onClick={() => singleSlideFileInputRef.current?.click()}
                        className="text-amber-400 hover:underline flex items-center gap-1"
                      >
                        <UploadCloud className="w-3 h-3" />
                        <span>Change</span>
                      </button>
                    </div>
                  </div>
                ) : (
                  /* Empty State: Category-Specific Upload Dropzone */
                  <div className="p-4 sm:p-8 lg:p-12 w-full h-full flex flex-col items-center justify-center text-center space-y-4 sm:space-y-6">
                    {/* Category Institutional Icon Badge */}
                    <div className="relative">
                      <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl sm:rounded-3xl bg-amber-500/10 border-2 border-dashed border-amber-500/40 flex items-center justify-center text-amber-400 shadow-xl group-hover:scale-105 transition-transform">
                        {getCategoryIcon(
                          EVENT_CATEGORIES.find((c) => c.id === currentSlide.categoryKey)?.icon || 'Camera',
                          'w-7 h-7 sm:w-9 sm:h-9 text-amber-400'
                        )}
                      </div>
                      <div className="absolute -bottom-1.5 -right-1.5 w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-slate-900 border border-amber-500/50 flex items-center justify-center text-amber-400">
                        <Camera className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
                      </div>
                    </div>

                    <div className="space-y-1.5 max-w-md">
                      <div className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-[11px] font-mono font-semibold">
                        <span>Category: {currentSlide.categoryName}</span>
                      </div>
                      <h3 className="text-lg sm:text-2xl font-serif font-bold text-white">
                        Upload Photo for this Category
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-400 leading-relaxed px-2">
                        Add your photo from <strong className="text-slate-200">{currentSlide.title}</strong> ({currentSlide.location}).
                      </p>
                    </div>

                    {/* Interactive Dropzone Button */}
                    <div className="space-y-2 sm:space-y-3 w-full max-w-sm px-2">
                      <button
                        onClick={() => singleSlideFileInputRef.current?.click()}
                        className="w-full py-3 px-5 sm:py-3.5 sm:px-6 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-bold text-xs sm:text-sm rounded-xl sm:rounded-2xl transition-all shadow-lg shadow-amber-500/20 active:scale-[0.99] flex items-center justify-center gap-2"
                      >
                        <UploadCloud className="w-4 h-4" />
                        <span>Select Photo for {currentSlide.categoryName}</span>
                      </button>

                      <div className="text-[10px] sm:text-[11px] font-mono text-slate-500 flex items-center justify-center gap-2">
                        <span>or drag &amp; drop picture here</span>
                        <span>•</span>
                        <span className="text-amber-400/80">JPG, PNG, WebP</span>
                      </div>
                    </div>

                    {/* Recommended Filename Hint */}
                    <div className="p-2.5 sm:p-3 bg-slate-900/80 border border-slate-800 rounded-xl text-left text-xs max-w-sm w-full space-y-1">
                      <div className="text-slate-400 text-[10px] sm:text-[11px] font-mono flex items-center justify-between">
                        <span>Automatic naming hint:</span>
                        <span className="text-amber-400 font-bold">Auto-detects</span>
                      </div>
                      <code className="text-amber-300 font-mono text-[10px] sm:text-[11px] block bg-slate-950 px-2 py-1 rounded border border-slate-800/80 truncate">
                        {currentSlide.expectedFilename}
                      </code>
                    </div>
                  </div>
                )}
              </div>

              {/* Right 5/12: Event Details, Category Context & Navigation */}
              <div className="lg:col-span-5 p-4 sm:p-6 lg:p-8 flex flex-col justify-between space-y-4 sm:space-y-6 bg-gradient-to-b from-slate-900/90 to-slate-950/90 border-t lg:border-t-0 lg:border-l border-slate-800">
                <div className="space-y-3 sm:space-y-4">
                  {/* Category & Badge Header */}
                  <div className="flex items-center justify-between gap-2 flex-wrap">
                    <span className="px-2.5 py-1 rounded-md text-[10px] sm:text-[11px] font-mono font-bold bg-amber-500/10 text-amber-400 border border-amber-500/20 uppercase tracking-wider flex items-center gap-1.5">
                      {getCategoryIcon(
                        EVENT_CATEGORIES.find((c) => c.id === currentSlide.categoryKey)?.icon || 'Layers',
                        'w-3 h-3 text-amber-400'
                      )}
                      <span>{currentSlide.categoryName}</span>
                    </span>

                    <span className="px-2.5 py-1 rounded-md text-[10px] sm:text-[11px] font-mono bg-slate-800 text-slate-300 border border-slate-700">
                      {currentSlide.badge}
                    </span>
                  </div>

                  {/* Title & Program */}
                  <div className="space-y-1">
                    <h3 className="text-xl sm:text-2xl lg:text-3xl font-serif font-bold text-white tracking-tight leading-snug">
                      {currentSlide.title}
                    </h3>
                    <p className="text-xs sm:text-sm font-semibold text-amber-300/90">
                      {currentSlide.program}
                    </p>
                  </div>

                  {/* Institution & Role */}
                  <div className="p-3 sm:p-3.5 bg-slate-950/70 border border-slate-800/80 rounded-xl space-y-1.5">
                    <div className="flex items-center gap-2 text-xs text-slate-300">
                      <Building className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                      <span className="font-semibold text-white truncate">{currentSlide.institution}</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs text-slate-400">
                      <Award className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                      <span className="truncate">{currentSlide.role}</span>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed text-left sm:text-justify">
                    {currentSlide.description}
                  </p>

                  {/* Venue and Date metadata */}
                  <div className="pt-2 flex flex-wrap items-center gap-3 sm:gap-4 text-xs font-mono text-slate-400 border-t border-slate-800/80">
                    <span className="flex items-center gap-1.5">
                      <MapPin className="w-3.5 h-3.5 text-amber-400" />
                      <span>{currentSlide.location}</span>
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5 text-amber-400" />
                      <span>{currentSlide.year}</span>
                    </span>
                  </div>
                </div>

                {/* Bottom Navigation & Controls */}
                <div className="pt-3 sm:pt-4 border-t border-slate-800 space-y-3">
                  <div className="flex items-center justify-between text-xs font-mono text-slate-400">
                    <span className="font-semibold text-slate-300">
                      Slide {currentIndex + 1} of {filteredSlides.length}
                    </span>
                    <span className="text-[10px] sm:text-[11px] text-slate-500">
                      Category: {currentSlide.categoryName}
                    </span>
                  </div>

                  {/* Progress Dots */}
                  <div className="flex items-center gap-1.5 overflow-x-auto py-1">
                    {filteredSlides.map((slide, sIdx) => {
                      const isSlideActive = sIdx === currentIndex;
                      const hasUploaded = Boolean(userPhotos[slide.eventKey]);
                      return (
                        <button
                          key={slide.id}
                          onClick={() => setCurrentIndex(sIdx)}
                          className={`h-2 rounded-full transition-all shrink-0 ${
                            isSlideActive
                              ? 'w-7 bg-amber-400'
                              : hasUploaded
                              ? 'w-2 bg-emerald-400 hover:bg-emerald-300'
                              : 'w-2 bg-slate-700 hover:bg-slate-500'
                          }`}
                          title={`${slide.title} (${hasUploaded ? 'Photo uploaded' : 'Awaiting photo'})`}
                        />
                      );
                    })}
                  </div>

                  {/* Arrow Buttons & Slide Quick Upload */}
                  <div className="flex items-center justify-between gap-3 pt-1 sm:pt-2">
                    <div className="flex items-center gap-2">
                      <button
                        onClick={handlePrev}
                        disabled={filteredSlides.length <= 1}
                        className="p-2 sm:p-2.5 bg-slate-800 hover:bg-slate-700 disabled:opacity-40 disabled:pointer-events-none text-slate-200 rounded-xl transition-colors border border-slate-700 active:scale-95"
                        title="Previous event"
                      >
                        <ChevronLeft className="w-4 h-4" />
                      </button>

                      <button
                        onClick={handleNext}
                        disabled={filteredSlides.length <= 1}
                        className="p-2 sm:p-2.5 bg-slate-800 hover:bg-slate-700 disabled:opacity-40 disabled:pointer-events-none text-slate-200 rounded-xl transition-colors border border-slate-700 active:scale-95"
                        title="Next event"
                      >
                        <ChevronRight className="w-4 h-4" />
                      </button>
                    </div>

                    <button
                      onClick={() => singleSlideFileInputRef.current?.click()}
                      className="px-3 sm:px-3.5 py-2 bg-slate-800 hover:bg-slate-700 text-amber-400 border border-slate-700 hover:border-amber-500/50 rounded-xl text-xs font-semibold flex items-center gap-1.5 transition-all"
                    >
                      <Camera className="w-3.5 h-3.5" />
                      <span>{currentPhotoSrc ? 'Replace Photo' : 'Upload Photo'}</span>
                    </button>
                  </div>
                </div>

              </div>
            </div>
          </div>
        )}

        {/* Category Grid Overview (Allows direct upload for any category with one click) */}
        <div className="mt-12 bg-slate-900/60 border border-slate-800/80 rounded-3xl p-6 sm:p-8 space-y-5">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-800">
            <div>
              <h3 className="text-lg font-serif font-bold text-white flex items-center gap-2">
                <Layers className="w-4 h-4 text-amber-400" />
                <span>Quick Upload &amp; Photo Status by Category</span>
              </h3>
              <p className="text-xs text-slate-400 mt-0.5">
                Upload your photos directly to each category or view documentation status.
              </p>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={() => multiFileInputRef.current?.click()}
                className="px-3.5 py-2 bg-slate-800 hover:bg-slate-700 border border-slate-700 hover:border-amber-400 text-slate-200 text-xs font-semibold rounded-xl transition-all flex items-center gap-1.5"
              >
                <UploadCloud className="w-3.5 h-3.5 text-amber-400" />
                <span>Upload Batch (Auto-Assign)</span>
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {EVENT_CATEGORIES.filter((c) => c.id !== 'all').map((cat) => {
              const catSlides = GALLERY_SLIDES.filter((s) => s.categoryKey === cat.id);
              const uploadedInCat = catSlides.filter((s) => Boolean(userPhotos[s.eventKey])).length;
              const isComplete = uploadedInCat === catSlides.length;

              return (
                <div
                  key={cat.id}
                  className="p-4 bg-slate-950/80 border border-slate-800 rounded-2xl flex flex-col justify-between space-y-3 hover:border-slate-700 transition-all"
                >
                  <div className="space-y-2">
                    <div className="flex items-start justify-between gap-2">
                      <div className="flex items-center gap-2">
                        <div className="w-8 h-8 rounded-lg bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400 shrink-0">
                          {getCategoryIcon(cat.icon, 'w-4 h-4')}
                        </div>
                        <div>
                          <h4 className="text-xs font-bold text-white line-clamp-1">
                            {cat.name}
                          </h4>
                          <span className="text-[10px] font-mono text-slate-400">
                            {catSlides.length} {catSlides.length === 1 ? 'event slot' : 'event slots'}
                          </span>
                        </div>
                      </div>

                      <span
                        className={`px-2 py-0.5 rounded text-[10px] font-mono font-semibold ${
                          isComplete
                            ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/30'
                            : uploadedInCat > 0
                            ? 'bg-amber-500/10 text-amber-400 border border-amber-500/30'
                            : 'bg-slate-800 text-slate-400'
                        }`}
                      >
                        {uploadedInCat}/{catSlides.length}
                      </span>
                    </div>

                    <p className="text-[11px] text-slate-400 line-clamp-2">
                      {cat.description}
                    </p>
                  </div>

                  <div className="pt-2 border-t border-slate-900 flex items-center justify-between gap-2">
                    <button
                      onClick={() => {
                        setSelectedCategory(cat.id);
                        const element = document.getElementById('gallery');
                        element?.scrollIntoView({ behavior: 'smooth' });
                      }}
                      className="text-xs text-amber-400 hover:text-amber-300 font-medium transition-colors"
                    >
                      View on Slider →
                    </button>

                    <button
                      onClick={() => {
                        setSelectedCategory(cat.id);
                        setTimeout(() => singleSlideFileInputRef.current?.click(), 100);
                      }}
                      className="px-2.5 py-1.5 bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 text-[11px] font-semibold rounded-lg transition-all flex items-center gap-1"
                    >
                      <Camera className="w-3 h-3 text-amber-400" />
                      <span>Upload</span>
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>

      {/* Lightbox Modal */}
      {lightboxPhoto && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-md p-4">
          <div className="relative max-w-5xl w-full max-h-[90vh] flex flex-col items-center">
            <button
              onClick={() => setLightboxPhoto(null)}
              className="absolute -top-12 right-0 p-2 text-slate-300 hover:text-white rounded-full bg-slate-900/80 border border-slate-700"
            >
              <X className="w-6 h-6" />
            </button>

            <img
              src={lightboxPhoto.src}
              alt={lightboxPhoto.slide.title}
              className="max-w-full max-h-[75vh] object-contain rounded-2xl shadow-2xl border border-slate-800"
            />

            <div className="mt-4 text-center space-y-1">
              <span className="text-xs font-mono uppercase text-amber-400 font-semibold">
                Category: {lightboxPhoto.slide.categoryName}
              </span>
              <h4 className="text-lg font-serif font-bold text-white">
                {lightboxPhoto.slide.title}
              </h4>
              <p className="text-xs text-slate-300 font-mono">
                {lightboxPhoto.slide.institution} • {lightboxPhoto.slide.location} ({lightboxPhoto.slide.year})
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Category & Photo Uploader Modal */}
      <PhotoUploaderModal
        isOpen={isUploaderOpen}
        onClose={() => setIsUploaderOpen(false)}
        onPhotosUpdated={() => setUserPhotos(getStoredPhotos())}
      />
    </section>
  );
};
