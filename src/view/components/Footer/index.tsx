import { InstagramLogoIcon, LinkedInLogoIcon, GitHubLogoIcon } from '@radix-ui/react-icons';
import { IconLink } from './components/IconLink';

export function Footer()  {
  return (
    <footer className="w-full shadow bg-gray-800">
      <div className="w-full max-w-screen-xl mx-auto p-4 flex flex-col gap-1 items-center justify-between md:flex-row">
        <span className="text-sm text-gray-500 sm:text-center">
          Obrigado por visitar meu site, me siga nas redes sociais.
        </span>
        <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 sm:mt-0">
          <li>
            <IconLink
              href="https://www.linkedin.com/in/leividduan/"
              icon={LinkedInLogoIcon}
            />
          </li>
          <li>
            <IconLink
              href="https://www.instagram.com/dlc_dev/"
              icon={InstagramLogoIcon}
            />
          </li>
          <li>
            <IconLink
              href="https://github.com/leividduan"
              icon={GitHubLogoIcon}
            />
          </li>
        </ul>
      </div>
    </footer>
  );
}
