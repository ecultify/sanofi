import React from "react";
import { DivByAnima } from "../Final/sections/DivByAnima";
import { Card, CardContent } from "../../components/ui/card";

export const Privacy = (): JSX.Element => {
  return (
    <div className="bg-white flex flex-row justify-center w-full min-h-screen">
      <div className="bg-white w-full max-w-[1440px]">
        {/* Header Section */}
        <header className="container mx-auto px-4 pt-10 pb-8">
          <img
            className="w-full max-w-[385px] h-auto object-cover"
            alt="Logo"
            src="/image-24.png"
          />
        </header>

        {/* Main Content */}
        <section className="container mx-auto px-4 py-8 md:py-12">
          <h1 className="text-[32px] md:text-[42px] font-bold text-[#416af6] mb-8 md:mb-12">
            Data Privacy Center
          </h1>

          <Card className="w-full rounded-3xl border border-solid border-[#6e91f7] mb-8">
            <CardContent className="p-6 font-['Open_Sans',Helvetica] text-base tracking-[0.20px] leading-6">
              <h2 className="text-[24px] font-semibold text-[#416af6] mb-4">
                Our Commitment and Approach towards Data Privacy
              </h2>
              <p className="mb-6">
                We at Dr Reddy's recognize the fundamental privacy rights of all individuals we interact with. We are committed to responsibly using Personal Information in accordance with the Data Privacy laws in all the countries we operate in.
              </p>

              <h2 className="text-[24px] font-semibold text-[#416af6] mb-4">
                Our Data Privacy Principles
              </h2>
              <p className="mb-4">
                We strive to honor our commitment with the help of the following globally recognised and accepted principles of privacy, by:
              </p>

              <h3 className="text-[20px] font-semibold text-[#416af6] mb-2">
                Transparency
              </h3>
              <p className="mb-4">
                Ensuring that before collecting Personal Information from anyone, we inform each individual about how we will manage their data.
              </p>

              <h3 className="text-[20px] font-semibold text-[#416af6] mb-2">
                Purpose Limitation
              </h3>
              <p className="mb-4">
                Collecting Personal Information only for specific and legitimate business purpose(s). We also ensure that such data is used (collected, stored, shared etc.) responsibly.
              </p>

              <h3 className="text-[20px] font-semibold text-[#416af6] mb-2">
                Data Minimization
              </h3>
              <p className="mb-4">
                Making certain that Personal Information is collected only if it's directly relevant and necessary to fulfil our legitimate business purpose.
              </p>

              <h3 className="text-[20px] font-semibold text-[#416af6] mb-2">
                Security, Integrity, and Accuracy
              </h3>
              <p className="mb-4">
                Protecting all Personal Information in a manner that is consistent with Dr. Reddy's standards. This includes ensuring that all third parties providing services to us, meet our Data Privacy and Protection standards.
              </p>

              <h3 className="text-[20px] font-semibold text-[#416af6] mb-2">
                Minimal Retention
              </h3>
              <p className="mb-4">
                Retaining Personal Information only as long as it is necessary to fulfil the purpose for which it was originally collected.
              </p>

              <h3 className="text-[20px] font-semibold text-[#416af6] mb-2">
                Accountability
              </h3>
              <p className="mb-4">
                Taking responsibility for collection, use and transfer of Personal Information and have appropriate measures and records in place to demonstrate compliance with all the above principles.
              </p>

              <h2 className="text-[24px] font-semibold text-[#416af6] mb-4 mt-8">
                Privacy Notices
              </h2>
              <p className="mb-4">
                As part of our commitment to ensure 'transparency', we have made available the below notices to help you understand how your Personal Information is processed based on the relationship you have with us. Please select the notice most relevant to you.
              </p>

              <ul className="list-disc pl-5 space-y-2 mb-6">
                <li className="break-words whitespace-normal">
                  <span className="font-semibold">Global Privacy Notice</span> - This notice provides a general description of how we collect and manage the Personal Information of all individuals with whom we interact.
                </li>
                <li className="break-words whitespace-normal">
                  <span className="font-semibold">Website Privacy Notice</span> - This notice is addressed to the users of our websites.
                </li>
                <li className="break-words whitespace-normal">
                  <span className="font-semibold">Healthcare Professionals Privacy Notice</span> - This notice is addressed to the healthcare professionals (members of the medical, dental, pharmacy or nursing community) with whom we engage and interact, and those who, in the course of their professional activities, may prescribe, recommend, purchase, supply, sell or administer a pharmaceutical product or service of Dr Reddy's.
                </li>
                <li className="break-words whitespace-normal">
                  <span className="font-semibold">Pharmacovigilance Privacy Notice</span> - This notice is addressed to individuals who report any adverse events concerning the safety and quality of our products.
                </li>
                <li className="break-words whitespace-normal">
                  <span className="font-semibold">Job Applicants and Prospects Privacy Notice</span> - This notice is addressed to any individuals who wish to pursue career opportunities with us.
                </li>
                <li className="break-words whitespace-normal">
                  <span className="font-semibold">Privacy Notice for Third Parties</span> - This notice is addressed to 'external' third-party entities whom we partner with during the course of our business, their representatives as well as to visitors of any our facilities.
                </li>
              </ul>

              <h2 className="text-[24px] font-semibold text-[#416af6] mb-4 mt-8">
                Social Media Community Guidelines
              </h2>
              <p className="mb-4">
                These guidelines are for visitors to the official social media pages of Dr. Reddy's Laboratories Limited along with its affiliates and subsidiaries.
              </p>

              <ul className="list-disc pl-5 space-y-2 mb-6">
                <li className="break-words whitespace-normal">
                  Social Media Community Guidelines - Facebook
                </li>
                <li className="break-words whitespace-normal">
                  Social Media Community Guidelines - Instagram
                </li>
                <li className="break-words whitespace-normal">
                  Social Media Community Guidelines - LinkedIn
                </li>
                <li className="break-words whitespace-normal">
                  Social Media Community Guidelines - X (formerly Twitter)
                </li>
                <li className="break-words whitespace-normal">
                  Social Media Community Guidelines - YouTube
                </li>
              </ul>

              <h2 className="text-[24px] font-semibold text-[#416af6] mb-4 mt-8">
                General Data Protection Regulation (GDPR) – European Representative
              </h2>
              <p className="mb-4">
                <strong>Dr. Reddy's Laboratories Ltd</strong>
              </p>
              <p className="mb-4">
                Pursuant to Article 27 of the General Data Protection Regulation (GDPR), Dr. Reddy's Laboratories Ltd., with corporate address in 8-2-337, Road no.3, Banjara Hills, Hyderabad- 500034 has appointed European Data Protection Office (EDPO) as its GDPR Representative in the EU.
              </p>
              <p className="mb-4">
                You can contact EDPO regarding matters pertaining to the GDPR:
              </p>
              <ul className="list-disc pl-5 space-y-2 mb-6">
                <li className="break-words whitespace-normal">
                  by using EDPO's online request form: <a href="https://edpo.com/gdpr-data-request/" target="_blank" rel="noopener noreferrer" className="text-[#3555c1] underline break-words">https://edpo.com/gdpr-data-request/</a>
                </li>
                <li className="break-words whitespace-normal">
                  by writing to EDPO at Avenue Huart Hamoir 71, 1030 Brussels, Belgium.
                </li>
              </ul>

              <p className="mb-4">
                <strong>Dr. Reddy's Laboratories SA</strong>
              </p>
              <p className="mb-4">
                Pursuant to Article 27 of the General Data Protection Regulation (GDPR), Dr. Reddy's Laboratories SA, with corporate address in Elisabethenanlage 11, CH-4051, Basel, Switzerland has appointed European Data Protection Office (EDPO) as its GDPR Representative in the EU.
              </p>
              <p className="mb-4">
                You can contact EDPO regarding matters pertaining to the GDPR:
              </p>
              <ul className="list-disc pl-5 space-y-2 mb-6">
                <li className="break-words whitespace-normal">
                  by using EDPO's online request form: <a href="https://edpo.com/gdpr-data-request/" target="_blank" rel="noopener noreferrer" className="text-[#3555c1] underline break-words">https://edpo.com/gdpr-data-request/</a>
                </li>
                <li className="break-words whitespace-normal">
                  by writing to EDPO at Avenue Huart Hamoir 71, 1030 Brussels, Belgium.
                </li>
              </ul>
            </CardContent>
          </Card>
        </section>

        
        {/* Footer Section */}
        <DivByAnima />
        
        <footer className="container mx-auto px-4 py-8">
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