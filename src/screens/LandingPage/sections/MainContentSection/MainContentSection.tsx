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
      {cards.map((card) => {})}
    </section>
  );
};
