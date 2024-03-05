import r1 from "../../assets/drag.png";

const Resume3 = () => {
  return (
    <>
      <div className="parent-part flex items-center justify-center sm:flex-col bg-[#efece8] px-8 sm:px-4 py-14 air:py-18 sm:pt-28 ">
        <div className="sub-parent w-fit">
          <img
            className="w-full air:w-[80%] sm:w-full h-auto"
            src={r1}
            alt="Resume 1"
          />
        </div>

        <div className="sub-parent-left flex-wrap w-full pl-10 sm:pl-0 air:pl-4 ">
          <p className="font-raleway text-scrlt font-bold text-4xl air:pl-0 sm2:pl-4">
            Generate unlimited resumes in PDF, DOC, TXT.
          </p>
          <p className="font-inter text-scrlt pt-10 air:pt-8 air:pl-0 sm2:pl-4">
            Create countless tailored resumes for every job you're applying for.
            Add or remove sections, change templates as needed. Download your
            ready resume in PDF, Word or TXT format and start applying for jobs
            instantly.
          </p>
        </div>
      </div>
    </>
  );
};

export default Resume3;
