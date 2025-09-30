import React, { Suspense } from "react";
import { NavigationSection } from "./sections/NavigationSection";
import { HeroSection } from "./sections/HeroSection";
import { usePrefetch } from "../../lib/hooks/usePrefetch";

// Lazy loading para las secciones que no son inmediatamente visibles
const AnxietyInfoSection = React.lazy(() =>
  import("./sections/AnxietyInfoSection/AnxietyInfoSection").then((module) => ({
    default: module.AnxietyInfoSection,
  })),
);
const OpinionSection = React.lazy(() =>
  import("./sections/MainContentSection/OpinionSection").then((module) => ({
    default: module.OpinionSection,
  })),
);
const ServicesOfferedSection = React.lazy(() =>
  import("./sections/ServicesOfferedSection").then((module) => ({
    default: module.ServicesOfferedSection,
  })),
);
const Terapeutas = React.lazy(() =>
  import("./sections/Terapeutas/Terapeutas").then((module) => ({
    default: module.Terapeutas,
  })),
);

// Componente de carga
const LoadingFallback = () => (
  <div className="w-full h-[200px] flex items-center justify-center">
    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-gray-900"></div>
  </div>
);

export const LandingPage = (): JSX.Element => {
  // Activar el prefetch
  usePrefetch();

  return (
    <div className="flex flex-col w-full items-center bg-background">
      <NavigationSection />
      <HeroSection />

      <Suspense fallback={<LoadingFallback />}>
        <div data-prefetch="ServicesOfferedSection">
          <AnxietyInfoSection />
        </div>
      </Suspense>

      <Suspense fallback={<LoadingFallback />}>
        <div data-prefetch="MainContentSection/OpinionSection">
          <ServicesOfferedSection />
        </div>
      </Suspense>

      <section className="w-full py-12">
        <div className="container mx-auto">
          <h2 className="md:text-6xl lg:text-7xl xl:text-5xl text-center font-semibold text-[#373434] mb-0 text-[60px]">
            Opiniones De Personas Como Tú:
          </h2>
        </div>
      </section>

      <Suspense fallback={<LoadingFallback />}>
        <div data-prefetch="Terapeutas/Terapeutas">
          <OpinionSection/>
        </div>
      </Suspense>

      <Suspense fallback={<LoadingFallback />}>
        <Terapeutas />
      </Suspense>

      <footer className="w-full py-9 bg-[#333333] text-white">
        <div className="container mx-auto text-center">
          <p className="font-normal text-base leading-relaxed">
            © 2025 Maria C. Psicóloga. Todos los derechos reservados.
          </p>
        </div>
      </footer>
    </div>
  );
};
