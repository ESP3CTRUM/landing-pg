import React from "react";
import { Button } from "../../../../components/ui/button";

export const HeroSection = (): JSX.Element => {
  return (
    <section className="w-full flex justify-center items-center p-[32px]">
      <div className="flex justify-between items-center max-w-7xl bg-[#ffcbcd] rounded-[30px] overflow-hidden w-full">
        <div className="flex flex-col p-12 space-y-8 max-w-2xl">
          <h1 className="font-extrabold text-[#736f6f] text-7xl md:text-8xl leading-tight">
            ¿PROBLEMAS DE <br />
            ANSIEDAD?
          </h1>

          <p className="font-bold text-[#1e1e1ecf] text-xl md:text-2xl">
            yo estoy dispuesta a ayudarte a superar esos problemas.
          </p>

          <div className="pt-4">
            <Button
              variant="default"
              className="bg-white text-black hover:bg-gray-100 rounded-[10px] px-8 py-6 text-xl font-semibold"
            >
              Agenda Tu Cita
            </Button>
          </div>
        </div>

        <div className="hidden md:block h-[561px] w-[430px] bg-[url(../../../../images/foto.png)] bg-cover bg-center" />
      </div>
    </section>
  );
};
