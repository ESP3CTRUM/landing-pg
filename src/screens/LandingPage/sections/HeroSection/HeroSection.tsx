import React from "react";
import { Button } from "../../../../components/ui/button";
export const HeroSection = (): JSX.Element => {
  return (
    <section
      id="hero-section"
      className="w-full flex justify-center items-center p-[10px]"
      data-oid="b_5ac-g"
    >
      <div
        className="flex items-center bg-[#ffcbcd] rounded-[30px] overflow-hidden w-screen justify-center"
        data-oid="0wqsj_c"
      >
        <div
          className="flex flex-col p-12 space-y-8 max-w-3xl"
          data-oid="a9bnmcx"
        >
          <h1
            className="font-extrabold text-[#736f6f] text-7xl md:text-8xl leading-tight"
            data-oid="b1bpu-q"
          >
            ¿PROBLEMAS DE <br data-oid="d3:lzc8" />
            ANSIEDAD?
          </h1>

          <p
            className="font-bold text-[#1e1e1ecf] text-xl md:text-2xl"
            data-oid="68-umr9"
          >
            "yo estoy dispuesta a ayudarte a superar esos problemas."
          </p>

          <div className="pt-4" data-oid="teknnpp">
            <Button
              variant="default"
              className="bg-white text-black hover:bg-gray-100 rounded-[10px] px-8 py-6 text-xl font-semibold"
              data-oid="m7e:3t:"
            >
              Agenda Tu Cita
            </Button>
          </div>
        </div>
        <div
          className="hidden md:block w-full max-w-[430px] bg-[url(../../../../images/foto.png)] bg-cover bg-center h-[585px] bg-no-repeat"
          data-oid=".0j1.bz"
        />
      </div>
    </section>
  );
};
