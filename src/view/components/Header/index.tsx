import { Link, NavLink } from 'react-router-dom';
import { cn } from '../../../app/utils/cn';
import { HamburguerMenu } from './components/HamburguerMenu';
import { useHeaderController } from './useHeaderController';

// import me from '../../../assets/images/me.png';

export function Header() {
  const { isHamburguerMenuOpen, toggleHamburguerMenu, menuItems } = useHeaderController();

  return (
    <>
      <nav className="bg-gray-900 w-full z-20 top-0 left-0 border-b border-gray-600 sticky">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <Link to="/" className="flex items-center">
            {/* <div className="bg-gray-100 rounded-full w-10 h-10 flex items-center justify-center border-2">
            </div> */}
            <span className="ml-3 tracking-tighter" >Deivid Luan Cardoso</span>
          </Link>
          <HamburguerMenu
            isOpen={isHamburguerMenuOpen}
            onIsOpenClick={toggleHamburguerMenu}
          />
          <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1">
            <ul className="flex flex-col items-center p-4 md:p-0 mt-4 font-medium border rounded-lg md:flex-row md:space-x-8 md:mt-0 md:border-0  bg-gray-800 md:bg-gray-900 border-gray-700">
              {menuItems.map((menuItem) => (
                <li key={menuItem.name}>
                  {menuItem.download
                    ?
                    <a
                      href={menuItem.to}
                      download={menuItem.download}
                      className={(cn('text-sm tracking-tighter block py-2 pl-3 pr-4 rounded bg-transparent md:p-0 text-gray-600 hover:text-gray-400 transition-colors', menuItem.class ))}
                    >
                      {menuItem.name}
                    </a>
                    :
                    <NavLink
                      to={menuItem.to}
                      className={({ isActive }) => (cn('text-sm tracking-tighter block py-2 pl-3 pr-4 rounded bg-transparent md:p-0 text-gray-600 hover:text-gray-400 transition-colors', isActive && 'text-white', menuItem.class ))}
                    >
                      {menuItem.name}
                    </NavLink>
                  }
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>

      {isHamburguerMenuOpen && (
        <section className="flex md:hidden">
          <div
            className="absolute top-50 right-0 px-8 py-8 w-full h-full bg-gray-900"
          >
            <ul className="flex flex-col items-center justify-between min-h-[250px]">
              {menuItems.map((menuItem) => (
                <li key={menuItem.name}>
                  {menuItem.download
                    ?
                    <a
                      href={menuItem.to}
                      download={menuItem.download}
                      className={(cn('text-sm tracking-tighter block py-2 pl-3 pr-4 rounded bg-transparent md:p-0 text-gray-600 hover:text-gray-400 transition-colors', menuItem.class ))}
                    >
                      {menuItem.name}
                    </a>
                    :
                    <NavLink
                      to={menuItem.to}
                      className={({ isActive }) => (cn('text-sm tracking-tighter block py-2 pl-3 pr-4 rounded bg-transparent md:p-0 text-gray-600 hover:text-gray-400 transition-colors', isActive && 'text-white', menuItem.class ))}
                    >
                      {menuItem.name}
                    </NavLink>
                  }
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}
    </>
  );
}
