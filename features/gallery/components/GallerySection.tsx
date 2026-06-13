import Image from 'next/image';
import type {
  GalleryImage,
  GallerySection as GallerySectionData,
  GalleryTile,
  GalleryTileHeight,
} from '../data/gallery-content';

type GallerySectionProps = {
  section: GallerySectionData;
  isFirst: boolean;
  onImageOpen: (image: GalleryImage) => void;
};

const tileHeightClasses: Record<GalleryTileHeight, string> = {
  short: 'h-[200px] max-[767.98px]:h-[175px]',
  standard: 'h-[400px] max-[767.98px]:h-[350px]',
  feature: 'h-[600px] max-[767.98px]:h-[525px]',
};

function GalleryTileView({
  tile,
  onImageOpen,
}: {
  tile: GalleryTile;
  onImageOpen: (image: GalleryImage) => void;
}) {
  return (
    <div className={`${tileHeightClasses[tile.height]} w-full p-2`}>
      <div className='cc-flip-card h-full w-full'>
        <div className='cc-flip-card-inner'>
          <GalleryFace image={tile.front} onImageOpen={onImageOpen} />
          <GalleryFace image={tile.back} onImageOpen={onImageOpen} isBack />
        </div>
      </div>
    </div>
  );
}

function GalleryFace({
  image,
  isBack = false,
  onImageOpen,
}: {
  image: GalleryImage;
  isBack?: boolean;
  onImageOpen: (image: GalleryImage) => void;
}) {
  return (
    <button
      type='button'
      className={`cc-flip-card-face cursor-pointer border-0 bg-transparent p-0 ${
        isBack ? 'cc-flip-card-back' : ''
      }`}
      onClick={() => onImageOpen(image)}
      aria-label={image.alt}
    >
      <Image
        src={image.src}
        alt={image.alt}
        fill
        sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw'
        className='object-cover'
        style={{ objectPosition: image.objectPosition ?? '50% 50%' }}
      />
    </button>
  );
}

export function GallerySection({
  section,
  isFirst,
  onImageOpen,
}: GallerySectionProps) {
  return (
    <section>
      <h1
        className={`text-center text-[56px] min-[2560px]:text-[72px] max-[575.98px]:text-[40px] max-[400.98px]:text-[32px] ${
          isFirst
            ? 'mb-18 mt-[15vh] max-[575.98px]:mb-16 max-[575.98px]:mt-[12vh] max-[400.98px]:mb-8'
            : 'm-18 max-[575.98px]:m-16 max-[400.98px]:m-8'
        }`}
      >
        {section.title}
      </h1>
      <div className='mx-auto flex max-w-480 flex-row flex-wrap'>
        {section.columns.map((column, index) => (
          <div
            key={`${section.title}-${index}`}
            className='max-w-[25%] flex-[25%] max-[1200px]:max-w-[50%] max-[1200px]:flex-[50%] max-[767.98px]:max-w-full max-[767.98px]:flex-[100%]'
          >
            {column.map((tile) => (
              <GalleryTileView
                key={`${tile.front.src}-${tile.back.src}`}
                tile={tile}
                onImageOpen={onImageOpen}
              />
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}
