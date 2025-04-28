import React from "react";
import { Card, CardContent } from "../../../../components/ui/card";

export const FrameByAnima = (): JSX.Element => {
  // Data for info cards
  const infoCards = [
    {
      id: 1,
      content:
        "Meningococcal meningitis caused by the bacteria Neisseria meningitidis has the potential to cause large epidemics.",
      icon: "/vector-11.svg",
      altText: "Vector",
    },
    {
      id: 2,
      content: "This disease can affect anyone, anywhere in the world.",
      icons: [
        {
          src: "/vector-2.svg",
          alt: "Vector",
          className: "w-[22px] h-[22px] absolute top-0 left-[51px]",
        },
        {
          src: "/vector-5.svg",
          alt: "Vector",
          className: "w-[54px] h-[54px] absolute top-3 left-0",
        },
      ],
    },
    {
      id: 3,
      content: "One in ten people develop this disease, die from it.",
      icons: [
        {
          src: "/vector-7.svg",
          alt: "Vector",
          className: "w-[30px] h-[30px] absolute top-[25px] left-[31px]",
        },
        {
          src: "/vector-1.svg",
          alt: "Vector",
          className: "w-[22px] h-[22px] absolute top-[33px] left-[69px]",
        },
        {
          src: "/vector-1.svg",
          alt: "Vector",
          className: "w-[22px] h-[22px] absolute top-[33px] left-[97px]",
        },
        {
          src: "/vector-1.svg",
          alt: "Vector",
          className: "w-[22px] h-[22px] absolute top-[33px] left-[124px]",
        },
        {
          src: "/vector-1.svg",
          alt: "Vector",
          className: "w-[22px] h-[22px] absolute top-[33px] left-[151px]",
        },
        {
          src: "/vector-1.svg",
          alt: "Vector",
          className: "w-[22px] h-[22px] absolute top-[62px] left-[31px]",
        },
        {
          src: "/vector-1.svg",
          alt: "Vector",
          className: "w-[22px] h-[22px] absolute top-[62px] left-[58px]",
        },
        {
          src: "/vector-1.svg",
          alt: "Vector",
          className: "w-[22px] h-[22px] absolute top-[62px] left-[85px]",
        },
        {
          src: "/vector-1.svg",
          alt: "Vector",
          className: "w-[22px] h-[22px] absolute top-[62px] left-[113px]",
        },
      ],
    },
    {
      id: 4,
      content:
        "It can lead to severe complications like deafness, loss of limbs or even death.",
      icons: [
        {
          src: "/bx-handicap.svg",
          alt: "Bx handicap",
          className: "w-[73px] h-[88px] absolute top-0 left-[76px]",
        },
        {
          src: "/streamline-hearing-deaf-1-solid.svg",
          alt: "Streamline hearing",
          className: "w-[61px] h-[76px] absolute top-2 left-[27px]",
        },
      ],
    },
  ];

  return (
    <section className="w-full bg-[#4169f6] py-8 md:py-16 overflow-hidden relative px-4 md:px-0">
      {/* Main section title */}
      <div className="text-center mb-8 md:mb-12">
        <h1 className="[font-family:'Open_Sans',Helvetica] font-normal text-neutral-0 text-[30px] md:text-[42px] tracking-[-1.00px] leading-[1.2] md:leading-[50.4px]">
          <span className="tracking-[-0.42px]">What is </span>
          <span className="font-bold tracking-[-0.42px]">
            Meningococcal Meningitis?{" "}
          </span>
        </h1>
      </div>

      {/* Main content */}
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col md:flex-row gap-6 md:gap-8">
          {/* Left side - Image */}
          <div className="w-full md:w-1/3 relative mb-6 md:mb-0 flex justify-center md:justify-start">
            <div className="relative w-full max-w-[350px] md:w-full h-full">
              <div className="w-full h-auto aspect-square md:h-full rounded-3xl overflow-hidden">
                <img
                  className="w-full h-full object-cover"
                  alt="Image"
                  src="/image-2.png"
                />
              </div>
            </div>
          </div>

          {/* Right side - Info cards */}
          <div className="w-full md:w-2/3">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
              {infoCards.map((card) => (
                <Card
                  key={card.id}
                  className="bg-[#5279f6] rounded-[27.79px] border-[1.16px] border-solid border-[#6e91f7] h-auto md:h-[231px]"
                >
                  <CardContent className="p-5 md:p-7 flex flex-col items-center md:block">
                    {/* Render single icon */}
                    {card.icon && (
                      <img
                        className="w-[40px] h-[40px] md:w-[51px] md:h-[51px] mb-4 md:mb-6"
                        alt={card.altText}
                        src={card.icon}
                      />
                    )}

                    {/* Render multiple icons */}
                    {card.icons && (
                      <div className="relative h-[70px] md:h-[88px] mb-4 md:mb-2" style={{ width: '180px' }}>
                        {card.icons.map((icon, index) => (
                          <img
                            key={index}
                            className={icon.className}
                            alt={icon.alt}
                            src={icon.src}
                          />
                        ))}
                      </div>
                    )}

                    <p className="[font-family:'Open_Sans',Helvetica] font-bold text-neutral-0 text-base md:text-lg tracking-[0.23px] leading-[1.5] md:leading-[27px] text-center md:text-left">
                      {card.content}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
