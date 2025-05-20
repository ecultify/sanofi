import { DivByAnima } from "../Final/sections/DivByAnima";
import { Link } from "react-router-dom";
import { Card, CardContent } from "../../components/ui/card";

export const Terms = (): JSX.Element => {
  return (    <div className="bg-white flex flex-row justify-center w-full min-h-screen px-[15px] overflow-x-hidden">
      <div className="bg-white w-full max-w-[1440px]">
        {/* Header Section */}        <header className="container mx-auto px-4 pt-10 pb-8">
          <Link to="/" className="inline-block">
            <img
              className="w-full max-w-[385px] h-auto object-cover"
              alt="Logo"
              src="/image-24.png"
            />
          </Link>
        </header>

        {/* Main Content */}
        <section className="container mx-auto px-4 py-8 md:py-12">
          <h1 className="text-[32px] md:text-[42px] font-bold text-[#416af6] mb-8 md:mb-12">
            Terms & Conditions
          </h1>

          <Card className="w-full rounded-3xl border border-solid border-[#6e91f7] mb-8">
            <CardContent className="p-6 font-['Open_Sans'] text-base tracking-[0.20px] leading-6">
              <h2 className="text-[24px] font-semibold text-[#416af6] mb-4">
                Terms of Use
              </h2>
              <p className="mb-6">
                Please read these terms and conditions carefully before using our website and services. By accessing or using our website, you agree to be bound by these terms and conditions.
              </p>

              <h2 className="text-[24px] font-semibold text-[#416af6] mb-4">
                Website Use
              </h2>
              <p className="mb-4">
                The content of this website is for general information and use only. It is subject to change without notice. This website uses cookies to monitor browsing preferences.
              </p>
              <p className="mb-6">
                Neither we nor any third parties provide any warranty or guarantee as to the accuracy, timeliness, performance, completeness or suitability of the information and materials found or offered on this website for any particular purpose. You acknowledge that such information and materials may contain inaccuracies or errors and we expressly exclude liability for any such inaccuracies or errors to the fullest extent permitted by law.
              </p>

              <h2 className="text-[24px] font-semibold text-[#416af6] mb-4">
                Intellectual Property
              </h2>
              <p className="mb-6">
                This website contains material which is owned by or licensed to us. This material includes, but is not limited to, the design, layout, look, appearance and graphics. Reproduction is prohibited other than in accordance with the copyright notice, which forms part of these terms and conditions.
              </p>

              <h2 className="text-[24px] font-semibold text-[#416af6] mb-4">
                Disclaimer
              </h2>
              <p className="mb-6">
                Your use of any information or materials on this website is entirely at your own risk, for which we shall not be liable. It shall be your own responsibility to ensure that any products, services or information available through this website meet your specific requirements.
              </p>

              <h2 className="text-[24px] font-semibold text-[#416af6] mb-4">
                Limitation of Liability
              </h2>
              <p className="mb-6">
                In no event shall we be liable for any direct, indirect, incidental, consequential, special or exemplary damages arising out of or in connection with your access or use of or inability to access or use the website and any third party content and services, whether or not the damages were foreseeable and whether or not we were advised of the possibility of such damages.
              </p>

              <h2 className="text-[24px] font-semibold text-[#416af6] mb-4">
                Governing Law
              </h2>
              <p className="mb-6">
                These terms and conditions are governed by and construed in accordance with the laws and you irrevocably submit to the exclusive jurisdiction of the courts in that location.
              </p>
            </CardContent>
          </Card>
        </section>

        {/* Footer Section */}
        <DivByAnima />
        
        <footer className="container mx-auto px-4 py-8">          <div className="flex flex-col md:flex-row justify-between gap-4 md:items-center">
            <div className="[font-family:'Open_Sans'] font-bold text-[#416af6] text-sm md:text-base tracking-[0.20px] leading-6 text-center md:text-left">
              
            </div>            <div className="[font-family:'Open_Sans'] font-bold text-[#416af6] text-sm md:text-base tracking-[0.20px] leading-6 text-center md:text-left">
              <Link to="/privacy" className="hover:underline">Privacy Policy</Link> | <Link to="/terms" className="hover:underline">Terms &amp; Conditions</Link>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};