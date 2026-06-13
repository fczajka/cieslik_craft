import { HomeBoats } from './HomeBoats';
import { HomeBottomBlocks } from './HomeBottomBlocks';
import { HomeCarousel } from './HomeCarousel';
import { carouselSlides, siteAssets } from '../data/home-content';

function ParallaxBlock({
  image,
  children,
}: {
  image: string;
  children: React.ReactNode;
}) {
  return (
    <section
      className='h-[70vh] bg-cover bg-fixed bg-center bg-no-repeat'
      style={{ backgroundImage: `url("${image}")` }}
    >
      <h2 className='relative left-[5%] top-1/2 w-max -translate-y-1/2 text-[32px] tracking-[2px] text-[#FCFCFC] min-[2560px]:text-[64px] max-[767.98px]:text-[24px] max-[575.98px]:text-[16px]'>
        {children}
      </h2>
    </section>
  );
}

export function HomePage() {
  return (
    <>
      <section className='mt-[10vh] h-[90vh] w-full max-[991.98px]:h-[82vh]'>
        <video
          className='h-full w-full object-cover'
          autoPlay
          loop
          muted
          playsInline
          src={siteAssets.video}
        />
      </section>
      <HomeCarousel slides={carouselSlides} />
      <ParallaxBlock image={siteAssets.firstParallax}>
        <>
          LEGENDS AREN&apos;T BORN.
          <br />
          THEY&apos;RE BUILT.
        </>
      </ParallaxBlock>
      <HomeBoats />
      <ParallaxBlock image={siteAssets.secondParallax}>
        <>
          MADE FROM DREAMS IN POLAND.
          <br />
          RIDE LIKE A DREAM ON WATER.
        </>
      </ParallaxBlock>
      <HomeBottomBlocks />
    </>
  );
}
