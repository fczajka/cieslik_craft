import Image from 'next/image';
import Link from 'next/link';
import {
  headerSocialLinks,
  siteAssets,
} from '@/features/home/data/home-content';

type HeaderProps = {
  onMenuOpen: () => void;
};

export function Header({ onMenuOpen }: HeaderProps) {
  return (
    <header className='fixed top-0 z-1 flex h-[10vh] w-full items-center bg-[#FCFCFC] min-[2560px]:min-h-31.25'>
      <div className='z-2 w-[10%] max-[992px]:w-[21%]'>
        <button
          type='button'
          className='relative left-6.5 w-11 cursor-pointer border-0 bg-transparent p-0 max-[992px]:left-5'
          aria-label='opensMenu'
          onClick={onMenuOpen}
        >
          <span className='m-1 block h-1.25 w-9 bg-[#212121] max-[992px]:m-0.75 max-[992px]:h-1 max-[992px]:w-7' />
          <span className='m-1 block h-1.25 w-9 bg-[#212121] max-[992px]:m-0.75 max-[992px]:h-1 max-[992px]:w-7' />
          <span className='m-1 block h-1.25 w-9 bg-[#212121] max-[992px]:m-0.75 max-[992px]:h-1 max-[992px]:w-7' />
        </button>
      </div>
      <div className='fixed flex w-full justify-center p-2'>
        <div className='w-76.25 min-[2560px]:w-112.5 max-[575.98px]:w-62.5 max-[400.98px]:w-43.75'>
          <Link href='/' aria-label='Cieslik Craft home'>
            <Image
              src={siteAssets.logo}
              alt='CieslikCraft - Logo'
              width={2048}
              height={404}
              priority
              className='h-auto w-full'
            />
          </Link>
        </div>
      </div>
      <nav className='fixed right-0 w-[30%] max-[992px]:hidden'>
        <ul className='flex list-none items-center justify-around'>
          {headerSocialLinks.map((link) => (
            <li
              key={link.label}
              className='h-9 w-9 min-[2560px]:h-12 min-[2560px]:w-12'
            >
              <a
                href={link.href}
                target={link.isExternal ? '_blank' : undefined}
                rel={link.isExternal ? 'noopener noreferrer' : undefined}
                aria-label={link.label}
                className='block h-full w-full'
              >
                <Image
                  src={link.image}
                  alt={link.alt}
                  width={512}
                  height={512}
                  className='h-full w-full object-contain'
                />
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
