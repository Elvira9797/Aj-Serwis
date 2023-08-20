import ContactInfoList from '../components/ContactInfoList/ContactInfoList';
import HeroContacts from '../components/HeroContacts/HeroContacts';
import { Element } from 'react-scroll';
import ContactsFormSection from '../components/ContactsFormSection/ContactsFormSection';

const Contacts: React.FC = () => {
  return (
    <>
      <HeroContacts />
      <ContactInfoList />
      <ContactsFormSection />
      <Element name="contactUs" className="section"></Element>
    </>
  );
};

export default Contacts;
