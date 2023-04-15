'use client';
import { ThemeSwitch } from '@/components/ThemeSwitch/ThemeSwitch';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

type CustomLinkProps = {
  children: string | JSX.Element;
  className: string;
  href: string;
};

const CustomLink = ({ children, className, href }: CustomLinkProps) => {
  const pathname = usePathname();

  return (
    <Link
      className={`${href === pathname ? 'hidden' : 'block'} ${className}`}
      href={href}
    >
      {children}
    </Link>
  );
};

export default function Header() {
  return (
    <header className="flex flex-row items-center py-8">
      <h1 className="font-semibold whitespace-nowrap basis-1/4">
        Paweł Kaczmarek
      </h1>
      <nav className="flex flex-row-reverse basis-3/4">
        <CustomLink className="px-4" href="/">
          Home
        </CustomLink>
        <CustomLink className="px-4" href="/contact">
          Contact
        </CustomLink>
      </nav>
      <div className="flex-grow">
        <ThemeSwitch />
      </div>
    </header>
  );
}
