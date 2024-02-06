import React from "react";
// import hero from "../../assets/hero.png";
import hero2 from "../../assets/hero2.svg";
import { RiMenu3Line } from "react-icons/ri";
import { useState } from "react";
import arrowgrn from "../../assets/arrowgrn.svg";
import linegrn from "../../assets/linegrn.svg";
import hatbeige from "../../assets/hatbeige.svg";
import twolinesbeige from "../../assets/twolinebeige.svg";

const HeroSection = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <div className="Navbar relative px-8 py-4 w-[100%] h-[11vh] bg-oliv flex justify-between items-center">
        <div className="logo tracking-wider cursor-pointer font-mono text-[25px] font-bold text-scrlt">
          Profile Builder
        </div>
        <div className="login font-poppins text-[18px] font-medium text-scrlt">
          <button className="loginBtn transition ease-in-out delay-100 px-5 py-2 border-[2px] border-oliv rounded-md hover:border-[2px] hover:py-2 hover:px-5 hover:border-scrlt hover:rounded-md md:hidden">
            login
          </button>
        </div>
        <div className="Menu text-[28px] font-extrabold text-scrlt hidden md:block">
          <RiMenu3Line onClick={() => setIsOpen(!isOpen)} />
        </div>
      </div>
      {isOpen && (
        <div className="loginmodal transition ease-in-out delay-150 absolute z-50 right-0 text-center p-3 w-[100px] bg-lteal font-poppins text-[18px] font-medium text-scrlt">
          login
        </div>
      )}

      {/* ///////////////////////////////////////// */}
      <div className="hero pb-10 relative pl-8 w-[100%] h-[89vh] bg-oliv flex m480:flex-col m480:h-[100dvh]  m480:justify-between m480:pl-0">
        <div className="left-sec pr-4 w-[40%] lg2:w-[50%] flex flex-col justify-center items-start m480:w-[100%] m480:items-center m480:text-center m480:px-8 m480:py-[15px]">
          <h1
            className="hero-head text-[40px] font-poppins text-scrlt font-bold leading-tight"
            // data-aos="fade-right"
            // data-aos-once="true"
            // data-aos-duration="1000"
          >
            Craft your success story with your AI Brand.
          </h1>
          <p className="py-[25px] font-poppins text-scrlt font-normal m480:py-[15px]">
            Effortlessly craft standout resumes with Your AI Brand, showcasing
            skills and experience for a competitive edge.
          </p>
          <button className="get-startedBtn font-poppins transition ease-in-out delay-100 text-[16px] bg-scrlt px-6 py-3 rounded-md text-oliv hover:bg-lteal hover:text-scrlt">
            Get Started
          </button>
        </div>
        <div className="Right-sec relative w-[60%] lg2:w-[50%] flex items-center justify-center px-4 rounded-l-full bg-lteal m480:w-[100%] m480:rounded-none m480:py-6">
          <img
            src={hero2}
            className="heroImage w-[70%] lg:w-[80%] transition ease-in-out delay-100 rounded-md m480:p-4"
          />
        </div>
      </div>
    </>
  );
};

export default HeroSection;