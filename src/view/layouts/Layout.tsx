import { Outlet } from 'react-router-dom';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';

export function Layout() {
  return (
    <>
      <Header />
      <div className="max-w-screen-xl mx-auto grow flex flex-col">
        <div className="w-full mx-auto p-4">
          <Outlet />
        </div>
      </div>
      <Footer />
    </>
  );
}
