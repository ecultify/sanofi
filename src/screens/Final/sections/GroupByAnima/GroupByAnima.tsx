import React from "react";
import { Card, CardContent } from "../../../../components/ui/card";

export const GroupByAnima = (): JSX.Element => {
  return (
    <div className="w-full py-6 relative">
      {/* Mobile image - positioned above the card, halfway in/out */}
      <div className="relative md:hidden w-full h-[180px] flex justify-center mb-[-60px] z-10">
        <img
          className="w-[220px] h-[220px] object-cover"
          alt="Chatgpt image"
          src="/chatgpt-image-apr-23--2025--03-26-15-pm-copy-1.png"
        />
      </div>
      
      <Card className="w-full bg-[#5279f6] rounded-[30px] border border-solid border-[#6e91f7] overflow-visible">
        <CardContent className="p-8 pt-[100px] md:pt-8 md:p-10 flex flex-col md:flex-row items-start text-center md:text-left">
          {/* Desktop: Left side with image */}
          <div className="hidden md:block md:w-1/3 relative">
            <img
              className="w-[470px] h-[420px] object-cover absolute bottom-0 -left-8 -top-32"
              alt="Chatgpt image"
              src="/chatgpt-image-apr-23--2025--03-26-15-pm-copy-1.png"
            />
          </div>

          <div className="w-full md:w-2/3 space-y-6">
            <h2 className="font-['Open_Sans',Helvetica] text-neutral-0 text-3xl md:text-4xl lg:text-[42px] tracking-[-1.06px] leading-tight">
              <span className="font-semibold tracking-[-0.45px]">
                Why are international students at risk of{" "}
              </span>
              <span className="font-bold tracking-[-0.45px]">
                Meningococcal Meningitis
              </span>
              <span className="font-semibold tracking-[-0.45px]">?</span>
            </h2>

            <p className="font-['Open_Sans',Helvetica] text-neutral-0 text-base md:text-lg lg:text-[19px] tracking-[0.20px] leading-[28.5px] text-center md:text-left">
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
