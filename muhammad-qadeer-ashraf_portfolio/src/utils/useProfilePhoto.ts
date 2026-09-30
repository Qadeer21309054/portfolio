import { useState, useEffect } from 'react';
import { getProfilePhoto, saveProfilePhoto, removeProfilePhoto } from './photoStorage';
import { PERSONAL_INFO } from '../data/portfolioData';

export function useProfilePhoto() {
  const [photo, setPhoto] = useState<string | null>(() => {
    return getProfilePhoto() || PERSONAL_INFO.profilePhoto;
  });

  useEffect(() => {
    const handleUpdate = (e: Event) => {
      const customEvent = e as CustomEvent<string | null>;
      if (customEvent.detail !== undefined) {
        setPhoto(customEvent.detail || PERSONAL_INFO.profilePhoto);
      } else {
        setPhoto(getProfilePhoto() || PERSONAL_INFO.profilePhoto);
      }
    };

    window.addEventListener('mqa_profile_photo_updated', handleUpdate);
    return () => window.removeEventListener('mqa_profile_photo_updated', handleUpdate);
  }, []);

  const uploadPhotoFile = (file: File) => {
    const reader = new FileReader();
    reader.onload = (e) => {
      const result = e.target?.result as string;
      if (result) {
        saveProfilePhoto(result);
        setPhoto(result);
      }
    };
    reader.readAsDataURL(file);
  };

  const resetPhoto = () => {
    removeProfilePhoto();
    setPhoto(PERSONAL_INFO.profilePhoto);
  };

  return {
    profilePhoto: photo,
    uploadPhotoFile,
    resetPhoto,
    isCustomPhoto: Boolean(getProfilePhoto()),
  };
}
