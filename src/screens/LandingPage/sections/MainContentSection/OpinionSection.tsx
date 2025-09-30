import React from "react";
import {
  Card,
} from "../../../../components/ui/card";

export const OpinionSection = (): JSX.Element => {
  // Infraestructura para los datos de cada card
  const cards = [
    {
      id: 1,
      className: "",
      profileImg: "/images/HombreB-LATAM.webp", 
      name: "Alonso M. Rodríguez",
      description: "El tratarme con la Psicóloga María ha sido una experiencia transformadora. Su enfoque empático y profesional me ayudó a superar mis desafíos emocionales. Recomiendo sus servicios a cualquiera que busque apoyo psicológico de calidad.",
    },
    {
      id: 2,
      className: "",
      profileImg: "/images/Hombre-LATAM.webp", 
      name: "Juan P. González",
      description: "quiero agradecer a la psicóloga María por su apoyo incondicional durante mi proceso terapéutico. Su profesionalismo y empatía marcaron una gran diferencia en mi vida.",
    },
    {
      id: 3,
      className: "w-full",
      profileImg: "/images/Mujer-LATAM.webp", 
      name: "Tania López",
      description: "Tenía problemas de ansiedad y depresión, pero gracias a la ayuda de la psicóloga María, los he superado.",
    },
  ];

  return (
    <section className="flex flex-wrap justify-center gap-[26px_15px] py-[80px] w-full">
      {cards.map((card) => (
        <Card key={card.id} className={card.className + " max-w-sm w-full flex flex-col items-center p-6"}>
          {/* Foto de perfil redonda y centrada */}
          <div className="flex justify-center w-full mb-1">
            {card.profileImg ? (
              <img
                src={card.profileImg}
                alt={card.name}
                className="w-24 h-24 rounded-full object-cover border-4 border-gray-200"
              />
            ) : (
              <div className="w-24 h-24 rounded-full bg-gray-300 flex items-center justify-center text-gray-500 text-2xl">
                {/* Placeholder si no hay imagen */}
                <span>Foto</span>
              </div>
            )}
          </div>
          {/* Nombre debajo de la foto */}
          <h3 className="text-xl font-bold text-center mb-5">{card.name}</h3>
          {/* Párrafo descriptivo */}
          <p className="text-base text-gray-700 text-center mb-2">{card.description}</p>
        </Card>
      ))}
    </section>
  );
};
