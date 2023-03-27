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
      <body className={roboto.className}>
        <div className="container mx-auto px-8 sm:px-64">
          <Header />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
