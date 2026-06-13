'use client';

import Image from 'next/image';
import { useState } from 'react';
import { siteAssets } from '@/features/home/data/home-content';
import { GallerySection } from './GallerySection';
import type {
  GalleryImage,
  GallerySection as GallerySectionData,
} from '../data/gallery-content';

type GalleryLightboxProps = {
  sections: GallerySectionData[];
};

const flattenGalleryImages = (sections: GallerySectionData[]) =>
  sections.flatMap((section) =>
    section.columns.flatMap((column) =>
      column.flatMap((tile) => [tile.front, tile.back]),
    ),
  );

export function GalleryLightbox({ sections }: GalleryLightboxProps) {
  const images = flattenGalleryImages(sections);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const activeImage = activeIndex === null ? null : images[activeIndex];
  const imageIndexBySrc = new Map(
    images.map((image, index) => [image.src, index]),
  );

  const openImage = (image: GalleryImage) => {
    if (window.screen.width <= 1200) {
      return;
    }

    const imageIndex = imageIndexBySrc.get(image.src);
    if (imageIndex !== undefined) {
      setActiveIndex(imageIndex);
    }
  };

  const showPrevious = () => {
    setActiveIndex((current) =>
      current === null || current === 0 ? images.length - 1 : current - 1,
    );
  };

  const showNext = () => {
    setActiveIndex((current) =>
      current === null ? 0 : (current + 1) % images.length,
    );
  };

  return (
    <>
      {sections.map((section, index) => (
        <GallerySection
          key={section.title}
          section={section}
          isFirst={index === 0}
          onImageOpen={openImage}
        />
      ))}
      {activeImage ? (
        <>
          <button
            type='button'
            aria-label='Close gallery overlay'
            className='fixed left-0 top-0 z-2 h-screen w-screen border-0 bg-black p-0 opacity-70'
            onClick={() => setActiveIndex(null)}
          />
          <button
            type='button'
            className='fixed right-8.75 top-3.75 z-2 border-0 bg-transparent text-[50px] font-bold leading-none text-[#f1f1f1] transition duration-300 hover:text-[#bbbbbb] min-[2560px]:text-[64px] max-[1200px]:text-[40px] max-[767.98px]:right-3.75 max-[767.98px]:top-0'
            onClick={() => setActiveIndex(null)}
            aria-label='Close photo'
          >
            &times;
          </button>
          <div className='fixed left-1/2 top-[8vh] z-2 -translate-x-1/2 rounded-[10px] bg-[#FCFCFC] p-4 pb-0 min-[2560px]:p-6 min-[2560px]:pb-0'>
            <div className='cc-zoom-in group relative'>
              <div className='relative min-h-175 min-w-250 max-w-480 max-h-250 max-[1920px]:min-h-150 max-[1920px]:min-w-212.5 max-[1920px]:max-w-400 max-[1920px]:max-h-212.5 max-[1366px]:min-h-75 max-[1366px]:min-w-150 max-[1366px]:max-w-300 max-[1366px]:max-h-150'>
                <Image
                  src={activeImage.src}
                  alt={activeImage.alt}
                  fill
                  sizes='100vw'
                  className='rounded-t-[10px] object-contain'
                />
              </div>
              <div className='relative z-2 flex min-h-[6%] items-center justify-center p-2 text-center text-[20px] text-[#212121] min-[2560px]:text-[26px] max-[767.98px]:text-[12px]'>
                {activeImage.caption}
              </div>
              <button
                type='button'
                className='absolute left-8 top-[48%] z-2 w-10 border-0 bg-transparent p-0 opacity-0 transition duration-300 group-hover:opacity-100 min-[2560px]:left-12 min-[2560px]:h-12 min-[2560px]:w-12'
                onClick={showPrevious}
                aria-label='Previous photo'
              >
                <Image
                  src={siteAssets.previous}
                  alt='Previous photo'
                  width={512}
                  height={512}
                  className='h-auto w-full transition-opacity hover:opacity-70'
                />
              </button>
              <button
                type='button'
                className='absolute right-8 top-[48%] z-2 w-10 border-0 bg-transparent p-0 opacity-0 transition duration-300 group-hover:opacity-100 min-[2560px]:right-12 min-[2560px]:h-12 min-[2560px]:w-12'
                onClick={showNext}
                aria-label='Next photo'
              >
                <Image
                  src={siteAssets.next}
                  alt='Next photo'
                  width={512}
                  height={512}
                  className='h-auto w-full transition-opacity hover:opacity-70'
                />
              </button>
            </div>
          </div>
        </>
      ) : null}
    </>
  );
}
