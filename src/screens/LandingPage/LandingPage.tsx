import React from "react";
import { AnxietyInfoSection } from "./sections/AnxietyInfoSection/AnxietyInfoSection";
import { HeroSection } from "./sections/HeroSection";
import { MainContentSection } from "./sections/MainContentSection/MainContentSection";
import { NavigationSection } from "./sections/NavigationSection";
import { ServicesOfferedSection } from "./sections/ServicesOfferedSection";

export const LandingPage = (): JSX.Element => {
  return (
    <div className="flex flex-col w-full items-center bg-background">
      <NavigationSection />
      <HeroSection />
      <AnxietyInfoSection />
      <ServicesOfferedSection />

      <section className="w-full py-12">
        <div className="container mx-auto">
          <h2 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl text-center font-semibold text-[#373434] mb-12">
            Opiniones De Personas Como Tú
          </h2>
        </div>
      </section>

      <MainContentSection />

      <footer className="w-full py-9 bg-[#333333] text-white">
        <div className="container mx-auto text-center">
          <p className="font-normal text-base leading-relaxed">
            © 2023 Terapia Online para Dominicanos en el Exterior
          </p>
        </div>
      </footer>
    </div>
  );
};
