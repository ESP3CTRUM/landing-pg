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
    <section
      className="flex flex-col gap-[52px] px-9 py-[66px] bg-[#d0cece] w-full"
      data-oid="04m6h13"
    >
      <header className="flex items-center justify-center" data-oid="o0t3xfq">
        <h2
          className="w-full max-w-[1036px] [font-family:'Segoe_UI_Variable-bold',Helvetica] font-normal text-[#393838] text-[80px] leading-[75px]"
          data-oid="jkymjih"
        >
          Supérala Mediante Nuestro Paquete De Terapia Contra La Ansiedad:
        </h2>
      </header>

      <div className="flex justify-center w-full py-1.5" data-oid="-ptb8b.">
        <Card className="rounded-[20px] overflow-hidden" data-oid="c7jmd-d">
          <CardContent
            className="flex flex-col items-center gap-[50px] p-[23px]"
            data-oid="k:f5nus"
          >
            <div
              className="w-full flex items-center justify-around"
              data-oid="h_iac5y"
            >
              <h3
                className="[font-family:'Segoe_UI_Variable-SemiboldSmall',Helvetica] font-normal text-black text-6xl text-center leading-[75px] whitespace-nowrap"
                data-oid="sp1y1st"
              >
                Plan De Terapia:
              </h3>
            </div>

            <div className="flex items-end justify-center" data-oid="z6syu:o">
              <ul
                className="w-[614px] [font-family:'Segoe_UI_Variable-Regular',Helvetica] font-normal text-black text-[22px] leading-[33px]"
                data-oid="oeml78w"
              >
                {serviceDetails.map((detail, index) => (
                  <li key={index} data-oid="2d522c9">
                    {detail}
                  </li>
                ))}
              </ul>
            </div>

            <div
              className="flex items-center justify-center w-full px-[18px]"
              data-oid="5b:89_j"
            >
              <span
                className="[font-family:'Segoe_UI-Semibold',Helvetica] font-normal text-black text-[80px] leading-[75px] whitespace-nowrap"
                data-oid="_bkdj-3"
              >
                $
              </span>
              <span
                className="[font-family:'Segoe_UI-Semibold',Helvetica] font-normal text-black text-[80px] leading-[75px] whitespace-nowrap"
                data-oid="vfq6q4-"
              >
                300
              </span>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};
