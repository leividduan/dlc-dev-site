import { IconProps } from '@radix-ui/react-icons/dist/types';

interface IconLinkProps {
  href: string;
  icon: React.ForwardRefExoticComponent<IconProps & React.RefAttributes<SVGSVGElement>>;
}

export function IconLink({ href, icon: Icon }: IconLinkProps) {
  return (
    <a
      href={href}
      className="w-10 h-10 flex items-center justify-center text-gray-600 hover:text-gray-400 transition-colors"
      target="_blank"
      rel="noreferrer"
    >
      {!!Icon && (<Icon className="w-6 h-6"/>)}
    </a>
  );
}
