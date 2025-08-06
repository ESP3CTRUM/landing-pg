import React from "react";
import ProfileCard from "../../../../components/ui/ProfileCard";
const avatarImg = "/images/foto.png";
const iconImg = "/images/icon2.png";
export const Terapeutas = (): JSX.Element => {
  return (
    <section className="w-full flex justify-center items-center p-[10px] bg-[#f0f0f0] overflow-hidden">
      <div>
        <div className="w-full flex items-left mb-8">
          <h2 className="text-5xl md:text-6xl lg:text-[66px] font-semibold text-[#393838] mb-6 [font-family:'Segoe_UI_Variable-SemiboldSmall',Helvetica]">
            Nuestra Terapeuta:
          </h2>
        </div>
        <div className="w-full flex justify-center items-center">
          <ProfileCard
            name="María C. Perez"
            title="Psicóloga"
            handle="psic.MariaC.perez"
            status="Online"
            contactText="Contáctame"
            avatarUrl={avatarImg}
            iconUrl={iconImg}
            showUserInfo={true}
            enableTilt={true}
            onContactClick={() => console.log("Contact clicked")}
          />
        </div>
      </div>
    </section>
  );
};
