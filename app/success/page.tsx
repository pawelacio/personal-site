import Link from 'next/link';

export default function Contact() {
  return (
    <main className="container text-center md:py-16">
      <h2 className="text-2xl font-bold py-2">Thank you for contact!</h2>
      <h3 className="text-lg font-bold py-2">
        I will reply as fast as possible.
      </h3>
      <Link className="underline" href="/">
        Go to the main page
      </Link>
    </main>
  );
}
