import Image from 'next/image';
import Link from 'next/link';
import {
  mediaLinks,
  sidebarSocialLinks,
  siteAssets,
} from '@/features/home/data/home-content';

type SidebarProps = {
  isOpen: boolean;
  isMediaExpanded: boolean;
  onClose: () => void;
  onToggleMedia: () => void;
};

export function Sidebar({
  isOpen,
  isMediaExpanded,
  onClose,
  onToggleMedia,
}: SidebarProps) {
  const listHeight = isMediaExpanded
    ? 'h-[390px] min-[2560px]:h-[480px]'
    : 'h-[165px] min-[2560px]:h-[194px]';

  return (
    <nav
      className={`fixed top-0 z-3 h-full w-62.5 bg-[#FCFCFC] transition-all duration-400 ease-in-out min-[2560px]:w-87.5 ${
        isOpen ? 'translate-x-0' : '-translate-x-full'
      }`}
      aria-label='Menu'
    >
      <button
        type='button'
        className='absolute right-3.75 top-3.75 h-7.5 w-7.5 cursor-pointer rounded-lg border-0 bg-transparent p-2 transition duration-400 hover:bg-[#CCCCCC] min-[2560px]:h-9 min-[2560px]:w-9'
        onClick={onClose}
        aria-label='Dismiss menu'
      >
        <Image
          src={siteAssets.close}
          alt='Dismiss - X'
          width={512}
          height={512}
          className='h-full w-full object-contain'
        />
      </button>
      <h1 className='mx-6.25 mb-4.5 mt-4 text-[32px] min-[2560px]:text-[40px]'>
        MENU
      </h1>
      <ul
        className={`w-full overflow-hidden border-y border-[#212121] py-1.5 transition-all duration-400 min-[2560px]:border-y-2 ${listHeight}`}
      >
        <li className='cursor-pointer px-5 py-3 text-[18px] hover:bg-[#CCCCCC] min-[2560px]:text-[24px]'>
          <Link href='/' className='inline-block w-full' onClick={onClose}>
            HOME
          </Link>
        </li>
        <li className='cursor-pointer px-5 py-3 text-[18px] hover:bg-[#CCCCCC] min-[2560px]:text-[24px]'>
          <Link
            href='/gallery'
            className='inline-block w-full'
            onClick={onClose}
          >
            GALLERY
          </Link>
        </li>
        <li className='cursor-pointer text-[18px] hover:bg-[#CCCCCC] min-[2560px]:text-[24px]'>
          <button
            type='button'
            className='flex w-full cursor-pointer items-center justify-between border-0 bg-transparent px-5 py-3 text-left'
            onClick={onToggleMedia}
            aria-expanded={isMediaExpanded}
          >
            MEDIA
            <span
              aria-hidden='true'
              className='mt-1.5 h-2 w-2 rotate-45 border-b border-r border-[#212121]'
            />
          </button>
        </li>
        {mediaLinks.map((link) => (
          <li
            key={link.label}
            className='relative z-1 cursor-pointer py-1 pl-6.5 text-[16px] hover:bg-[#CCCCCC] min-[2560px]:text-[22px]'
          >
            <a
              href={link.href}
              target='_blank'
              rel='noopener noreferrer'
              className='inline-block w-full'
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>
      <ul className='relative z-2 flex h-68 w-full list-none items-start justify-around bg-[#FCFCFC] pt-4'>
        {sidebarSocialLinks.map((link) => (
          <li key={link.label} className='w-13 min-[2560px]:w-16'>
            <a
              href={link.href}
              target={link.isExternal ? '_blank' : undefined}
              rel={link.isExternal ? 'noopener noreferrer' : undefined}
              aria-label={link.label}
              className='block w-full'
            >
              <Image
                src={link.image}
                alt={link.alt}
                width={1024}
                height={1024}
                className='h-auto w-full'
              />
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
