import { useContext } from 'react';
import Switch from '../Switch';
import { ThemeContext } from '@/app/layout';
import Image from 'next/image';

export const ThemeSwitch = () => {
  const { theme, setTheme } = useContext(ThemeContext);

  const onThemeSwitch = () => {
    setTheme((prev) => {
      if (prev === 'dark') return 'light';
      else return 'dark';
    });
  };

  return (
    <div className="flex flex-row items-center">
      <Switch
        value={theme === 'dark' ? true : false}
        onToggleSwitch={onThemeSwitch}
      />
      <div className="ml-2 min-w-full">
        <Image
          src="/crescent-moon.png"
          alt="Dark theme icon"
          width={20}
          height={20}
        />
      </div>
    </div>
  );
};
