import React from "react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "../../../../components/ui/card";

export const MainContentSection = (): JSX.Element => {
  // Define the therapy plan data to avoid repetition
  const therapyPlanData = {
    title: "Plan De Terapia:",
    services: [
      "6 Sesiones De Terapia Individual",
      "Evaluación De Niveles De Ansiedad",
      "Guía De Técnicas De Manejo Del Estrés",
      "1 Sesión De Emergencia Disponible",
      "Contenido Exclusivo Sobre Manejo De Ansiedad",
    ],

    price: 300,
  };

  // Create an array for the cards to map through
  const cards = [
    { id: 1, className: "" },
    { id: 2, className: "" },
    { id: 3, className: "w-full" },
  ];

  return (
    <section className="flex flex-wrap justify-center gap-[26px_15px] py-[26px] w-full">
      {cards.map((card) => (
        <Card
          key={card.id}
          className={`rounded-[20px] overflow-hidden ${card.className}`}
        >
          <CardContent className="flex flex-col items-center justify-center gap-[50px] p-[23px]">
            <CardHeader className="p-0 w-full">
              <CardTitle className="h-[69px] flex items-center justify-center [font-family:'Segoe_UI_Variable-SemiboldSmall',Helvetica] font-normal text-6xl text-center tracking-[0] leading-[75px]">
                {therapyPlanData.title}
              </CardTitle>
            </CardHeader>

            <div className="inline-flex items-end justify-center">
              <div className="w-[614px] [font-family:'Segoe_UI_Variable-Regular',Helvetica] font-normal text-black text-[22px] tracking-[0] leading-[33px]">
                {therapyPlanData.services.map((service, index) => (
                  <React.Fragment key={index}>
                    {service}
                    {index < therapyPlanData.services.length - 1 && <br />}
                  </React.Fragment>
                ))}
              </div>
            </div>

            <div className="flex items-center justify-center gap-0.5 px-[18px] w-full">
              <span className="[font-family:'Segoe_UI-Semibold',Helvetica] font-normal text-black text-[80px] tracking-[0] leading-[75px]">
                $
              </span>
              <span className="[font-family:'Segoe_UI-Semibold',Helvetica] font-normal text-black text-[80px] tracking-[0] leading-[75px]">
                {therapyPlanData.price}
              </span>
            </div>
          </CardContent>
        </Card>
      ))}
    </section>
  );
};
