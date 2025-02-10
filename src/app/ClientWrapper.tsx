'use client';

import { usePathname } from 'next/navigation';
import GoBack from './GoBack';

export default function ClientWrapper({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  return (
    <>
      {pathname !== '/' && (
        <div className="absolute top-4 left-4">
          <GoBack />
        </div>
      )}
      {children}
    </>
  );
}