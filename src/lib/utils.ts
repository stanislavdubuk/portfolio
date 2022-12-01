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

export const handleMouseMove = (
  event: React.MouseEvent<HTMLDivElement, MouseEvent>,
  element: React.MutableRefObject<HTMLDivElement | null>
) => {
  if (element.current)
    for (const card of element.current
      .children as HTMLCollectionOf<HTMLElement>) {
      const rect = card?.getBoundingClientRect();

      const x = event.clientX - rect.left;
      const y = event.clientY - rect.top;

      card?.style.setProperty('--mouse-x', `${x}px`);
      card?.style.setProperty('--mouse-y', `${y}px`);

      const borderDiv = card?.children[0] as HTMLElement;
      borderDiv.style.setProperty('opacity', '1');
    }
};
