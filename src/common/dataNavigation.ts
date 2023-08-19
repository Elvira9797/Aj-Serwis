export interface dataNavigationProps {
  page: string;
  link: string;
}

export const dataNavigation: dataNavigationProps[] = [
  { page: 'Home', link: '/' },
  { page: 'Vacancies', link: '/vacancies' },
  { page: 'Contacts', link: '/contacts' },
];
