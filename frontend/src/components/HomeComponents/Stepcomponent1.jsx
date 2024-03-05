import r1 from "../../assets/uplload.svg";

const Resume1 = () => {
  return (
    <>
      <div className="parent-part w-full flex items-center justify-center sm:flex-col bg-[#efece8] px-8 sm:px-8 py-14 air:py-18  ">
        <div className="sub-parent w-[45%] sm:w-full sm:flex sm:justify-center sm:pb-8">
          <img className="w-full air:w-[80%] h-auto" src={r1} alt="Resume 1" />
        </div>

        <div className="sub-parent-left w-[55%] sm:w-full flex-wrap  pl-10 sm:pl-0 air:pl-4 ">
          <p className="font-raleway text-scrlt font-bold text-4xl air:pl-0 sm2:pl-4">
            Upload and automatically reformat your old resume
          </p>
          <p className="font-inter text-scrlt pt-10 sm:pt-6 air:pl-0 sm2:pl-4">
            Have an old resume with an outdated layout? Upload it to our resume
            maker, and we’ll transform it into a fresh, contemporary design
            absolutely free of charge. Save time, and enjoy your new, modern
            resume in just a few minutes.
          </p>
        </div>
      </div>
    </>
  );
};

export default Resume1;
