import React from "react";
import { Button } from "../../../../components/ui/button";

export const HeroSection = (): JSX.Element => {
  return (
    <section
      className="w-full flex justify-center items-center p-[10px]"
      data-oid="w02g.x9"
    >
      <div
        className="flex items-center bg-[#ffcbcd] rounded-[30px] overflow-hidden w-full justify-center"
        data-oid="3ni4te3"
      >
        <div
          className="flex flex-col p-12 space-y-8 max-w-3xl"
          data-oid="_iinrs0"
          key="olk-a3eQ"
        >
          <h1
            className="font-extrabold text-[#736f6f] text-7xl md:text-8xl leading-tight"
            data-oid="00x.ekj"
          >
            ¿PROBLEMAS DE <br data-oid="0lkpli7" />
            ANSIEDAD?
          </h1>

          <p
            className="font-bold text-[#1e1e1ecf] text-xl md:text-2xl"
            data-oid="-3x_4xi"
          >
            yo estoy dispuesta a ayudarte a superar esos problemas.
          </p>

          <div className="pt-4" data-oid="qt0l58u">
            <Button
              variant="default"
              className="bg-white text-black hover:bg-gray-100 rounded-[10px] px-8 py-6 text-xl font-semibold"
              data-oid="nuhl_qr"
            >
              Agenda Tu Cita
            </Button>
          </div>
        </div>
        <div
          className="hidden md:block w-[430px] bg-[url(../../../../images/foto.png)] bg-cover bg-center h-[585px]"
          data-oid="3hvdw.:"
          key="olk-oVqW"
        />
      </div>
    </section>
  );
};
