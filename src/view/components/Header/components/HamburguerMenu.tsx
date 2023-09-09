import { cn } from '../../../../app/utils/cn';

interface HamburguerMenuProps {
  isOpen: boolean;
  onIsOpenClick(): void;
}

export function HamburguerMenu({ isOpen, onIsOpenClick }: HamburguerMenuProps) {
  return (
    <button
      className="flex flex-col h-12 w-12 justify-center items-center group md:hidden"
      onClick={onIsOpenClick}
    >
      <div
        className={cn('h-1 w-6 my-1 rounded-full bg-white transition ease transform duration-300',
          isOpen
            ? 'rotate-45 translate-y-3 opacity-50 group-hover:opacity-100'
            : 'opacity-50 group-hover:opacity-100')}
      />
      <div
        className={cn('h-1 w-6 my-1 rounded-full bg-white transition ease transform duration-300',
          isOpen
            ? 'opacity-0'
            : 'opacity-50 group-hover:opacity-100')}
      />
      <div
        className={cn('h-1 w-6 my-1 rounded-full bg-white transition ease transform duration-300',
          isOpen
            ? '-rotate-45 -translate-y-3 opacity-50 group-hover:opacity-100'
            : 'opacity-50 group-hover:opacity-100')}
      />
    </button>
  );
}
