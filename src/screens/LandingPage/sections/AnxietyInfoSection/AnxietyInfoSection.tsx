import React from "react";
import { Card, CardContent } from "../../../../components/ui/card";

export const AnxietyInfoSection = (): JSX.Element => {
  return (
    <section className="w-full bg-white py-8 px-6 md:px-8 lg:px-[30px]">
      <Card className="border-none shadow-none">
        <CardContent className="p-0">
          <h2 className="text-5xl md:text-6xl lg:text-[66px] font-semibold text-[#393838] mb-6 [font-family:'Segoe_UI_Variable-SemiboldSmall',Helvetica]">
            Qué Es La Ansiedad?
          </h2>

          <div className="mt-4">
            <p className="text-2xl md:text-3xl lg:text-[35px] text-[#222121] [font-family:'Segoe_UI_Variable-SemilightText',Helvetica]">
              la ansiedad es...
            </p>
          </div>
        </CardContent>
      </Card>
    </section>
  );
};
