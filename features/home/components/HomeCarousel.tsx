'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';
import type { CarouselSlide } from '../data/home-content';

type HomeCarouselProps = {
  slides: CarouselSlide[];
};

export function HomeCarousel({ slides }: HomeCarouselProps) {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % slides.length);
    }, 5000);

    return () => window.clearInterval(interval);
  }, [slides.length]);

  const showPrevious = () => {
    setActiveIndex((current) =>
      current === 0 ? slides.length - 1 : current - 1,
    );
  };

  const showNext = () => {
    setActiveIndex((current) => (current + 1) % slides.length);
  };

  return (
    <div className='relative w-full'>
      <ol className='absolute bottom-6 left-0 right-0 z-10 flex list-none justify-center'>
        {slides.map((slide, index) => (
          <li key={slide.src} className='mx-0.75'>
            <button
              type='button'
              aria-label={`Show slide ${index + 1}`}
              className={`box-content h-1 w-7.5 cursor-pointer border-x-0 border-y-10 border-solid border-transparent bg-white bg-clip-padding p-0 transition-opacity duration-600 min-[2560px]:h-1.25 min-[2560px]:w-12.5 ${
                index === activeIndex ? 'opacity-100' : 'opacity-50'
              }`}
              onClick={() => setActiveIndex(index)}
            />
          </li>
        ))}
      </ol>
      <div className='w-full overflow-hidden'>
        {slides.map((slide, index) => {
          let width = 2048;
          let height = 1365;
          if (slide.src.includes('slide4')) {
            width = 5048;
            height = 2836;
          } else if (
            slide.src.includes('slide7') ||
            slide.src.includes('slide8')
          ) {
            width = 2028;
            height = 1034;
          }

          const image = (
            <Image
              src={slide.src}
              alt={slide.alt}
              width={width}
              height={height}
              sizes='100vw'
              className='w-full h-auto block'
              priority={index === 0}
            />
          );

          return (
            <div
              key={slide.src}
              className={`float-left -mr-full w-full transition-transform duration-600 backface-hidden ${
                index === activeIndex ? 'block' : 'hidden'
              }`}
            >
              {slide.href ? (
                <a href={slide.href} target='_blank' rel='noopener noreferrer'>
                  {image}
                </a>
              ) : (
                image
              )}
            </div>
          );
        })}
      </div>
      <button
        type='button'
        className='absolute left-0 top-1/2 -translate-y-1/2 z-10 ml-[5%] flex items-center justify-center border-0 bg-transparent p-6.25 text-center text-white opacity-90 transition-opacity duration-150'
        onClick={showPrevious}
        aria-label='Previous slide'
      >
        <span className='inline-block h-5 w-5 -rotate-45 border-l-2 border-t-2 border-white min-[2560px]:h-10 min-[2560px]:w-10' />
      </button>
      <button
        type='button'
        className='absolute right-0 top-1/2 -translate-y-1/2 z-10 mr-[5%] flex items-center justify-center border-0 bg-transparent p-6.25 text-center text-white opacity-90 transition-opacity duration-150'
        onClick={showNext}
        aria-label='Next slide'
      >
        <span className='inline-block h-5 w-5 rotate-45 border-r-2 border-t-2 border-white min-[2560px]:h-10 min-[2560px]:w-10' />
      </button>
    </div>
  );
}
