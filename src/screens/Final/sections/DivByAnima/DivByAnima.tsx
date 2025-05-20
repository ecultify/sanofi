import { MapPinIcon } from "lucide-react";
import React from "react";
import { fadeIn, slideInFromBottom, delay100, delay200 } from "../../../../lib/animation";

export const DivByAnima = (): JSX.Element => {
  const addresses = [
    "Dr. Reddy's Laboratories Ltd., Greenlands, 7-1-27, Ameerpet, Hyderabad 500 016, Telangana, India",
    "Sanofi Healthcare India Pvt. Ltd. Sanofi House, CTS No. 117-B, L&T Business Park, Saki Vihar Road, Powai, Mumbai - 400072, India",
  ];

  return (
    <div className="relative w-screen left-[50%] right-[50%] -mx-[50vw] bg-[#416af6] text-white">
      <footer className="py-16 container mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row items-center md:items-start justify-between">
          <div className={`mb-8 md:mb-0 flex justify-center md:justify-start w-full md:w-auto ${slideInFromBottom}`}>
            <a href="/" className="inline-block">
              <img
                className="h-auto md:h-[73px] w-[300px] md:w-auto object-contain"
                alt="Company Logo"
                src="/image-26.png"
              />
            </a>
          </div>

          <div className={`space-y-6 max-w-[815px] text-center md:text-left ${slideInFromBottom} ${delay100}`}>
            {addresses.map((address, index) => (
              <div key={index} className={`flex items-start gap-4 ${fadeIn} ${index === 0 ? '' : delay200}`}>                <MapPinIcon className="h-4 w-4 mt-1 flex-shrink-0 text-white" />
                <p className="font-['Open_Sans'] text-base tracking-[0.20px] leading-6">
                  {address}
                </p>
              </div>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
};
