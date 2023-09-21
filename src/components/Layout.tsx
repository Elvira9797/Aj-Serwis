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
      <Header />
      <main>
        <Suspense fallback={null}>
          <Outlet />
        </Suspense>
      </main>
      <ScrollToTopButton />
      <Footer />
      <ToastContainer theme="colored" hideProgressBar={true} style={{zIndex: '100000'}}/>
    </>
  );
};

export default Layout;
