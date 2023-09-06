import { Route, Routes } from 'react-router-dom';
import Layout from './Layout';
import NotFound from '../pages/NotFound';
import { lazy } from 'react';

const LazyHome = lazy(() => import('../pages/Home'));
const LazyVacancies = lazy(() => import('../pages/Vacancies'));
const LazyVacanciesDetails = lazy(() => import('../pages/VacanciesDetails'));
const LazyContacts = lazy(() => import('../pages/Contacts'));

export const App: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<LazyHome />} />
        <Route path="vacancies" element={<LazyVacancies />} />
        <Route path="vacancies/:id" element={<LazyVacanciesDetails />} />
        <Route path="contacts" element={<LazyContacts />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};
