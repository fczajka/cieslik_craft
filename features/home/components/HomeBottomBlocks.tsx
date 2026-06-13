import Link from 'next/link';
import { siteAssets } from '../data/home-content';

function OverlayText({ children }: { children: React.ReactNode }) {
  return (
    <div className='absolute inset-0 flex items-center justify-center text-[22px] text-[#FCFCFC] opacity-0 transition-all duration-400 ease-in-out hover:bg-black/60 hover:opacity-100'>
      {children}
    </div>
  );
}

function BlockLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className='absolute mt-5 bg-[#212121] px-4 py-2 text-[22px] tracking-[2px] text-[#FCFCFC] min-[2560px]:text-[32px] max-[767.98px]:text-[16px]'>
      {children}
    </div>
  );
}

export function HomeBottomBlocks() {
  return (
    <section className='flex max-[991.98px]:flex-col'>
      <Link href='/gallery' className='w-[33%] max-[991.98px]:w-full'>
        <div
          className='relative h-[35vh] w-full bg-cover bg-center bg-no-repeat'
          style={{ backgroundImage: `url("${siteAssets.galleryBlock}")` }}
        >
          <BlockLabel>GALLERY</BlockLabel>
          <OverlayText>
            From dreams to realization, one photo - thousand words
          </OverlayText>
        </div>
      </Link>
      <div className='h-[35vh] w-[34%] max-[991.98px]:w-full'>
        <iframe
          title='youtube-video'
          className='h-full w-full'
          src='https://www.youtube.com/embed/AMhv17vGN8E'
          allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture'
          allowFullScreen
        />
      </div>
      <div
        className='relative h-[35vh] w-[33%] bg-cover bg-center bg-no-repeat max-[991.98px]:w-full'
        style={{ backgroundImage: `url("${siteAssets.articleBlock}")` }}
      >
        <a
          href='https://blog.dluta.pl/zbuduj-samodzielnie-motorowke-z-cieslik-craft/'
          target='_blank'
          rel='noopener noreferrer'
          className='block h-full w-full'
        >
          <BlockLabel>ARTICLE</BlockLabel>
          <OverlayText>
            <span className='text-center'>
              This is how it usually begins...
              <br />
              Only in polish language
            </span>
          </OverlayText>
        </a>
      </div>
    </section>
  );
}
