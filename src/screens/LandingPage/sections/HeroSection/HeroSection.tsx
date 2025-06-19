import React from "react";
import { Button } from "../../../../components/ui/button";
export const HeroSection = (): JSX.Element => {
  return (
    <section
      className="w-full flex justify-center items-center p-[10px]"
      data-oid="8nshsai"
    >
      <div
        className="flex items-center bg-[#ffcbcd] rounded-[30px] overflow-hidden w-screen justify-center"
        data-oid="2.q90_:"
      >
        <div
          className="flex flex-col p-12 space-y-8 max-w-3xl"
          data-oid="t2nt.f."
        >
          <h1
            className="font-extrabold text-[#736f6f] text-7xl md:text-8xl leading-tight"
            data-oid="dxp0177"
          >
            ¿PROBLEMAS DE <br data-oid="mfe.0fc" />
            ANSIEDAD?
          </h1>

          <p
            className="font-bold text-[#1e1e1ecf] text-xl md:text-2xl"
            data-oid=":ydobyv"
          >
            "yo estoy dispuesta a ayudarte a superar esos problemas."
          </p>

          <div className="pt-4" data-oid="4w:v:w7">
            <Button
              variant="default"
              className="bg-white text-black hover:bg-gray-100 rounded-[10px] px-8 py-6 text-xl font-semibold"
              data-oid="z.s8s6i"
            >
              Agenda Tu Cita
            </Button>
          </div>
        </div>
        <div
          className="hidden md:block w-full max-w-[430px] bg-[url(../../../../images/foto.png)] bg-cover bg-center h-[585px] bg-no-repeat"
          data-oid="3hvdw.:"
          key="olk-oVqW"
        />
      </div>
    </section>
  );
};
