export type CategoryType = 
  | 'all'
  | 'destination'
  | 'christian'
  | 'hindu'
  | 'muslim'
  | 'pre-wedding'
  | 'films';

export interface WeddingGalleryItem {
  id: string;
  title: string;
  subtitle: string;
  category: CategoryType;
  categoryLabel: string;
  location: string;
  coverImage: string;
  images: string[];
  featured?: boolean;
  videoUrl?: string; // YouTube or Vimeo embed URL if it has video
  hasVideo?: boolean;
  storyDate?: string;
  photographerNotes?: string;
  vendors?: {
    venue?: string;
    decor?: string;
    outfits?: string;
    makeup?: string;
    planner?: string;
  };
}

export interface HeroSlide {
  id: string;
  title: string;
  subtitle: string;
  category: string;
  bgImage: string;
  videoUrl?: string;
  hasVideo?: boolean;
}

export interface Testimonial {
  id: string;
  names: string;
  location: string;
  review: string;
  rating: number;
  avatar: string;
  weddingDate: string;
}

export interface FilmItem {
  id: string;
  title: string;
  couple: string;
  location: string;
  duration: string;
  thumbnail: string;
  videoUrl: string;
  description: string;
}
