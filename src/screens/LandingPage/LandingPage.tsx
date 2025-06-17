import React from "react";
import { AnxietyInfoSection } from "./sections/AnxietyInfoSection/AnxietyInfoSection";
import { HeroSection } from "./sections/HeroSection";
import { MainContentSection } from "./sections/MainContentSection/MainContentSection";
import { NavigationSection } from "./sections/NavigationSection";
import { ServicesOfferedSection } from "./sections/ServicesOfferedSection";

export const LandingPage = (): JSX.Element => {
  return (
    <div
      className="flex flex-col w-full items-center bg-background"
      data-oid="e0wexhp"
    >
      <NavigationSection data-oid="w:dj8jz" />
      <HeroSection data-oid="2ma0jwp" />
      <AnxietyInfoSection data-oid="3.uqfst" />
      <ServicesOfferedSection data-oid="bcxizn_" />

      <section className="w-full py-12" data-oid="lny6lth">
        <div className="container mx-auto" data-oid="ccayfo3">
          <h2
            className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl text-center font-semibold text-[#373434] mb-12"
            data-oid="hekjxei"
          >
            Opiniones De Personas Como Tú
          </h2>
        </div>
      </section>

      <MainContentSection data-oid="l_rvp2i" />

      <footer
        className="w-full py-9 bg-[#333333] text-white"
        data-oid="ydn:w1a"
      >
        <div className="container mx-auto text-center" data-oid="ig_g7yz">
          <p
            className="font-normal text-base leading-relaxed"
            data-oid="72jr4ib"
          >
            © 2023 Terapia Online para Dominicanos en el Exterior
          </p>
        </div>
      </footer>
    </div>
  );
};
