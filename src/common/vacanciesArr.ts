import chemical from '../assets/img/vacanciesIMG/chemical.jpg';
import chairs from '../assets/img/vacanciesIMG/chairs.jpg';
import jelly from '../assets/img/vacanciesIMG/jelly.jpg';
import insulation from '../assets/img/vacanciesIMG/insulation.jpg';
import forklift from '../assets/img/vacanciesIMG/forklift.jpg';
import energyDrinks from '../assets/img/vacanciesIMG/energy-drinks.jpg';
import beer from '../assets/img/vacanciesIMG/beer.jpg';
import iceCream from '../assets/img/vacanciesIMG/ice-cream.jpg';
import pavement from '../assets/img/vacanciesIMG/pavement.jpg';

export interface IVacancieData {
  id: string;
  city: string;
  position: string;
  salary: string;
  job_title: string;
}

export interface ICardFields {
  city: string;
  position: string;
  salary: string;
  more_info: string;
}

export interface IFullVacancieData {
  id: string;
  job_title: string;
  looking_for: string;
  salary: string;
  work_schedule: string;
  location: string[];
  location_map: string;
  location_map2?: string;
  responsibilities: string[];
  what_we_offer: string[];
}

export const vacanciesImages = [
  chemical,
  chairs,
  jelly,
  insulation,
  forklift,
  energyDrinks,
  beer,
  iceCream,
  pavement,
];
