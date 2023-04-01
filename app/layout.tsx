import { Roboto } from 'next/font/google';
import './globals.css';
import Header from './header';
import Footer from './footer';

export const metadata = {
  title: 'Frontend developer | Pawel Kaczmarek',
  description: 'Frontend developer | Pawel Kaczmarek'
};

const roboto = Roboto({
  weight: '300',
  subsets: ['latin']
});

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${roboto.className} bg-white dark:bg-palenight-contrast`}
      >
        <div className="container bg-white dark:bg-palenight-contrast dark:text-palenight-text min-h-screen flex flex-col mx-auto px-8 md:px-32 lg:px-64">
          <Header />
          <div className="flex-grow">{children}</div>
          <Footer />
        </div>
      </body>
    </html>
  );
}
