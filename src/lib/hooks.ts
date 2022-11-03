import * as React from 'react';

export const useIntersection = (
  element: HTMLElement | null,
  rootMargin: any
) => {
  const [isVisible, setIsVisible] = React.useState(false);

  React.useEffect(() => {
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { rootMargin }
    );

    element && observer.observe(element);

    return () => observer.unobserve(element);
  }, []);

  return isVisible;
};
