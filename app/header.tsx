import Link from 'next/link';

export default function Header() {
  return (
    <header className="flex flex-row items-center py-8">
      <h1 className="font-semibold basis-1/4">Paweł Kaczmarek</h1>
      <nav className="basis-3/4">
        <Link className="px-4" href="#about">
          About
        </Link>
        <Link className="px-4" href="#timeline">
          Timeline
        </Link>
        <Link className="px-4" href="#skills">
          Skills
        </Link>
      </nav>
    </header>
  );
}
