import { usePathname } from 'next/navigation';

export const GetPageName = () => {
  const pathname = usePathname(); // e.g. '/products/123'

    if (pathname === '/') return 'Home';

    const segment = pathname.split('/')[1]; // e.g. 'products'
    if (!segment) return 'Unknown';

    return segment.charAt(0).toUpperCase() + segment.slice(1);
}

