import ContactInfoList from '../components/ContactInfoList/ContactInfoList';
import HeroContacts from '../components/HeroContacts/HeroContacts';
import Map from '../components/Map/Map';
import ContactUs from '../components/ContactUs/ContactUs';
import { Element } from 'react-scroll';

const Contacts: React.FC = () => {
  return (
    <>
      <HeroContacts />
      <ContactInfoList />
      <Map />
      <Element name="contactUs" className="section">
        <ContactUs />
      </Element>
    </>
  );
};

export default Contacts;
