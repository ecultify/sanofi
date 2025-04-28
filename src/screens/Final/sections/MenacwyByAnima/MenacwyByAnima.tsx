import React from "react";

export const MenacwyByAnima = (): JSX.Element => {
  // References data for better maintainability
  const references = [
    {
      text: "*MenACWY: Meningococcal vaccine against serogroup A, C, W & Y",
      isLink: false,
    },
    {
      text: "https://www.immunize.org/laws/menin.asp",
      isLink: true,
      url: "https://www.immunize.org/laws/menin.asp",
      suffix: " Accessed on June 27, 2022",
    },
    {
      text: "https://www.who.int/health-topics/meningitis#tab=tab_1",
      isLink: true,
      url: "https://www.who.int/health-topics/meningitis#tab=tab_1",
      suffix: ". Accessed on June 27, 2022.",
    },
    {
      text: "WHO. Meningococcal meningitis. Available at",
      isLink: false,
    },
    {
      text: "https://www.who.int/news-rooms/fact-sheets/detail/meningococcal-meningitis",
      isLink: true,
      url: "https://www.who.int/news-rooms/fact-sheets/detail/meningococcal-meningitis",
      suffix: " Accessed February 2021",
    },
    {
      text: "Meningitis Research Foundation. What are meningitis and septicaemia. Available at",
      isLink: false,
    },
    {
      text: "https://www.meningitis.org/meningitis/what-is-meningitis",
      isLink: true,
      url: "https://www.meningitis.org/meningitis/what-is-meningitis",
      suffix: " Accessed February 2021",
    },
    {
      text: "CDC. Meningococcal disease- Diagnosis, Treatment, and Complications. Available at",
      isLink: false,
    },
    {
      text: "https://www.cdc.gov/meningococcal/about/diagnosis-treatment.html",
      isLink: true,
      url: "https://www.cdc.gov/meningococcal/about/diagnosis-treatment.html",
      suffix: " Accessed February 2021",
    },
    {
      text: "Sarah Schaffer DeRooa, Rachel G. Torresb, and Linda Y.Fu HUMAN VACCINES & IMMUNITHERAPEUTICS 2021, 4675-4688, Meningococcal disease and vaccination in college students",
      isLink: false,
    },
  ];

  return (
  <div className="p-6 font-['Open_Sans',Helvetica] text-base tracking-[0.20px] leading-6">
    <span className="mb-3 block text-[#3555c1]">*MenACWY: Meningococcal vaccine against serogroup A, C, W & Y</span>
    <ol className="list-decimal pl-5 space-y-1">
      <li className="break-words whitespace-normal">
        <a href="https://www.immunize.org/laws/menin.asp" target="_blank" rel="noopener noreferrer" className="text-[#3555c1] underline break-words">https://www.immunize.org/laws/menin.asp</a> Accessed on June 27, 2022
      </li>
      <li className="break-words whitespace-normal">
        <a href="https://www.who.int/health-topics/meningitis#tab=tab_1" target="_blank" rel="noopener noreferrer" className="text-[#3555c1] underline break-words">https://www.who.int/health-topics/meningitis#tab=tab_1</a> Accessed on June 27, 2022.
      </li>
      <li className="break-words whitespace-normal">
        WHO. Meningococcal meningitis. Available at <a href="https://www.who.int/news-rooms/fact-sheets/detail/meningococcal-meningitis" target="_blank" rel="noopener noreferrer" className="text-[#3555c1] underline break-words">https://www.who.int/news-rooms/fact-sheets/detail/meningococcal-meningitis</a> Accessed February 2021
      </li>
      <li className="break-words whitespace-normal">
        Meningitis Research Foundation. What are meningitis and septicaemia. Available at <a href="https://www.meningitis.org/meningitis/what-is-meningitis" target="_blank" rel="noopener noreferrer" className="text-[#3555c1] underline break-words">https://www.meningitis.org/meningitis/what-is-meningitis</a> Accessed February 2021
      </li>
      <li className="break-words whitespace-normal">
        CDC. Meningococcal disease- Diagnosis, Treatment, and Complications. Available at <a href="https://www.cdc.gov/meningococcal/about/diagnosis-treatment.html" target="_blank" rel="noopener noreferrer" className="text-[#3555c1] underline break-words">https://www.cdc.gov/meningococcal/about/diagnosis-treatment.html</a> Accessed February 2021
      </li>
      <li className="break-words whitespace-normal">
        Sarah Schaffer DeRooa, Rachel G. Torresb, and Linda Y.Fu HUMAN VACCINES & IMMUNITHERAPEUTICS 2021, 4675-4688, Meningococcal disease and vaccination in college students
      </li>
    </ol>
  </div>
  );
};
