import hero2 from "../../assets/hero2.svg";
import { RiMenu3Line } from "react-icons/ri";
import { useState } from "react";
// import arrowgrn from "../../assets/arrowgrn.svg";
// import linegrn from "../../assets/linegrn.svg";
// import hatbeige from "../../assets/hatbeige.svg";
// import twolinesbeige from "../../assets/twolinebeige.svg";
import AutoTypeEffect from "./AutoTypeEffect";
import { GiArtificialHive } from "react-icons/gi";
import { useRef } from "react";
import WhyChooseUs from "./WhyChooseUs";
import OurFeatures from "./OurFeatures";
import PricingCards from "./PricingCards";
import { Link } from "react-router-dom";
import FourSimpleSteps from "./FourSimpleSteps";
import StepComponent1 from "../../components/HomeComponents/Stepcomponent1";
import StepComponent2 from "../../components/HomeComponents/stepcomponent2";
import StepComponent3 from "../../components/HomeComponents/Stepcomponent3";
const HeroSection = () => {
  const [isOpen, setIsOpen] = useState(false);
  const chooseUsRef = useRef(null);
  const priceRef = useRef(null);
  const featuresRef = useRef(null);

  const scrollToTarget = (section) => {
    // Step 3: Use scrollIntoView on the ref
    if (section === "Choose us") {
      return chooseUsRef.current.scrollIntoView({ behavior: "smooth" });
    }
    if (section === "Features") {
      return featuresRef.current.scrollIntoView({ behavior: "smooth" });
    }
    if (section === "Price") {
      return priceRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <>
      <div className="Navbar relative px-8 py-4 w-[100%] h-[10dvh] bg-oliv flex justify-between items-center sm:px-4 sm:py-2 sm:h-[8vh]">
        <div className="logo flex items-center">
          <GiArtificialHive className="text-scrlt mr-1 text-4xl rounded cursor-pointer animate-spin-slow m480:text-3xl" />
          <h1 className="logoHeading  tracking-wider cursor-pointer font-mono text-2xl font-bold text-scrlt m480:text-[22px]">
            ProfileBuilder
          </h1>
        </div>
        <div className="navs mr-20 flex gap-8 text-base font-semibold font-raleway text-scrlt air:hidden">
          <p
            onClick={() => scrollToTarget("Choose us")}
            className="cursor-pointer"
          >
            Why choose us
          </p>
          <p
            onClick={() => scrollToTarget("Features")}
            className="cursor-pointer"
          >
            Features
          </p>
          <p onClick={() => scrollToTarget("Price")} className="cursor-pointer">
            Pricing
          </p>
        </div>
        <div className="login font-raleway text-base font-semibold text-scrlt">
          <Link to={"/dashboard"}>
            <button className="loginBtn transition ease-in-out delay-100 px-5 py-2 border-[2px] border-oliv rounded-md hover:border-[2px] hover:py-2 hover:px-5 hover:border-scrlt hover:rounded-md air:hidden">
              Login
            </button>
          </Link>
        </div>
        <div className="Menu text-[28px] font-extrabold text-scrlt hidden air:block">
          <RiMenu3Line onClick={() => setIsOpen(!isOpen)} />
        </div>
      </div>
      {isOpen && (
        <div className="menu-modal transition ease-in-out delay-150 absolute z-50 right-0 text-center px-4 py-3 w-[100px] bg-scrlt  font-inter font-medium text-base text-oliv shadow-lg rounded-b-md">
          <div className="menuOpt flex flex-col gap-2 items-center">
            <p>Login</p>
          </div>
        </div>
      )}

      {/* ///////////////////////////////////////// */}
      <div className="hero py-5 relative pl-8 w-[100%] h-[90dvh] m480:h-[100%] bg-oliv flex m480:flex-col sm:pl-0  m480:justify-between m480:pl-0  m480:pb-24">
        <div className="left-sec pr-4 w-[40%] lg2:w-[50%] flex flex-col justify-center items-start m480:w-[100%] m480:items-center m480:text-center sm:px-4  sm:pb-8">
          <div className="logo py-6">
            <GiArtificialHive className="text-scrlt mr-1 hidden rounded cursor-pointer m480:block m480:text-4xl" />
          </div>
          <h1 className="hero-head text-4xl font-raleway text-scrlt font-bold leading-tight">
            <h1>
              {/* <AutoTypeEffect /> */}
              Craft your success story with ProfileBuilder
            </h1>
          </h1>
          <p className=" py-6 font-inter text-scrlt font-normal m480:py-5">
            Effortlessly craft standout resumes with Your AI Brand, showcasing
            skills and experience for a competitive edge.
          </p>
          <Link to={"/dashboard"}>
            <button className="get-startedBtn font-inter font-semibold transition ease-in-out delay-100 text-[16px] text-scrlt border-2 border-scrlt px-6 py-3 rounded-md hover:bg-scrlt hover:text-oliv animate-bounce m480:animate-none mt-3 m480:mt-0">
              Get Started
            </button>
          </Link>
        </div>
        <div
          className="Right-sec relative w-[60%] lg2:w-[50%] flex items-center justify-center px-4 rounded-l-full bg-lteal m480:w-[90%] m480:m-auto m480:rounded-lg  m480:py-6 shadow-xl m480:mt-8"
          data-aos="fade-left"
          data-aos-once="true"
          data-aos-delay="50"
          data-aos-duration="1000"
        >
          <img
            src={hero2}
            className="heroImage w-[70%] lg:w-[80%] transition ease-in-out delay-100 rounded-md m480:p-4"
          />
        </div>
      </div>
      <FourSimpleSteps />
      <WhyChooseUs ref={chooseUsRef} />
      <OurFeatures ref={featuresRef} />
      <StepComponent1 />
      <StepComponent2 />
      <StepComponent3 />
      <PricingCards ref={priceRef} />
    </>
  );
};

export default HeroSection;
