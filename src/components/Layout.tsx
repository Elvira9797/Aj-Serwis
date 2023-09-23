import { Outlet, useLocation } from 'react-router-dom';
import Header from './Header/Header';
import Footer from './Footer/Footer';
import { Suspense } from 'react';
import ScrollToTopButton from './ScrollToTopButton/ScrollToTopButton';
import { ToastContainer } from 'react-toastify';

const Layout = () => {
  const location = useLocation();

  const isLanguageChange = location.state?.languageChange || false;

  if (!isLanguageChange) {
    window.scrollTo(0, 0);
  }

  return (
    <>
      <Suspense fallback={null}>
        <Header />
        <main>
          <Outlet />
        </main>
        <Footer />
      </Suspense>
      <ScrollToTopButton />
      <ToastContainer
        theme="colored"
        hideProgressBar={true}
        style={{ zIndex: '100000' }}
      />
    </>
  );
};

export default Layout;
