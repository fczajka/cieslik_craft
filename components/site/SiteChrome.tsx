'use client';

import type { ReactNode } from 'react';
import { useCallback, useEffect, useRef, useState } from 'react';
import { BottomNavbar } from './BottomNavbar';
import { Footer } from './Footer';
import { Header } from './Header';
import { Sidebar } from './Sidebar';

type SiteChromeProps = {
  children: ReactNode;
};

export function SiteChrome({ children }: SiteChromeProps) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isOverlayVisible, setIsOverlayVisible] = useState(false);
  const [isMediaExpanded, setIsMediaExpanded] = useState(false);
  const closeTimer = useRef<number | null>(null);

  const clearCloseTimer = useCallback(() => {
    if (closeTimer.current !== null) {
      window.clearTimeout(closeTimer.current);
      closeTimer.current = null;
    }
  }, []);

  const openSidebar = useCallback(() => {
    clearCloseTimer();
    setIsOverlayVisible(true);
    setIsSidebarOpen(true);
  }, [clearCloseTimer]);

  const closeSidebar = useCallback(() => {
    setIsSidebarOpen(false);
    clearCloseTimer();
    closeTimer.current = window.setTimeout(() => {
      setIsOverlayVisible(false);
      closeTimer.current = null;
    }, 400);
  }, [clearCloseTimer]);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'm') {
        openSidebar();
      }
    };

    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      clearCloseTimer();
    };
  }, [clearCloseTimer, openSidebar]);

  return (
    <>
      <Sidebar
        isOpen={isSidebarOpen}
        isMediaExpanded={isMediaExpanded}
        onClose={closeSidebar}
        onToggleMedia={() => setIsMediaExpanded((current) => !current)}
      />
      <Header onMenuOpen={openSidebar} />
      <main>{children}</main>
      <Footer />
      <BottomNavbar />
      {isOverlayVisible ? (
        <button
          type='button'
          aria-label='Close menu overlay'
          className='fixed left-0 top-0 z-2 h-screen w-screen border-0 bg-black p-0 opacity-70'
          onClick={closeSidebar}
        />
      ) : null}
    </>
  );
}
