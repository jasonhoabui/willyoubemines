'use client';

import { usePathname } from 'next/navigation';
import GoBack from './GoBack';

const ClientWrapper = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname();

  return (
    <>
      {pathname === '/ask' && (
        <div className="absolute top-4 left-4">
          <GoBack />
        </div>
      )}
      {children}
    </>
  );
};

export default ClientWrapper;