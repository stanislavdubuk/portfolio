import * as React from 'react';

export const useIntersection = <Element extends HTMLElement>(): [
  boolean,
  React.RefCallback<Element>
] => {
  const [intersecting, setIntersecting] = React.useState(false);
  const observer = React.useMemo(
    () =>
      new IntersectionObserver(
        ([entry]) => {
          setIntersecting(entry.isIntersecting);
        },
        { rootMargin: '-200px' }
      ),
    [setIntersecting]
  );

  const currentElement = React.useCallback(
    (element: Element | null) => {
      if (element) {
        observer.observe(element);
      } else {
        observer.disconnect();
        setIntersecting(false);
      }
    },
    [observer, setIntersecting]
  );

  return [intersecting, currentElement];
};
