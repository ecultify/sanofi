import React from "react";
import { Link } from "react-router-dom";
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
import { useScrollToTop } from "../../lib/scrollToTop";

// Import animation utility
import { fadeIn, slideInFromBottom, slideInFromLeft, slideInFromRight, delay100, delay200, delay300, delay400, delay500 } from "../../lib/animation";

export const Final = (): JSX.Element => {
  // Scroll to top when component mounts
  useScrollToTop();
  
  return (    <div className="bg-white flex flex-row justify-center w-full min-h-screen px-[15px] md:px-[30px] overflow-x-hidden">
      <div className="bg-white w-full max-w-[1440px]">
        {/* Hero Banner Section */}        <header className="container mx-auto px-4 pt-10 ">
          <Link to="/" className={`inline-block ${fadeIn}`}>
            <img
              className="w-full max-w-[385px] h-auto object-cover"
              alt="Logo"
              src="/image-24.png"
            />
          </Link>        </header>        <section className="container mx-auto px-4 py-4 md:py-10">          <Card className="w-full h-auto md:h-[580px] bg-[#5279f6] rounded-[30px] border-none relative overflow-hidden"><CardContent className="p-0">
            <div className="w-full h-[645px] md:h-[578px] md:px-[15px] bg-[url(/HeroBannerBG.png)] bg-cover bg-center md:bg-[100%_100%] relative flex flex-col items-center md:block"><div className={`text-center md:text-left mt-10 md:mt-0 md:absolute md:top-[124px] md:left-[39px] [font-family:'Open_Sans'] font-bold text-white text-[28px] md:text-[48px] tracking-[0] leading-tight md:leading-[1.05] md:max-w-[50%] z-10 ${slideInFromLeft}`}>
                Traveling to the USA  for Higher Education?              </div><div className={`text-center md:text-left px-4 md:px-0 mt-4 md:mt-0 md:absolute md:top-[270px] md:left-[39px] [font-family:'Open_Sans'] font-semibold text-white text-[20px] md:text-[25px] tracking-[0] leading-tight max-w-[90%] md:max-w-[500px] ${slideInFromLeft} ${delay200}`}>                Consult Your Doctor/Pediatrician Today, to know more about Meningococcal Vaccination before your travel                </div>              <div className={`mt-8 md:mt-auto mb-[70px] md:mb-0 md:absolute md:top-[430px] md:left-[39px] w-full md:w-auto px-4 md:px-0 ${slideInFromBottom} ${delay400}`}>                <a href="https://www.practo.com/bangalore/pediatrician?utm_source=microsite&utm_medium=cta&utm_campaign=dr_reddys_vaccination_campaign" target="_blank" rel="noopener noreferrer" className="inline-block w-full">
                  <Button className="w-full max-w-[400px] md:w-[400px] h-[56px] md:h-[78px] py-2 px-6 md:px-8 bg-white rounded-[10px] hover:bg-white/90 relative mx-auto md:mx-0 group transition-all duration-300 hover:scale-[1.02] hover:shadow-lg">
                    <div className="flex items-center justify-center w-full h-full font-['Open_Sans'] font-semibold text-[#416af6] text-xl md:text-[26px] group-hover:text-[#2c4dbd] transition-colors duration-300">
                      Book your Appointment
                    </div>
                  </Button>
                </a>
              </div>              <img
                className={`w-[330px] md:w-[616px] h-auto md:h-[522px] mx-auto mt-[-35px] md:mt-0 md:absolute md:bottom-0 md:top-[67px] md:left-[639px] object-contain md:object-cover ${slideInFromRight} ${delay300}`}
                alt="Layer gigapixel"
                src="/layer-2-gigapixel-very-compressed-scalse-4-00x.png"
              />
            </div>
          </CardContent>
          </Card>
        </section>        {/* US States Section - restore to normal, visible on all devices */}
        <section className={`container mx-auto px-4 py-2 md:py-6 overflow-x-auto ${fadeIn} ${delay100}`}>
          <ElementUSStatesByAnima />
        </section>

        {/* Minimal spacing before the Group Section */}
        <div className="py-0 md:py-2"></div>

        {/* Group Section */}
        <section className={`container mx-auto px-4 py-6 md:py-10 ${fadeIn} ${delay200}`}>
          <div className="w-full">
            <GroupByAnima />
          </div>        </section>

        {/* Frame Section */}
        <section className={`py-6 md:py-7 ${fadeIn} ${delay300}`}>
          <FrameByAnima />
        </section>

        {/* Risk Info Section */}
        <section className={`container mx-auto px-4 py-6 md:py-14 ${fadeIn} ${delay400}`}>          <h2 className="text-center text-[26.5px] md:text-[42px] text-[#416af6] font-normal mb-6 md:mb-12">
            {/* Mobile version - 2 lines */}
            <div className="md:hidden">
              <div className="tracking-[-0.42px]">Who is at risk of</div>
              <div className="font-bold tracking-[-0.42px]">
                Meningococcal Meningitis?
              </div>
            </div>
            {/* Desktop version - inline */}
            <div className="hidden md:block">
              <span className="tracking-[-0.42px]">Who is at risk of </span>
              <span className="font-bold tracking-[-0.42px]">
                Meningococcal Meningitis?
              </span>
            </div>
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
                  </div>                    <div className="w-full md:w-[248px] md:absolute md:top-[35px] md:left-[341px] [font-family:'Open_Sans'] font-normal text-black text-[14.5px] md:text-base tracking-[0.20px] leading-6 p-4 md:p-0 text-center md:text-left">
                    There remains a notable disease incidence peak among individuals
                    aged 18-19 years, with college students at increased risk of the
                    disease relative to non-college students.<sup>6</sup>
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
                  </div>                    <div className="w-full md:w-[248px] md:absolute md:top-[35px] md:left-[338px] [font-family:'Open_Sans'] font-normal text-black text-[14.5px] md:text-base tracking-[0.20px] leading-6 p-4 md:p-0 text-center md:text-left">
                    Between 2007 and 2017, one in five colleges in the US experienced
                    meningococcal disease outbreak at their own or a nearby
                    institution.<sup>6</sup>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>        {/* Frame Wrapper Section */}        <section className={`container mx-auto px-4 py-6 md:py-8 ${fadeIn} ${delay500}`}>
          <FrameWrapperByAnima />
        </section>        {/* Doctor Section */}        <section className={`container mx-auto px-4 py-4 md:py-10 ${fadeIn} ${delay300}`}>
          <div className="relative">
            <DivWrapperByAnima />
          </div>        </section>        {/* References Section */}        <section className={`container mx-auto px-4 py-3 md:py-8 ${fadeIn} ${delay500}`}>
          <h2 className="text-[32px] md:text-[42px] font-bold text-[#416AF6] mb-6 md:mb-10 text-center md:text-left">
            References          </h2>

          <Card className="w-full h-auto md:h-[338px] rounded-3xl border border-solid border-[#6e91f7]">
            <CardContent className="p-0 h-full">
              <MenacwyByAnima />
            </CardContent>
          </Card>        </section>        {/* Disclaimer Section */}        <section className={`container mx-auto px-4 py-6 md:py-10 ${fadeIn} ${delay400}`}>          <h2 className="text-[32px] md:text-[42px] font-bold text-[#416af6] mb-3 md:mb-4 text-center md:text-left">
            Disclaimer
          </h2>
          
          <div className="space-y-4">
            <p className="[font-family:'Open_Sans'] font-normal text-black text-sm md:text-base tracking-[0.20px] leading-6 text-center md:text-left">
              A Public Awareness Initiative by Dr. Reddy's. This communication does not substitute advice of a medical practitioner, Please consult your Doctor/Pediatrician for any medical advice. Although greatest possible care has been taken in preparation of this material, Dr Reddy's shall not be liable to any person for contents of the same. Images appearing herein are for illustration purposes only.
            </p>
            <p className="[font-family:'Open_Sans'] font-normal text-black text-sm md:text-base tracking-[0.20px] leading-6 text-center md:text-left">
              The Products are distributed by Dr. Reddy's Laboratories Ltd. in India under authorization from Sanofi Healthcare India Pvt. Ltd." and "Sanofi Marks and Trademark belongs to Sanofi Healthcare India Pvt. Ltd            </p>          </div>            <div className="flex justify-center md:justify-end mt-6">
            <div className="[font-family:'Open_Sans'] font-bold text-[#092275] text-[12.5px] md:text-[20px] tracking-[0.20px] leading-6 text-center md:text-right">
              LMRC code: GGI-CO-A1-AQS-300101634-PE-E25-0538
            </div>
          </div>
        </section>

        {/* Footer Section */}
        <div className={`${fadeIn} ${delay500}`}>
          <DivByAnima />        </div>          <footer className={`container mx-auto px-4 py-6 ${fadeIn} ${delay500}`}>          <div className="flex flex-col md:flex-row justify-end gap-4 md:items-center">
            <div className="[font-family:'Open_Sans'] font-bold text-[#416af6] text-sm md:text-base tracking-[0.20px] leading-6 text-center md:text-right">
              <Link to="/privacy" className="hover:underline">Privacy Policy</Link> | <Link to="/terms" className="hover:underline">Terms &amp; Conditions</Link>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};
