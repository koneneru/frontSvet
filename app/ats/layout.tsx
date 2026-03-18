'use client';

import { routes } from '@/shared/config';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function AtsLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  const tabs = [
    { href: routes.ats.calls(), label: 'Звонки' },
    { href: routes.ats.gateways(), label: 'Шлюзы' },
    { href: routes.ats.abonents(), label: 'Абоненты' },
  ];

  return (
    <div className="container-lg">
      <div className="nav nav-tabs mb-4">
        {tabs.map(tab => (
          <Link
            key={tab.href}
            href={tab.href}
            className={`nav-link ${pathname === tab.href ? 'active' : ''}`}
          >
            {tab.label}
          </Link>
        ))}
      </div>

      {children}
    </div>
  );
}
