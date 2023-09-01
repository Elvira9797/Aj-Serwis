export interface IVacancieData {
  image: string;
  id: string;
  city: string;
  position: string;
  salary: string;
  job_title: string;
}

export interface IFullVacancieData {
  id: string;
  job_title: string;
  looking_for: string;
  salary: string;
  work_schedule: string;
  location: string;
  responsibilities: string[];
  what_we_offer: string[];
}
