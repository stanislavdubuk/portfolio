import { ESections } from './enums';

export const scroll = (sectionId: ESections) => {
  const section = document.querySelector(`#${sectionId}`);
  section?.scrollIntoView({ behavior: 'smooth', block: 'start' });
};

export const encode = (data: any) => {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&');
};
