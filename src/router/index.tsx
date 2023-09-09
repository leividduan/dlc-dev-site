import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { Home } from '../view/pages/Home';
import { Layout } from '../view/layouts/Layout';
import { NotFound } from '../view/pages/NotFound';
import { Contact } from '../view/pages/Contact';

export function Router() {
  return (
    <BrowserRouter>
      <Routes>

        <Route path='*' element={<NotFound />} />

        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
        </Route>

      </Routes>
    </BrowserRouter>
  );
}
