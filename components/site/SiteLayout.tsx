import type { ReactNode } from 'react';
import { SiteChrome } from './SiteChrome';

type SiteLayoutProps = {
  children: ReactNode;
};

export function SiteLayout({ children }: SiteLayoutProps) {
  return <SiteChrome>{children}</SiteChrome>;
}
