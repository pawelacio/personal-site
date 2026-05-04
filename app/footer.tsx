import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="py-8">
      <div className="flex flex-row justify-center">
        <Link
          className="px-4"
          href="https://github.com/pawelacio"
          target="_blank"
          rel="noopener noreferrer"
        >
          Github
        </Link>
        <Link
          className="px-4"
          href="https://twitter.com/pawikaczmarek"
          target="_blank"
          rel="noopener noreferrer"
        >
          Twitter
        </Link>
        <Link
          className="px-4"
          href="https://www.linkedin.com/in/kaczmarek-pawel"
          target="_blank"
          rel="noopener noreferrer"
        >
          Linkedin
        </Link>
        <Link
          className="px-4"
          href="https://www.instagram.com/pawikaczmarek/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Instagram
        </Link>
      </div>
    </footer>
  );
}
