'use client';
import { useEffect, useState } from 'react';
import type { ReactNode } from 'react';

type HighlightedTextProps = {
  children: ReactNode;
};

const HighlightedText = ({
  children
}: HighlightedTextProps): React.JSX.Element => {
  const [isHighlighted, setIsHighlighted] = useState(false);

  useEffect(() => {
    setIsHighlighted(true);
  }, []);

  return (
    <span
      className={`inline-block relative after:absolute after:bg-highlight-green after:h-full after:left-0 after:top-0 after:transition-all after:duration-500 after:ease-in-out after:delay-150 after:opacity-50 ${
        isHighlighted ? 'after:w-full' : 'after:w-0'
      }`}
    >
      {children}
    </span>
  );
};

export default HighlightedText;
