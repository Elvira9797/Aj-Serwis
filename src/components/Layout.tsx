import { Outlet } from 'react-router-dom';
import Header from './Header/Header';
import Footer from './Footer/Footer';
import Hero from './Hero/Hero';

const Layout = () => {
  return (
    <>
      <Header />
      <Hero />
      <main>
        <div
          style={{
            height: '100%',
            maxWidth: '1200px',
            display: 'flex',
            flexDirection: 'column',

            margin: '0 auto',
          }}
        >
          <Outlet />
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Layout;
