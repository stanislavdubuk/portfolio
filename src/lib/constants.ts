export const PROJECTS: TProject[] = [
  {
    id: 1,
    title: 'Weather App',
    description:
      'Forecast application displaying temperature for the next five days in chosen cities.',
    stack: ['React.js', 'TS', 'Redux Toolkit', 'SASS'],
    link: 'https://github.com/stanislavdubuk/weather-app',
    live: 'https://sdforecasts.netlify.app/',
    image: 'weather',
  },
  {
    id: 2,
    title: 'Where in the world?',
    description:
      'Application utilizing countries API that lets the user search basic country information.',
    stack: ['React.js', 'TS', 'Redux Toolkit'],
    link: 'https://github.com/stanislavdubuk/countries-REST-api',
    live: 'https://countries-list-api.netlify.app/',
    image: 'countries',
  },
  {
    id: 3,
    title: 'Personal Portfolio',
    description: 'Second version of my personal portfolio',
    stack: ['React', 'TS', 'Redux Toolkit'],
    link: 'https://github.com/stanislavdubuk/portfolio',
    live: '',
    image: 'portfolio',
  },
  {
    id: 4,
    title: 'Rock Paper Scissors',
    description: 'Simple game made with React',
    stack: ['React', 'TS', 'Redux Toolkit'],
    link: 'https://github.com/stanislavdubuk/rock-paper-scissors',
    live: 'https://rock-paper-scissors-st.netlify.app/',
    image: 'rps',
  },
];

export const EMAIL = 'stanislavdubuk@gmail.com';

export type TProject = {
  id: number;
  title: string;
  description: string;
  stack: string[];
  link: string;
  live: string;
  image: string;
};
