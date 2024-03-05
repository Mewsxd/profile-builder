import React from "react";
import r1 from "../../assets/fix.svg";

const Resume2 = () => {
  return (
    <>
      <div className="parent-part w-full flex items-center justify-center  sm:flex-col-reverse bg-[#efece8] px-8 sm:px-8 py-14 air:py-18   ">
        <div className="sub-parent-left w-[55%] sm:w-full flex-wrap  pr-10 sm:pl-0  ">
          <p className="font-raleway text-scrlt font-bold text-4xl air:pl-0 sm2:pl-4">
            Score and fix your resume
          </p>
          <p className="font-inter text-scrlt pt-10  sm:pt-6 air:pt-8 air:pl-0 sm2:pl-4">
            Once your resume is ready, our resume builder will score it against
            other candidates applying for the same jobs. You will get detailed
            tips on how exactly to fix your resume to have a much greater chance
            of securing an interview.
          </p>
        </div>

        <div className="sub-parent p-4 w-[45%] sm:w-full sm:flex sm:justify-center sm:pb-8">
          <img
            className="w-full air:w-[80%] sm:w-full h-auto"
            src={r1}
            alt="Resume 1"
          />
        </div>
      </div>
    </>
  );
};

export default Resume2;
