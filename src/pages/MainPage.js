import React, { useEffect, useState } from "react";
import Home from "../components/sections/Home";
import About from "../components/sections/About";
import RulesAndGuidelines from "../components/sections/RulesAndGuidelines";
import Criteria from "../components/sections/Criteria"
import FAQs from "../components/sections/FAQs";
import TimeLineLg from "../components/sections/TimeLineLg";
import TimeLineSm from "../components/sections/TimeLineSm";
import Rewards from "../components/sections/Rewards";
import Partners from "../components/sections/Partners";
import PrivacyAndTerms from "../components/sections/PrivacyAndTerms";
import UpScrollButton from "../components/UpScrollButton";
import Footer from "../components/Footer";


function MainPage() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", listenToScroll);
    return () => window.removeEventListener("scroll", listenToScroll);
  }, []);

  const listenToScroll = () => {
    let heightToHideFrom = 350;
    const winScroll =
      document.body.scrollTop || document.documentElement.scrollTop;

    if (winScroll > heightToHideFrom) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  return (
    <main className="bg-[#150E28] overflow-hidden relative">
      <Home />
      <About />
      <RulesAndGuidelines />
      <Criteria />
      <FAQs />
      <div className="hidden lg:block">
        <TimeLineLg />
      </div>
      <div className="lg:hidden">
        <TimeLineSm />
      </div>
      <div className="bkgImage">
        <Rewards />
      </div>
      <Partners />
      <PrivacyAndTerms />
      <Footer />
      {isVisible && (
        <div className="fixed top-[80%] right-5">
          <UpScrollButton />
        </div>
      )}
    </main>
  );
}

export default MainPage;
