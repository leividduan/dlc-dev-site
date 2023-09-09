import { useCallback, useState } from 'react';

export function useHeaderController() {
  const [isHamburguerMenuOpen, setIsHamburguerMenuOpen] = useState(false);

  const toggleHamburguerMenu = useCallback(() => {
    setIsHamburguerMenuOpen(prevState => !prevState);
  }, []);

  return { isHamburguerMenuOpen, toggleHamburguerMenu };
}
