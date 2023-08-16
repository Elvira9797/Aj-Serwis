import { Route, Routes } from 'react-router-dom';
import Layout from './Layout';
import Home from '../pages/Home';
import Vacancies from '../pages/Vacancies';
import NotFound from '../pages/NotFound';
import VacanciesDetails from '../pages/VacanciesDetails';
import Contacts from '../pages/Contacts';

export const App: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="vacancies" element={<Vacancies />} />
        <Route path="vacancies/:vacanciesId" element={<VacanciesDetails />} />
        <Route path="contacts" element={<Contacts />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};
