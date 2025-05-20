import React from "react";

export const LoadingFallback = (): JSX.Element => {
  return (
    <div className="h-screen w-full flex items-center justify-center bg-white">
      <div className="flex flex-col items-center">
        <img
          src="/image-24.png"
          alt="Logo"
          className="w-full max-w-[250px] h-auto mb-8 animate-pulse"
        />
        <div className="w-16 h-16 border-4 border-[#416AF6] border-t-transparent rounded-full animate-spin"></div>
      </div>
    </div>
  );
};
