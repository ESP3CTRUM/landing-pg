import React from "react";
import { AnxietyInfoSection } from "./sections/AnxietyInfoSection/AnxietyInfoSection";
import { HeroSection } from "./sections/HeroSection";
import { MainContentSection } from "./sections/MainContentSection/MainContentSection";
import { NavigationSection } from "./sections/NavigationSection";
import { ServicesOfferedSection } from "./sections/ServicesOfferedSection";
import { Terapeutas } from "./sections/Terapeutas/Terapeutas";

export const LandingPage = (): JSX.Element => {
  return (
    <div
      className="flex flex-col w-full items-center bg-background"
      data-oid="mtr39e6"
    >
      <NavigationSection data-oid="m-4tlhp" />
      <HeroSection data-oid="58k64p8" />
      <AnxietyInfoSection data-oid="7j2v-re" />
      <ServicesOfferedSection data-oid="nskgfm4" />
      

      <section className="w-full py-12" data-oid="gw2e7-4">
        <div className="container mx-auto" data-oid="xb6cd5q">
          <h2
            className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl text-center font-semibold text-[#373434] mb-12"
            data-oid="cpb5rtu"
          >
            Opiniones De Personas Como Tú
          </h2>
        </div>
      </section>

      <MainContentSection data-oid="qwp0jf0" />
      <Terapeutas />
      <footer
        className="w-full py-9 bg-[#333333] text-white"
        data-oid="ebaopr9"
      >
        <div className="container mx-auto text-center" data-oid="vk1.kcj">
          <p
            className="font-normal text-base leading-relaxed"
            data-oid="4g_8ca."
          >
            © 2023 Terapia Online para Dominicanos en el Exterior
          </p>
        </div>
      </footer>
    </div>
  );
};
