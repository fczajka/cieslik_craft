import Image from 'next/image';
import { bottomSocialLinks } from '@/features/home/data/home-content';

export function BottomNavbar() {
  return (
    <nav className='fixed bottom-0 flex min-h-[8vh] w-full items-center bg-[#FCFCFC] p-1 min-[992.1px]:hidden'>
      <ul className='mt-1 flex h-full w-full list-none items-center justify-around'>
        {bottomSocialLinks.map((link) => (
          <li key={link.label} className='h-9 w-9'>
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
                width={36}
                height={36}
                className='h-full w-full object-contain'
              />
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
