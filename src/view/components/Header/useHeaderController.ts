import { useCallback, useState } from 'react';
import { menuItems } from './menuItems';

export function useHeaderController() {

  const [isHamburguerMenuOpen, setIsHamburguerMenuOpen] = useState(false);

  const toggleHamburguerMenu = useCallback(() => {
    setIsHamburguerMenuOpen(prevState => !prevState);
  }, []);

  return { isHamburguerMenuOpen, toggleHamburguerMenu, menuItems };
}
