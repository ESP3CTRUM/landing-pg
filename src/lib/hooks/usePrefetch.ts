import { useEffect } from 'react';

export const usePrefetch = () => {
  useEffect(() => {
    const prefetchSection = (sectionPath: string) => {
      // Importamos dinámicamente la sección
      import(`../../screens/LandingPage/sections/${sectionPath}`).catch(() => {
        // Silenciosamente fallamos si hay error
        console.debug(`Prefetch failed for ${sectionPath}`);
      });
    };

    // Creamos un observer para detectar cuando el usuario está cerca de una sección
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Si el elemento es visible, prefetch la siguiente sección
            const section = entry.target.getAttribute('data-prefetch');
            if (section) {
              prefetchSection(section);
              // Dejar de observar una vez que hemos iniciado el prefetch
              observer.unobserve(entry.target);
            }
          }
        });
      },
      {
        // Comenzar a cargar cuando el elemento está a 500px de distancia
        rootMargin: '500px',
      }
    );

    // Observar elementos con el atributo data-prefetch
    document.querySelectorAll('[data-prefetch]').forEach((element) => {
      observer.observe(element);
    });

    return () => {
      observer.disconnect();
    };
  }, []);
};
