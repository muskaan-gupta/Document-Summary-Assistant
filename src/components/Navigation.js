'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navigation() {
  const pathname = usePathname();
  const isOnSummaryPage = pathname === '/summarize';
  
  const handleNewFileClick = (e) => {
    if (isOnSummaryPage) {
      e.preventDefault();
      // Dispatch a custom event that the summary page can listen to
      window.dispatchEvent(new CustomEvent('resetSummaryPage'));
    }
  };
  
  return (
    <nav className="navigation">
      <div className="nav-container">
        <Link href="/" className="nav-brand">
          <div className="brand-logo">
            <span className="brand-icon">📂 </span>
            <span className="nav-brand-text"> folio-brief</span>
          </div>
        </Link>
      
      </div>
    </nav>
  );
}
