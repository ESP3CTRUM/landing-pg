import React from "react";
import { Button } from "../../../../components/ui/button";

interface NavigationItem {
  id: number;
  text: string;
  sectionId: string;
}

export const NavigationSection = (): JSX.Element => {
  const navigationItems: NavigationItem[] = [
    { id: 1, text: "Inicio", sectionId: "hero-section" },
    { id: 2, text: "Que es la ansiedad?", sectionId: "anxiety-info" },
    { id: 3, text: "La solución", sectionId: "solution-section" },
  ];
  const scrollToSection = (sectionId: string): void => {
    const element = document.getElementById(sectionId);
    if (element) {
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset - 120;

      // Aplicar animación personalizada
      const startPosition = window.pageYOffset;
      const distance = elementPosition - startPosition;
      const duration = 600; // duración en ms
      
      const easeInOutQuad = (t: number): number => {
        return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
      };
      
      const startTime = performance.now();
      
      const animate = (currentTime: number) => {
        const elapsedTime = currentTime - startTime;
        const progress = Math.min(elapsedTime / duration, 1);
        
        window.scrollTo(0, startPosition + distance * easeInOutQuad(progress));
        
        if (progress < 1) {
          requestAnimationFrame(animate);
        }
      };
      
      requestAnimationFrame(animate);
    }
  };

  return (
    <header className="flex w-full h-[88px] items-center justify-between px-6 py-5 border-b border-solid border-black bg-[#FFFFFF1a] backdrop-blur-[2px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(2px)_brightness(100%)] sticky top-0 z-50">
      <div className="flex items-center justify-center">
        <img
          className="w-[128.93px] h-16"
          alt="Logo"
          src="../../../../images/svg-logo.svg"
        />
      </div>
      
      <nav className="flex items-center justify-center gap-4">
        {navigationItems.map((item) => (
          <Button
            key={item.id}
            variant="outline"
            className="h-[46px] w-[247px] rounded-[10px] border-b border-black bg-transparent"
            onClick={() => scrollToSection(item.sectionId)}
          >
            <span className="w-full [font-family:'Segoe_UI_Variable-BoldDisplay',Helvetica] font-bold text-[#3a3939] text-base text-center">
              {item.text}
            </span>
          </Button>
        ))}
      </nav>
    </header>
  );
};
