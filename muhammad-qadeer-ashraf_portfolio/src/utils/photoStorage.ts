// Utility for managing and persisting Muhammad Qadeer Ashraf's authentic event photos

export const PHOTO_STORAGE_KEY = 'mqa_event_photos_v1';
export const PROFILE_PHOTO_KEY = 'mqa_profile_photo_v1';

export interface StoredPhotos {
  [eventKey: string]: string; // eventKey -> base64 data URL
}

export function getProfilePhoto(): string | null {
  if (typeof window === 'undefined') return null;
  try {
    return localStorage.getItem(PROFILE_PHOTO_KEY);
  } catch (err) {
    console.error('Failed to load profile photo from localStorage:', err);
    return null;
  }
}

export function saveProfilePhoto(dataUrl: string): void {
  if (typeof window === 'undefined') return;
  try {
    localStorage.setItem(PROFILE_PHOTO_KEY, dataUrl);
    window.dispatchEvent(new CustomEvent('mqa_profile_photo_updated', { detail: dataUrl }));
  } catch (err) {
    console.error('Failed to save profile photo to localStorage:', err);
  }
}

export function removeProfilePhoto(): void {
  if (typeof window === 'undefined') return;
  try {
    localStorage.removeItem(PROFILE_PHOTO_KEY);
    window.dispatchEvent(new CustomEvent('mqa_profile_photo_updated', { detail: null }));
  } catch (err) {
    console.error('Failed to remove profile photo from localStorage:', err);
  }
}

export function getStoredPhotos(): StoredPhotos {
  if (typeof window === 'undefined') return {};
  try {
    const raw = localStorage.getItem(PHOTO_STORAGE_KEY);
    return raw ? JSON.parse(raw) : {};
  } catch (err) {
    console.error('Failed to load stored photos from localStorage:', err);
    return {};
  }
}

export function saveStoredPhotos(photos: StoredPhotos): void {
  if (typeof window === 'undefined') return;
  try {
    localStorage.setItem(PHOTO_STORAGE_KEY, JSON.stringify(photos));
    window.dispatchEvent(new CustomEvent('mqa_photos_updated', { detail: photos }));
  } catch (err) {
    console.error('Failed to save photos to localStorage:', err);
  }
}

export function savePhotoForEvent(eventKey: string, dataUrl: string): void {
  const current = getStoredPhotos();
  current[eventKey] = dataUrl;
  saveStoredPhotos(current);
}

export function removePhotoForEvent(eventKey: string): void {
  const current = getStoredPhotos();
  delete current[eventKey];
  saveStoredPhotos(current);
}

export function clearAllStoredPhotos(): void {
  if (typeof window === 'undefined') return;
  localStorage.removeItem(PHOTO_STORAGE_KEY);
  window.dispatchEvent(new CustomEvent('mqa_photos_updated', { detail: {} }));
}

// Automatic matching helper: inspects a file's name and identifies which event key it belongs to
export function matchEventKeyFromFilename(filename: string): string | null {
  const lower = filename.toLowerCase().replace(/[-_.]/g, ' ');

  // 0. Profile Photo
  if (
    lower.includes('profile') ||
    lower.includes('headshot') ||
    lower.includes('portrait') ||
    lower.includes('mqa profile') ||
    lower.includes('my photo') ||
    lower.includes('avatar')
  ) {
    return 'profile';
  }

  // 1. Kakuma Refugee Camp Summit
  if (
    lower.includes('kakuma') ||
    lower.includes('refugee') ||
    lower.includes('displacement') ||
    lower.includes('kenya') ||
    lower.includes('mobility') ||
    lower.includes('immobility')
  ) {
    return 'kakuma';
  }

  // 2. Central European University (CEU) Budapest
  if (
    lower.includes('ceu') ||
    lower.includes('budapest') ||
    lower.includes('citizenship') ||
    lower.includes('hungary') ||
    lower.includes('backsliding') ||
    lower.includes('democratic')
  ) {
    return 'ceu';
  }

  // 3. University of Copenhagen
  if (
    lower.includes('copenhagen') ||
    lower.includes('icourt') ||
    lower.includes('icourts') ||
    lower.includes('denmark') ||
    lower.includes('mobile') ||
    lower.includes('phd') ||
    lower.includes('methodolog')
  ) {
    return 'copenhagen';
  }

  // 4. European Humanities University (EHU) Vilnius
  if (
    lower.includes('vilnius') ||
    lower.includes('lithuania') ||
    lower.includes('ehu') ||
    lower.includes('humanities') ||
    lower.includes('moot') ||
    lower.includes('echr') ||
    lower.includes('human vs ai')
  ) {
    return 'vilnius';
  }

  // 5. Bangladeshi Space Law & Aviation Conference
  if (
    lower.includes('space') ||
    lower.includes('aviation') ||
    lower.includes('bsmraau') ||
    lower.includes('aerospace') ||
    (lower.includes('bangladesh') && (lower.includes('conference') || lower.includes('space')))
  ) {
    return 'space_law';
  }

  // 6. Punjab Bar Council & Legal Capitol
  if (
    lower.includes('punjab') ||
    lower.includes('bar') ||
    lower.includes('capitol') ||
    lower.includes('advocate') ||
    lower.includes('court') ||
    lower.includes('courtroom') ||
    lower.includes('litigation') ||
    lower.includes('lahore') ||
    lower.includes('lawyer')
  ) {
    return 'punjab_bar';
  }

  // 7. Access to Justice in Eastern Europe (AJEE)
  if (
    lower.includes('ajee') ||
    lower.includes('kyiv') ||
    lower.includes('ukraine') ||
    lower.includes('reviewer') ||
    lower.includes('scopus') ||
    lower.includes('journal') ||
    lower.includes('dispute')
  ) {
    return 'ajee';
  }

  // 8. BRAC University 4-Year Law Degree / Graduation
  if (
    lower.includes('brac') ||
    lower.includes('graduation') ||
    lower.includes('convocation') ||
    lower.includes('dhaka') ||
    lower.includes('portrait') ||
    lower.includes('profile') ||
    lower.includes('degree') ||
    lower.includes('llb') ||
    lower.includes('bangladesh') ||
    lower.includes('distinction') ||
    lower.includes('qadeer') ||
    lower.includes('ashraf')
  ) {
    return 'brac';
  }

  return null;
}
