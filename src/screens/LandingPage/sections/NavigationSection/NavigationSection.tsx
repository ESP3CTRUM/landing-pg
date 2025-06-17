import React from "react";
import { Button } from "../../../../components/ui/button";

export const NavigationSection = (): JSX.Element => {
  // Navigation items data
  const navigationItems = [
    { id: 1, text: "Inicio" },
    { id: 2, text: "Que es la ansiedad?" },
    { id: 3, text: "La solución" },
  ];

  return (
    <header
      className="flex w-full h-[88px] items-center justify-between px-6 py-5 bg-[#0000001a] backdrop-blur-[2px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(2px)_brightness(100%)] absolute top-0 left-0 z-50"
      data-oid="2z4a_e8"
    >
      <div className="flex items-center justify-center" data-oid="es.88bq">
        <img
          className="w-[128.93px] h-16"
          alt="Logo"
          src="/group-5.png"
          data-oid="un52-v2"
        />
      </div>

      <nav
        className="flex items-center justify-center gap-4"
        data-oid="4so-xr5"
      >
        {navigationItems.map((item) => (
          <Button
            key={item.id}
            variant="outline"
            className="h-[46px] w-[247px] rounded-[10px] border border-solid border-black bg-transparent"
            data-oid="bargkpz"
          >
            <span
              className="w-full [font-family:'Segoe_UI_Variable-BoldDisplay',Helvetica] font-bold text-[#3a3939] text-base text-center"
              data-oid="bnbfw_k"
            >
              {item.text}
            </span>
          </Button>
        ))}
      </nav>
    </header>
  );
};
