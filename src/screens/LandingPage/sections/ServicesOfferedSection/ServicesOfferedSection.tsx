import React from "react";
import { Card, CardContent } from "../../../../components/ui/card";

export const ServicesOfferedSection = (): JSX.Element => {
  // Service details data
  const serviceDetails = [
    "6 Sesiones De Terapia Individual",
    "Evaluación De Niveles De Ansiedad",
    "Guía De Técnicas De Manejo Del Estrés",
    "1 Sesión De Emergencia Disponible",
    "Contenido Exclusivo Sobre Manejo De Ansiedad",
  ];

  return (
    <section className="flex flex-col gap-[52px] px-9 py-[66px] bg-[#d0cece] w-full">
      <header className="flex items-center justify-center">
        <h2 className="w-full max-w-[1036px] [font-family:'Segoe_UI_Variable-bold',Helvetica] font-normal text-[#393838] text-[80px] leading-[75px]">
          Supérala Mediante Nuestro Paquete De Terapia Contra La Ansiedad:
        </h2>
      </header>

      <div className="flex justify-center w-full py-1.5">
        <Card className="rounded-[20px] overflow-hidden">
          <CardContent className="flex flex-col items-center gap-[50px] p-[23px]">
            <div className="w-full flex items-center justify-around">
              <h3 className="[font-family:'Segoe_UI_Variable-SemiboldSmall',Helvetica] font-normal text-black text-6xl text-center leading-[75px] whitespace-nowrap">
                Plan De Terapia:
              </h3>
            </div>

            <div className="flex items-end justify-center">
              <ul className="w-[614px] [font-family:'Segoe_UI_Variable-Regular',Helvetica] font-normal text-black text-[22px] leading-[33px]">
                {serviceDetails.map((detail, index) => (
                  <li key={index}>{detail}</li>
                ))}
              </ul>
            </div>

            <div className="flex items-center justify-center w-full px-[18px]">
              <span className="[font-family:'Segoe_UI-Semibold',Helvetica] font-normal text-black text-[80px] leading-[75px] whitespace-nowrap">
                $
              </span>
              <span className="[font-family:'Segoe_UI-Semibold',Helvetica] font-normal text-black text-[80px] leading-[75px] whitespace-nowrap">
                300
              </span>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};
