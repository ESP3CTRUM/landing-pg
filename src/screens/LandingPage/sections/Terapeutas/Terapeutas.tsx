import React from "react";
import ProfileCard from "../../../../components/ui/ProfileCard";
import avatarImg from "../../../../../images/foto.png";
import iconImg from "../../../../../images/icon2.png";
export const Terapeutas = (): JSX.Element => {
  return (
    <section
      className="w-full flex justify-center items-center p-[10px] bg-[#f0f0f0] rounded-[30px] overflow-hidden"
      data-oid="5dhup7v"
    >
      <div data-oid="-08jgrb">
        <h2
          className="text-5xl md:text-6xl lg:text-[66px] font-semibold text-[#393838] mb-6 [font-family:'Segoe_UI_Variable-SemiboldSmall',Helvetica]"
          data-oid="424o-46"
        >
          Nuestra Terapeuta:
        </h2>

        <div
          className="w-full flex justify-center items-center"
          data-oid="3jnmquk"
        >
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
            data-oid="u.8xxyx"
          />
        </div>
      </div>
    </section>
  );
};
