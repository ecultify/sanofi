import React from "react";
import { Button } from "../../components/ui/button";
import { Card, CardContent } from "../../components/ui/card";

// Import all section components
import { DivByAnima } from "./sections/DivByAnima";
import { DivWrapperByAnima } from "./sections/DivWrapperByAnima";
import { ElementUSStatesByAnima } from "./sections/ElementUSStatesByAnima/ElementUSStatesByAnima";
import { FrameByAnima } from "./sections/FrameByAnima";
import { FrameWrapperByAnima } from "./sections/FrameWrapperByAnima";
import { GroupByAnima } from "./sections/GroupByAnima";
import { MenacwyByAnima } from "./sections/MenacwyByAnima";

// Import animation utility
import { fadeIn, slideInFromBottom, slideInFromLeft, slideInFromRight, delay100, delay200, delay300, delay400, delay500 } from "../../lib/animation";

export const Final = (): JSX.Element => {
  return (
    <div className="bg-white flex flex-row justify-center w-full min-h-screen">
      <div className="bg-white w-full max-w-[1440px]">
        {/* Hero Banner Section */}
        <header className="container mx-auto px-4 pt-10 pb-8">
          <a href="/" className={`inline-block ${fadeIn}`}>
            <img
              className="w-full max-w-[385px] h-auto object-cover"
              alt="Logo"
              src="/image-24.png"
            />
          </a>
        </header>

        <section className="container mx-auto px-4 py-8 md:py-12">
          <Card className="w-full h-auto md:h-[610px] bg-[#5279f6] rounded-[30px] border border-solid border-[#6e91f7] relative overflow-hidden">
          <CardContent className="p-0">
            <div className="w-full h-[600px] md:h-[608px] bg-[url(/image-37.png)] bg-cover bg-center md:bg-[100%_100%] relative flex flex-col items-center md:block">

              <div className={`text-center md:text-left mt-8 md:mt-0 md:absolute md:top-[124px] md:left-[39px] [font-family:'Open_Sans',Helvetica] font-normal text-white text-[24px] md:text-[32.5px] tracking-[0] leading-normal ${slideInFromLeft}`}>
                Traveling to the USA 🇺🇸 for Higher Studies?
              </div>
              
              <div className={`text-center md:text-left px-4 md:px-0 mt-4 md:mt-0 md:absolute md:top-[180px] md:left-[39px] [font-family:'Open_Sans',Helvetica] font-bold text-white text-[20px] md:text-[28px] tracking-[0] leading-normal max-w-[90%] md:max-w-[480px] ${slideInFromLeft} ${delay200}`}>
                Consult a Doctor today to know more about Meningococcal Vaccine
              </div>

              <div className={`mt-10 md:mt-auto mb-6 md:mb-0 md:absolute md:top-[434px] md:left-[39px] w-full md:w-auto px-4 md:px-0 ${slideInFromBottom} ${delay400}`}>
                <a href="https://www.practo.com/bangalore/pediatrician?utm_source=microsite&utm_medium=cta&utm_campaign=dr_reddys_vaccination_campaign" target="_blank" rel="noopener noreferrer" className="inline-block w-full">
                  <Button className="w-full max-w-[400px] md:w-[500px] h-[60px] md:h-[72px] px-[40px] md:px-[50px] bg-white rounded-[10px] hover:bg-white/90 relative mx-auto md:mx-0">
                    <span className="absolute left-[31px] top-1/2 transform -translate-y-1/2 font-['Open_Sans',Helvetica] font-semibold text-[#416af6] text-xl md:text-[26px]">
                      Book your Appointment
                    </span>
                    <img
                      className="absolute w-[25px] md:w-[31px] h-[12px] md:h-[15px] top-1/2 transform -translate-y-1/2 right-[31px]"
                      alt="Arrow"
                      src="/arrow-1.svg"
                      style={{ filter: 'invert(27%) sepia(97%) saturate(7491%) hue-rotate(222deg) brightness(90%) contrast(101%)' }}
                    />
                  </Button>
                </a>
              </div>

              <img
                className={`w-[300px] md:w-[616px] h-auto md:h-[522px] mx-auto mt-6 md:mt-0 md:absolute md:bottom-0 md:top-[87px] md:left-[639px] object-contain md:object-cover ${slideInFromRight} ${delay300}`}
                alt="Layer gigapixel"
                src="/layer-2-gigapixel-very-compressed-scalse-4-00x.png"
              />
            </div>
          </CardContent>
          </Card>
        </section>

        {/* US States Section - restore to normal, visible on all devices */}
        <section className={`container mx-auto px-4 py-4 md:py-8 overflow-x-auto ${fadeIn} ${delay100}`}>
          <ElementUSStatesByAnima />
        </section>

        {/* Group Section */}
        <section className={`container mx-auto px-4 py-8 md:py-12 ${fadeIn} ${delay200}`}>
          <div className="w-full">
            <GroupByAnima />
          </div>
        </section>

        {/* Frame Section */}
        <section className={`py-8 md:py-16 ${fadeIn} ${delay300}`}>
          <FrameByAnima />
        </section>

        {/* Risk Info Section */}
        <section className={`container mx-auto px-4 py-8 md:py-16 ${fadeIn} ${delay400}`}>
          <h2 className="text-center text-[28px] md:text-[42px] text-[#416af6] font-normal mb-6 md:mb-12">
            <span className="tracking-[-0.42px]">Who is at risk of </span>
            <span className="font-bold tracking-[-0.42px]">
              Meningococcal Meningitis?
            </span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            <Card className="h-auto md:h-[239px] rounded-3xl border border-solid border-[#6e91f7] overflow-hidden">
              <CardContent className="p-0 h-full relative">
                <div className="flex flex-col md:flex-row">
                  {/* Mobile layout - stacked */}
                  <div className="md:hidden w-full h-[200px] relative">
                    <img
                      className="w-full h-full object-cover"
                      alt="Image"
                      src="/image.png"
                    />
                  </div>
                  
                  <div className="hidden md:block md:absolute w-[302px] h-[237px] top-px left-px">
                    <img
                      className="w-full h-full object-cover"
                      alt="Image"
                      src="/image.png"
                    />
                  </div>
                  
                  <div className="w-full md:w-[248px] md:absolute md:top-[35px] md:left-[341px] [font-family:'Open_Sans',Helvetica] font-normal text-black text-base tracking-[0.20px] leading-6 p-4 md:p-0 text-center md:text-left">
                    There remains a notable disease incidence peak among individuals
                    aged 18-19 years, with college students at increased risk of the
                    disease relative to non-college students.
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="h-auto md:h-[239px] rounded-3xl border border-solid border-[#6e91f7] overflow-hidden">
              <CardContent className="p-0 h-full relative">
                <div className="flex flex-col md:flex-row">
                  {/* Mobile layout - stacked */}
                  <div className="md:hidden w-full h-[200px] relative bg-[url(/image-3.png)] bg-cover bg-center">
                    <div className="absolute w-[214px] h-[13px] bottom-4 left-[47px] bg-[#fbefda]" />
                  </div>
                  
                  <div className="hidden md:block md:absolute w-[303px] h-[239px] top-0 left-px">
                    <div className="relative h-[237px] top-px bg-[url(/image-3.png)] bg-[100%_100%]">
                      <div className="relative w-[214px] h-[13px] top-56 left-[47px] bg-[#fbefda]" />
                    </div>
                  </div>
                  
                  <div className="w-full md:w-[248px] md:absolute md:top-[35px] md:left-[338px] [font-family:'Open_Sans',Helvetica] font-normal text-black text-base tracking-[0.20px] leading-6 p-4 md:p-0 text-center md:text-left">
                    Between 2007 and 2017, one in five colleges in the US experienced
                    meningococcal disease outbreak at their own or a nearby
                    institution.
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Frame Wrapper Section */}
        <section className={`container mx-auto px-4 py-8 md:py-16 ${fadeIn} ${delay500}`}>
          <FrameWrapperByAnima />
        </section>

        {/* Doctor Section */}
        <section className={`container mx-auto px-4 py-8 md:py-16 ${fadeIn} ${delay300}`}>
          <div className="relative">
            <DivWrapperByAnima />
          </div>
        </section>

        {/* References Section */}
        <section className={`container mx-auto px-4 py-8 md:py-16 ${fadeIn} ${delay500}`}>
          <h2 className="text-[32px] md:text-[42px] font-bold text-[#416af6] mb-8 md:mb-12">
            References
          </h2>

          <Card className="w-full h-auto md:h-[353px] rounded-3xl border border-solid border-[#6e91f7]">
            <CardContent className="p-0 h-full">
              <MenacwyByAnima />
            </CardContent>
          </Card>
        </section>

        {/* Footer Section */}
        <div className={`${fadeIn} ${delay500}`}>
          <DivByAnima />
        </div>
        
        <footer className={`container mx-auto px-4 py-8 ${fadeIn} ${delay500}`}>
          <div className="flex flex-col md:flex-row justify-between gap-4 md:items-center">
            <div className="[font-family:'Open_Sans',Helvetica] font-bold text-[#416af6] text-sm md:text-base tracking-[0.20px] leading-6 text-center md:text-left">
              LMRC code: GGI-CO-A1-AQS-300101634-AM-F24-0641
            </div>
            <div className="[font-family:'Open_Sans',Helvetica] font-bold text-[#416af6] text-sm md:text-base tracking-[0.20px] leading-6 text-center md:text-left">
              <a href="/privacy" className="hover:underline">Privacy Policy</a> | <a href="/terms" className="hover:underline">Terms &amp; Conditions</a>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};
