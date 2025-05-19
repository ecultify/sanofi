import React from "react";
import { Card, CardContent } from "../../../../components/ui/card";
import { fadeIn, slideInFromBottom, slideInFromLeft, slideInFromRight, delay100, delay200, delay300, delay400 } from "../../../../lib/animation";

export const FrameByAnima = (): JSX.Element => {
  // Data for info cards
  const infoCards = [
    {
      id: 1,
      content:
        "Meningococcal meningitis caused by the bacteria Neisseria meningitidis has the potential to cause large epidemics.",
      superscript: <sup>2</sup>,
      singleIcon: {
        src: "/bacteria.png",
        alt: "Bacteria",
        className: "w-[50px] h-[50px] md:w-[60px] md:h-[60px]"
      }
    },
    {
      id: 2,
      content: "This disease can affect anyone, anywhere in the world.",
      superscript: <sup>3,4</sup>,
      singleIcon: {
        src: "/worldbacteria.png",
        alt: "World Bacteria",
        className: "w-[55px] h-[55px] md:w-[60px] md:h-[60px]"
      }
    },
    {
      id: 3,
      content: "One in ten people develop this disease, die from it.",
      superscript: <sup>3,5</sup>,
      singleIcon: {
        src: "/lotsofpeople.png",
        alt: "Lots of People",
        className: "w-[85px] h-[85px] md:w-[90px] md:h-[90px]"
      }
    },
    {
      id: 4,
      content:
        "It can lead to severe complications like deafness, loss of limbs or even death.",
      superscript: <sup>3,5</sup>,
      singleIcon: {
        src: "/healthproblems.png",
        alt: "Health Problems",
        className: "w-[80px] h-[80px] md:w-[85px] md:h-[85px]"
      }
    },
  ];

  return (    <div className="relative w-screen left-[50%] right-[50%] -mx-[50vw] bg-[#4169f6]">
      <section className="w-full py-6 md:py-10 overflow-hidden px-4 md:px-8 container mx-auto">
        {/* Main section title */}
        <div className={`text-center mb-6 md:mb-8 ${slideInFromBottom}`}>
          <h1 className="[font-family:'Open_Sans',Helvetica] font-normal text-neutral-0 text-[30px] md:text-[42px] tracking-[-1.00px] leading-[1.2] md:leading-[50.4px]">
            <span className="tracking-[-0.42px]">What is </span>
            <span className="font-bold tracking-[-0.42px]">
              Meningococcal Meningitis?{" "}
            </span>
          </h1>
        </div>

        {/* Main content */}
        <div className="w-full">
          <div className="flex flex-col md:flex-row gap-6 md:gap-8">
            {/* Left side - Image - Increased width from 1/3 to 2/5 */}            <div className={`w-full md:w-2/5 relative mb-6 md:mb-0 flex justify-center md:justify-start ${slideInFromLeft} ${delay200}`}>              <div className="relative w-full max-w-[350px] md:max-w-none md:w-full h-full">
                <div className="w-full h-auto aspect-square md:h-[420px] rounded-3xl overflow-hidden">
                  <img
                    className="w-full h-full object-cover"
                    alt="Image"
                    src="/image-2.png"
                  />
                </div>
              </div>
            </div>{/* Right side - Info cards - Adjusted width from 2/3 to 3/5 */}
            <div className="w-full md:w-3/5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4">
                {infoCards.map((card, index) => (
                  <Card
                    key={card.id}                    className={`bg-[#5279f6] rounded-[27.79px] border-[1.16px] border-solid border-[#6e91f7] h-auto md:h-[200px] ${slideInFromRight} ${index === 0 ? delay100 : index === 1 ? delay200 : index === 2 ? delay300 : delay400}`}
                  >
                    <CardContent className="p-4 md:p-5 flex flex-col items-center md:items-start">
                      {/* Render PNG icon with improved mobile centering */}
                      {card.singleIcon && (
                        <div className="flex justify-center w-full md:block md:w-auto mb-3 md:mb-4">
                          <img
                            className={`object-contain ${card.singleIcon.className}`}
                            alt={card.singleIcon.alt}
                            src={card.singleIcon.src}
                          />
                        </div>
                      )}                      <p className={`[font-family:'Open_Sans',Helvetica] font-bold text-neutral-0 text-sm md:text-base tracking-[0.23px] leading-[1.4] md:leading-[24px] text-center md:text-left mt-1 md:mt-0 ${(card.id === 3 || card.id === 4) ? '-mt-[20px]' : ''}`}>
                        {card.content}{card.superscript}
                      </p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};