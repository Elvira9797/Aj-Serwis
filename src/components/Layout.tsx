import { Outlet, useLocation } from 'react-router-dom';
import Header from './Header/Header';
import Footer from './Footer/Footer';
import { Suspense, useEffect } from 'react';
import ScrollToTopButton from './ScrollToTopButton/ScrollToTopButton';

const Layout = () => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <>
      <Header />
      <main>
        <Suspense fallback={null}>
          <Outlet />
        </Suspense>
      </main>
      <ScrollToTopButton />
      <Footer />
    </>
  );
};

export default Layout;
