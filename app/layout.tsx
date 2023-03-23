import './globals.css';
import Header from './header';
import Footer from './footer';

export const metadata = {
  title: 'Frontend developer | Pawel Kaczmarek',
  description: 'Frontend developer | Pawel Kaczmarek'
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
