import React from "react";
import { Button } from "../../../../components/ui/button";
import { useIsMobile } from "../../../../lib/hooks/useIsMobile";
import { BlurImage } from "../../../../components/ui/blur-image";

// Rutas a las imágenes
const heroImage = "/images/ansiedad2.webp"; // foto d ma, cambiar por una ilustracion
const heroImageMobile = "/images/ansiedad2.webp"; // Temporalmente usando la misma imagen hasta tener la versión móvil
const heroImagePlaceholder = "/images/ansiedad2-loader.webp";
const heroImageMobilePlaceholder = "/images/ansiedad2-loader.webp"; // Usando el mismo placeholder para ambos

export const HeroSection = (): JSX.Element => {
  const isMobile = useIsMobile();

  return (
    <section
      id="hero-section"
      className="w-full flex justify-center items-center p-[10px]"
      data-prefetch="AnxietyInfoSection/AnxietyInfoSection"
    >
      <div className="flex flex-col md:flex-row items-center bg-[#ffcbcd] rounded-[30px] overflow-hidden w-screen justify-center">
        <div className="flex flex-col p-6 md:p-12 space-y-4 md:space-y-8 max-w-3xl">
          <h1 className="font-extrabold text-[#736f6f] text-4xl sm:text-5xl md:text-7xl lg:text-8xl leading-tight text-center md:text-left">
            ¿PROBLEMAS DE <br />
            ANSIEDAD?
          </h1>

          <p className="font-bold text-[#1e1e1ecf] text-lg sm:text-xl md:text-2xl text-center md:text-left">
            "yo estoy dispuesta a ayudarte a superar esos problemas."
          </p>

          <div className="pt-4 flex justify-center md:justify-start">
            <Button
              variant="default"
              className="bg-white text-black hover:bg-gray-100 rounded-[10px] px-4 sm:px-8 py-4 sm:py-6 text-lg sm:text-xl font-semibold"
            >
              Agenda Tu Cita
            </Button>
          </div>
        </div>

        <BlurImage
          src={isMobile ? heroImageMobile : heroImage}
          placeholderSrc={
            isMobile ? heroImageMobilePlaceholder : heroImagePlaceholder
          }
          alt="Terapeuta"
          className={
            isMobile
              ? "w-full h-[300px] mt-4"
              : "w-full max-w-[480px] h-[585px]"
          }
        />
      </div>
    </section>
  );
};
