export interface IVacancieData {
  image: string;
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
  image: string;
  work_schedule: string;
  location: string[];
  location_map: string;
  location_map2?: string;
  responsibilities: string[];
  what_we_offer: string[];
}
