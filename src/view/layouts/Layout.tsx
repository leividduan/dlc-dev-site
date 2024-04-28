import { Outlet } from 'react-router-dom';
import { Footer } from '../components/Footer';
import { Header } from '../components/Header';

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
