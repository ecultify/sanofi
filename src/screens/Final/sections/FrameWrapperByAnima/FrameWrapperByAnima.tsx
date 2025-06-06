import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";

export const FrameWrapperByAnima = (): JSX.Element => {
  return (
    <Card className="w-full h-auto md:h-[568px] bg-[#416af6] rounded-[30px] overflow-hidden relative">
      <CardContent className="p-0 h-full">        {/* Mobile layout */}
        <div className="flex flex-col md:hidden p-6 px-4">
          <h2 className="text-center text-[26.5px] text-neutral-0 font-normal mb-6">
            {/* Mobile version - 2 lines */}
            <div>
              <div className="tracking-[-0.42px]">College Students and</div>
              <div className="font-bold tracking-[-0.42px]">
                Meningococcal Vaccination
              </div>
            </div>
          </h2>
          
          <div className="w-full rounded-2xl overflow-hidden mb-6">            <img
              className="w-full h-auto object-cover scale-x-[-1]"
              alt="College students"
              src="/image-4.png"
              loading="lazy"
            />
          </div>
            <p className="font-['Open_Sans'] text-white text-base tracking-[0.20px] leading-[1.5] mb-6 text-center px-2">
            Protect yourself from life-threatening meningitis. Talk to your Doctor/Pediatrician
            about vaccination against meningococcal meningitis, especially if you
            are planning to go to the US for higher education. Many colleges in
            the US have made the meningitis vaccination mandatory. Please find the            MenACWY vaccination mandates for colleges and universities here:          </p>            <div className="flex justify-center">
            <a href="https://meningococcalvaccination.in/wp-content/uploads/2024/06/MenACWY-vaccine-mandates-for-colleges.pdf" target="_blank" rel="noopener noreferrer" className="inline-block w-full max-w-[300px]">
              <Button className="w-full h-[60px] bg-[#49d6f9] rounded-2xl hover:bg-[#49d6f9]/90 transition-all duration-300 p-0 relative group hover:scale-[1.02] hover:shadow-lg transform-gpu">
                <div className="flex items-center justify-center w-full h-full">
                  <span className="[-webkit-text-stroke:0.8px_#092275] font-['Open_Sans'] font-semibold text-[#092275] text-xl tracking-[0] leading-[normal] group-hover:opacity-90 transition-all duration-300 mr-3">
                    Download PDF
                  </span>                  <img
                    className="w-[25px] h-[12px] transition-all duration-300 group-hover:translate-x-1 group-hover:opacity-80"
                    alt="Arrow"
                    src="/arrow-1.svg"
                    loading="lazy"
                  />
                </div>
              </Button>
            </a>
          </div>
        </div>
      
        {/* Desktop layout */}
        <div className="hidden md:block h-full">
          <div className="absolute w-[488px] h-[330px] top-[168px] left-[66px] rounded-3xl overflow-hidden">            <img
              className="w-full h-full object-cover scale-x-[-1]"
              alt="College students"
              src="/image-4.png"
              loading="lazy"
            /></div>

          <h2 className="absolute w-full text-center h-[58px] top-[65px] font-['Open_Sans'] text-neutral-0 text-[42px] tracking-[-1.06px] leading-[58.0px]">
            <span className="font-semibold tracking-[-0.45px]">
              College Students and{" "}
            </span>
            <span className="font-bold tracking-[-0.45px]">
              Meningococcal Vaccination
            </span>
          </h2>

          <p className="absolute w-[513px] top-[167px] left-[631px] font-['Open_Sans'] text-white text-lg tracking-[0.20px] leading-[27px]">            Protect yourself from life-threatening meningitis. Talk to your doctor
            about vaccination against meningococcal meningitis, especially if you
            are planning to go to the US for higher education. Many colleges in            the US have made the meningitis vaccination mandatory. Please find the            MenACWY vaccination mandates for colleges and universities here:          </p>          <a href="https://meningococcalvaccination.in/wp-content/uploads/2024/06/MenACWY-vaccine-mandates-for-colleges.pdf" target="_blank" rel="noopener noreferrer" className="absolute w-[327px] h-[72px] top-[376px] left-[634px]">
            <Button className="w-full h-full bg-[#49d6f9] rounded-2xl hover:bg-[#49d6f9]/90 transition-all duration-300 p-0 relative group hover:scale-[1.02] hover:shadow-lg transform-gpu">
              <div className="flex items-center justify-center w-full h-full">
                <span className="[-webkit-text-stroke:0.8px_#092275] font-['Open_Sans'] font-semibold text-[#092275] text-[26px] tracking-[0] leading-[normal] group-hover:opacity-90 transition-all duration-300 mr-3">
                  Download PDF
                </span>                <img
                  className="w-[31px] h-[15px] transition-all duration-300 group-hover:translate-x-1 group-hover:opacity-80"
                  alt="Arrow"
                  src="/arrow-1.svg"
                  loading="lazy"
                />
              </div>
            </Button>
          </a>          <img
            className="absolute w-[235px] h-[125px] top-[433px] left-[1029px]"
            alt="Decorative ellipse"
            src="/ellipse-2630.svg"
            loading="lazy"
          />
        </div>
      </CardContent>
    </Card>
  );
};
