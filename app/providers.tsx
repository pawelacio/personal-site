'use client';
import {
  useState,
  createContext,
  Dispatch,
  SetStateAction,
  useEffect
} from 'react';

type ThemeContextType = {
  theme: string;
  setTheme: Dispatch<SetStateAction<string>>;
};

export const ThemeContext = createContext<ThemeContextType>(
  {} as ThemeContextType
);

export default function Providers({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState('dark');

  useEffect(() => {
    const themeLS = localStorage.getItem('theme');
    if (themeLS) setTheme(themeLS);
  }, []);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <html lang="en" className={theme}>
        {children}
      </html>
    </ThemeContext.Provider>
  );
}
