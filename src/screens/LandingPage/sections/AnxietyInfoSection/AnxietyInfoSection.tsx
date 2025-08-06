import React from "react";

export const AnxietyInfoSection = (): JSX.Element => {
  return (
    <section
      id="anxiety-info"
      className="w-full bg-white py-8 px-6 md:px-8 lg:px-[30px]"
    >
      <div>
        <h2 className="md:text-6xl lg:text-[46px] font-semibold text-[#393838] mb-6 [font-family:'Segoe_UI_Variable-SemiboldSmall',Helvetica] text-[45px]">
          Qué Es La Ansiedad?
        </h2>

        <div className="mt-4">
          <p className="md:text-3xl lg:text-[25px] text-[#222121] [font-family:'Segoe_UI_semi-light',Helvetica] block text-[25px]">
            La ansiedad es una respuesta natural del cuerpo y la mente ante situaciones que percibimos como amenazantes, inciertas o desafiantes. Es una emoción que todos experimentamos en ciertos momentos, como antes de un examen, una entrevista o al enfrentar una situación desconocida. <br /><br />
            La ansiedad no es simplemente “nervios” o “estrés pasajero”. Si no se atiende, puede empeorar y derivar en problemas mayores como depresión, trastornos del sueño, adicciones o enfermedades físicas. <br /><br />
            Por eso, buscar ayuda profesional a tiempo puede marcar una gran diferencia y devolverte a la persona su bienestar y funcionalidad.
          </p>
        </div>
      </div>
    </section>
  );
};
