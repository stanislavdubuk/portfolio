import { ESections } from './enums';

export const scroll = (sectionId: ESections) => {
  const section = document.querySelector(`#${sectionId}`);
  section?.scrollIntoView({ behavior: 'smooth', block: 'start' });
};
