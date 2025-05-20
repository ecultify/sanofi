import React from "react";
import { Card, CardContent } from "../../../../components/ui/card";

export const GroupByAnima = (): JSX.Element => {  return (    <div className="w-full py-0 md:py-2 relative">      {/* Mobile image */}
      <div className="relative md:hidden w-full h-[170px] flex justify-center mb-[-40px] z-10">        <img
          className="w-[200px] h-[200px] object-contain"
          alt="Suitcase image"
          src="/DYKSuitcase.png"
          loading="lazy"        /></div><Card className="w-full bg-[#5279f6] rounded-[30px] border border-solid border-[#6e91f7] overflow-visible">        <CardContent className="p-5 pt-[60px] md:pt-0 md:px-8 md:py-2 flex flex-col md:flex-row items-center md:items-center text-center md:text-left h-auto md:min-h-[240px]">{/* Desktop: Left side with image */}<div className="hidden md:block md:w-[30%] relative">            <div className="absolute left-[-30px] top-[-215px]">              <img
                className="w-auto h-[400px] object-contain"
                alt="Suitcase image"
                src="/DYKSuitcase.png"
                loading="lazy"
              />
            </div></div><div className="w-full md:w-[70%] space-y-6 md:pl-4 md:pt-0 flex flex-col justify-center my-auto">            <h2 className="font-['Open_Sans'] text-neutral-0 text-[19.5px] md:text-3xl lg:text-[42px] tracking-[-0.8px] leading-tight md:leading-[1.3]">
              <span className="font-semibold tracking-[-0.45px]">
                Why are international students at risk of{" "}
              </span>
              <span className="font-bold tracking-[-0.45px]">
                Meningococcal Meningitis?
              </span>
            </h2>            <p className="font-['Open_Sans'] text-neutral-0 text-[17px] md:text-[19px] tracking-[0.20px] leading-[26px] text-center md:text-left font-normal max-w-[95%] md:max-w-[90%] mx-auto md:mx-0 mb-2">
              College freshmen, particularly those who live in dormitories, are
              at modestly increased risk for meningococcal disease relative to
              other persons their age.
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
