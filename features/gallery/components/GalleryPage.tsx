import { GalleryLightbox } from './GalleryLightbox';
import { gallerySections } from '../data/gallery-content';

export function GalleryPage() {
  return <GalleryLightbox sections={gallerySections} />;
}
