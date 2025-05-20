import { ArrowRightIcon } from "lucide-react";
import React from "react";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";

export const DivWrapperByAnima = (): JSX.Element => {
  return (
    <Card className="w-full h-auto md:h-[300px] bg-[#416af6] rounded-[30px] overflow-visible border border-solid pb-0">
      <CardContent className="p-0 h-full relative">
        {/* Background flag image */}
        <div className="absolute inset-0 w-full h-full overflow-hidden rounded-[30px]">          <img
            className="w-full h-full object-cover"
            alt="USA Flag Background"
            src="/flagbg.png"
            loading="lazy"
          />
        </div>        {/* Desktop doctor image */}        <div className="hidden md:block absolute left-[170px] bottom-0 z-10">          <img
            className="w-[223px] h-[344px] object-cover translate-y-0"
            alt="Indian doctor posing"
            src="/indian-doctor-posing-1.png"
            loading="lazy"
          />
        </div>        <div className="pt-6 md:pt-0 pb-4 md:pb-0 px-4 md:pl-[430px] md:pr-6 relative z-10 flex flex-col md:items-center justify-center md:h-full">
          <div className="md:flex md:flex-col md:justify-center md:h-full">
            {/* For mobile view */}
            <h2 className="md:hidden text-center text-[26.5px] text-white font-normal">
              <div>
                <div className="tracking-[-0.42px]">Talk to your</div>
                <div className="font-bold tracking-[-0.42px]">
                  Doctor/Pediatrician Today
                </div>
              </div>
            </h2>            {/* For desktop view - preserve original style */}
            <h2 className="hidden md:block font-['Open_Sans'] font-bold text-white text-[42px] tracking-[-0.92px] leading-[53.2px] text-left">
              Talk to your Doctor/Pediatrician Today
            </h2><p className="mt-[15px] md:mt-[20px] opacity-80 font-['Open_Sans'] font-bold text-white text-base md:text-lg tracking-[0.20px] leading-normal md:leading-[27px] text-center md:text-left">
              To know more about Meningococcal Vaccination before your travel.
            </p>
            <div className="flex justify-center md:justify-start mb-0.5 md:mb-0">              <a href="https://www.practo.com/bangalore/pediatrician?utm_source=microsite&utm_medium=cta&utm_campaign=dr_reddys_vaccination_campaign" target="_blank" rel="noopener noreferrer" className="inline-block w-full max-w-[380px] md:w-[380px]">
                <Button className="mt-[23px] md:mt-[15px] w-full h-[55px] md:h-[72px] bg-[#092175] rounded-2xl hover:bg-[#092175]/90 transition-all duration-300 p-0 relative group hover:scale-[1.02] hover:shadow-lg transform-gpu">
                  <div className="flex items-center justify-center w-full h-full">
                    <span className="font-['Open_Sans'] font-semibold text-white text-[19px] md:text-[26px] group-hover:text-white/90 transition-all duration-300 mr-3">
                      Book your Appointment
                    </span>                    <img
                      className="w-[25px] md:w-[31px] h-[12px] md:h-[15px] transition-all duration-300 group-hover:translate-x-1 group-hover:opacity-80 brightness-0 invert"
                      alt="Arrow"
                      src="/arrow-1.svg"
                      loading="lazy"
                    />
                  </div>                </Button>
              </a>
            </div>
          </div>
        </div>        {/* Mobile doctor image at the bottom */}
        <div className="md:hidden w-full flex justify-center relative z-10" style={{ height: "275px" }}>
          <div className="absolute bottom-0">
            <img
              className="w-[180px] h-auto object-cover"
              alt="Indian doctor posing"
              src="/indian-doctor-posing-1.png"
            />
          </div>
        </div>
      </CardContent>
    </Card>
  );
};