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
      data-oid="9_r_995"
    >
      <NavigationSection data-oid="h3w9nt_" />
      <HeroSection data-oid="j20:fch" />
      <AnxietyInfoSection data-oid="-s88_n3" />
      <ServicesOfferedSection data-oid="br0la39" />

      <section className="w-full py-12" data-oid="d7ijzgw">
        <div className="container mx-auto" data-oid="uw-7tn5">
          <h2
            className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl text-center font-semibold text-[#373434] mb-12"
            data-oid="dcwcvwa"
          >
            Opiniones De Personas Como Tú
          </h2>
        </div>
      </section>

      <MainContentSection data-oid="1_z:x56" />
      <Terapeutas data-oid="zwg5wiq" />
      <footer
        className="w-full py-9 bg-[#333333] text-white"
        data-oid="lce.qfr"
      >
        <div className="container mx-auto text-center" data-oid="wt.rn.4">
          <p
            className="font-normal text-base leading-relaxed"
            data-oid="exzefzj"
          >
            © 2023 Terapia Online para Dominicanos en el Exterior
          </p>
        </div>
      </footer>
    </div>
  );
};
