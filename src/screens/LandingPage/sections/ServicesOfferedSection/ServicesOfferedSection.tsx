import React from "react";
import { Card, CardContent } from "../../../../components/ui/card";

export const ServicesOfferedSection = (): JSX.Element => {
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


  return (
    <section
      id="solution-section"
      className="flex flex-col gap-[52px] py-[66px] bg-[#d0cece] w-screen overflow-hidden"
    >
      <header className="flex items-center justify-center px-9">
        <h2 className="w-full max-w-[1036px] [font-family:'Segoe_UI_Variable-bold',Helvetica] font-normal text-[#393838] text-[50px]">
          Supérala Mediante Nuestro Paquete De Terapia Contra La Ansiedad:
        </h2>
      </header>

      <div className="flex justify-center w-full py-1.5 px-9">
        <Card className="max-w-sm w-full bg-[#ffffff]">
                  <div className="p-6 flex flex-col h-full justify-between">
                    <h3 className="text-2xl font-bold mb-4 text-center">{therapyPlanData.title}</h3>
                    <ul className="mb-4 list-disc list-inside text-base text-gray-700">
                      {therapyPlanData.services.map((service, idx) => (
                        <li key={idx}>{service}</li>
                      ))}
                    </ul>
                    <div className="text-center mt-auto">
                      <span className="text-3xl font-extrabold text-primary">${therapyPlanData.price}</span>
                      <span className="ml-2 text-base text-gray-500">USD</span>
                    </div>
                  </div>
                </Card>
      </div>
    </section>
  );
};
