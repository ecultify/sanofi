import { ArrowRightIcon } from "lucide-react";
import React from "react";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";

export const DivWrapperByAnima = (): JSX.Element => {
  return (
    <Card className="w-full h-auto md:h-[290px] bg-[#416af6] rounded-[30px] overflow-visible border border-solid pb-0">
      <CardContent className="p-0 h-full relative">
        {/* Desktop doctor image */}
        <div className="hidden md:block absolute left-[114px] bottom-0 -top-14">
          <img
            className="w-[223px] h-[344px] object-cover"
            alt="Indian doctor posing"
            src="/indian-doctor-posing-1.png"
          />
        </div>
        
        <div className="pt-6 md:pt-14 px-4 md:pl-[498px] md:pr-6">
          <h2 className="font-['Open_Sans',Helvetica] font-bold text-white text-[32px] md:text-[44.4px] tracking-[-0.92px] leading-tight md:leading-[53.2px] text-center md:text-left">
            Talk to your Doctor Today
          </h2>

          <p className="mt-[15px] md:mt-[26px] opacity-80 font-['Open_Sans',Helvetica] font-bold text-white text-base md:text-lg tracking-[0.20px] leading-normal md:leading-[27px] text-center md:text-left">
            To know more about Meningococcal Vaccination before your travel.
          </p>

          <div className="flex justify-center md:justify-start mb-4 md:mb-0">
            <a href="https://www.practo.com/bangalore/pediatrician?utm_source=microsite&utm_medium=cta&utm_campaign=dr_reddys_vaccination_campaign" target="_blank" rel="noopener noreferrer" className="inline-block w-full max-w-[400px] md:w-[500px]">
              <Button className="mt-[15px] md:mt-[19px] w-full h-[60px] md:h-[72px] px-[40px] md:px-[50px] bg-[#092175] rounded-2xl hover:bg-[#092175]/90 relative">
                <span className="absolute left-[31px] top-1/2 transform -translate-y-1/2 font-['Open_Sans',Helvetica] font-semibold text-white text-xl md:text-[26px]">
                  Book your Appointment
                </span>
                <img
                  className="absolute w-[25px] md:w-[31px] h-[12px] md:h-[15px] top-1/2 transform -translate-y-1/2 right-[31px]"
                  alt="Arrow"
                  src="/arrow-1.svg"
                />
              </Button>
            </a>
          </div>
        </div>
        
        {/* Mobile doctor image at the bottom */}
        <div className="md:hidden w-full flex justify-center mt-4">
          <img
            className="w-[180px] h-auto object-cover"
            alt="Indian doctor posing"
            src="/indian-doctor-posing-1.png"
          />
        </div>
      </CardContent>
    </Card>
  );
};
