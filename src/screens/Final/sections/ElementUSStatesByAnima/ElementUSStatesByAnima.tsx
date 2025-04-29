import React from "react";

export const ElementUSStatesByAnima = (): JSX.Element => {
  return (
    <section className="w-full py-6 font-sans mx-auto px-2 md:px-0">
      <div className="flex flex-col md:flex-row items-center">
        {/* Did You Know container with image */}
        <div className="relative w-[160px] md:w-[180px] flex-shrink-0 mx-auto md:mx-0 mb-4 md:mb-0">
          <div className="border-4 border-[#5279F6] rounded-[16px] overflow-hidden">
            <img
              className="w-full h-auto"
              alt="Did You Know?"
              src="/diyouknow.png"
            />
          </div>
        </div>
        
        {/* Information right section */}
        <div className="bg-[#e5ebff] border-2 md:border-r-2 md:border-t-2 md:border-b-2 md:border-l-0 border-solid border-[#5279f6] py-3 md:py-4 px-4 md:px-6 flex-grow rounded-2xl md:rounded-l-none md:rounded-r-2xl">
          <h2>
            <span className="font-bold text-[#5279f6] text-xl md:text-[27.9px] leading-tight md:leading-[36px]">
              24 U.S. states require proof of MenACWY (Meningococcal) Vaccination
            </span>
            <br />
            <span className="text-black text-lg md:text-[21.5px] leading-tight md:leading-[28px]">
              for college and university students.
            </span>
          </h2>
        </div>
      </div>
    </section>
  );
};
