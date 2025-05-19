import React from "react";
import { Card, CardContent } from "../../../../components/ui/card";

export const GroupByAnima = (): JSX.Element => {
  return (    <div className="w-full py-2 md:py-6 relative">
      {/* Mobile image */}
      <div className="relative md:hidden w-full h-[170px] flex justify-center mb-[-50px] z-10">
        <img
          className="w-[200px] h-[200px] object-contain"
          alt="Suitcase image"
          src="/DYKSuitcase.png"
        />      </div>
        <Card className="w-full bg-[#5279f6] rounded-[30px] border border-solid border-[#6e91f7] overflow-visible">
        <CardContent className="p-5 pt-[70px] md:pt-12 md:px-8 md:py-14 flex flex-col md:flex-row items-start text-center md:text-left">{/* Desktop: Left side with image */}          <div className="hidden md:block md:w-[30%] relative">
            <div className="absolute left-[-30px] top-[-155px]">
              <img
                className="w-auto h-[400px] object-contain"
                alt="Suitcase image"
                src="/DYKSuitcase.png"
              />
            </div>
          </div><div className="w-full md:w-[70%] space-y-4 md:pl-4 md:pt-4">
            <h2 className="font-['Open_Sans',Helvetica] text-neutral-0 text-2xl md:text-3xl lg:text-[36px] tracking-[-0.8px] leading-tight">
              <span className="font-semibold tracking-[-0.45px]">
                Why are international students at risk of{" "}
              </span>
              <span className="font-bold tracking-[-0.45px]">
                Meningococcal Meningitis?
              </span>
            </h2>

            <p className="font-['Open_Sans',Helvetica] text-neutral-0 text-base tracking-[0.20px] leading-[24px] text-center md:text-left">
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
