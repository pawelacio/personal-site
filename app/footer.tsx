import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="py-8">
      <div className="flex flex-row justify-center">
        <Link className="px-4" href="https://github.com/pawelacio">
          Github
        </Link>
        <Link className="px-4" href="https://twitter.com/pawikaczmarek">
          Twitter
        </Link>
        <Link
          className="px-4"
          href="https://www.linkedin.com/in/kaczmarek-pawel"
        >
          Linkedin
        </Link>
        <Link className="px-4" href="https://www.instagram.com/pawikaczmarek/">
          Instagram
        </Link>
      </div>
    </footer>
  );
}
