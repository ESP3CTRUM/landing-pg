import React from "react";
import { Button } from "../../../../components/ui/button";

export const NavigationSection = (): JSX.Element => {
  // Navigation items data
  const navigationItems = [
    { id: 1, text: "Inicio", link: "#HeroSection" },
    { id: 2, text: "Que es la ansiedad?", link: "#AnxietyInfoSection" },
    { id: 3, text: "La solución", link: "#ServicesOfferedSection" },
  ];

  const scrollToSection = (sectionId: string) => {
    // Removemos el # del inicio del id
    const targetId = sectionId.replace("#", "");
    const element = document.getElementById(targetId);

    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <header
      className="flex w-full h-[88px] items-center justify-between px-6 py-5 border-b border-solid border-black bg-[#FFFFFF1a] backdrop-blur-[2px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(2px)_brightness(100%)] sticky top-0 z-50"
      data-oid="v3hwqru"
    >
      <div className="flex items-center justify-center" data-oid="ef2dvtk">
        <img
          className="w-[128.93px] h-16"
          alt="Logo"
          src="../../../../images/svg-logo.svg"
          data-oid="y0tqzj3"
        />
      </div>

      <nav
        className="flex items-center justify-center gap-4"
        data-oid="iohlc0o"
      >
        {navigationItems.map((item) => (
          <Button
            key={item.id}
            variant="outline"
            className="h-[46px] w-[247px] rounded-[10px] border-b border-black bg-transparent"
            onClick={() => scrollToSection(item.link)}
            data-oid="k7w3o_7"
          >
            <span
              className="w-full [font-family:'Segoe_UI_Variable-BoldDisplay',Helvetica] font-bold text-[#3a3939] text-base text-center"
              data-oid="j0xvpcj"
            >
              {item.text}
            </span>
          </Button>
        ))}
      </nav>
    </header>
  );
};
