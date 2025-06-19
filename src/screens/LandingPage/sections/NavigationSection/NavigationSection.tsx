import React, { useState } from "react";
import { Button } from "../../../../components/ui/button";
import { useIsMobile } from "../../../../lib/hooks/useIsMobile";

interface NavigationItem {
  id: number;
  text: string;
  sectionId: string;
}

export const NavigationSection = (): JSX.Element => {
  const isMobile = useIsMobile();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigationItems: NavigationItem[] = [
    { id: 1, text: "Inicio", sectionId: "hero-section" },
    { id: 2, text: "Que es la ansiedad?", sectionId: "anxiety-info" },
    { id: 3, text: "La solución", sectionId: "solution-section" },
  ];

  const scrollToSection = (sectionId: string): void => {
    const element = document.getElementById(sectionId);
    if (element) {
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset - 88; // Ajustado por la altura del header

      // Aplicar animación personalizada
      const startPosition = window.pageYOffset;
      const distance = elementPosition - startPosition;
      const duration = 600;
      
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
      
      if (isMobile) {
        setIsMenuOpen(false);
      }
    }
  };

  return (
    <header className="flex w-full h-[88px] items-center justify-between px-6 py-5 border-b border-solid border-black bg-[#FFFFFF1a] backdrop-blur-[2px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(2px)_brightness(100%)] sticky top-0 z-50">
      <div className="flex items-center justify-center">
        <img
          className="w-[128.93px] h-16"
          alt="Logo"
          src="/images/svg-logo.svg"
        />
      </div>
      
      {isMobile ? (
        <>
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="p-2 text-gray-600 hover:text-gray-900"
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMenuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>

          {/* Menú móvil */}
          {isMenuOpen && (
            <div className="absolute top-[88px] left-0 right-0 bg-white border-b border-gray-200 py-4 px-6 shadow-lg">
              <nav className="flex flex-col space-y-4">
                {navigationItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.sectionId)}
                    className="text-left py-2 px-4 text-gray-800 hover:bg-gray-100 rounded-lg transition-colors"
                  >
                    {item.text}
                  </button>
                ))}
              </nav>
            </div>
          )}
        </>
      ) : (
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
      )}
    </header>
  );
};
