import { Outlet } from 'react-router-dom';
import Header from './Header/Header';
import Footer from './Footer/Footer';
import Hero from './Hero/Hero';
import HeroContacts from './HeroContacts/HeroContacts';

const Layout = () => {
  return (
    <>
      <Header />
      {/* <Hero /> */}
      <HeroContacts />
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
