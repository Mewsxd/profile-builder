import { IoIosArrowBack, IoIosArrowRoundBack } from "react-icons/io";
import { Link, useNavigate } from "react-router-dom";
import Label from "../components/utility-components/Label";
import Input from "../components/utility-components/Input";
import Textarea from "../components/utility-components/Textarea";
import { useState } from "react";
import { languages } from "countries-list";
import Editor from "../components/utility-components/Editor";

const ResumeRewriterPage = () => {
  const [selectedCreativity, setSelectedCreativity] = useState("Good");
  const [selectedTone, setSelectedTone] = useState("Professional");
  const [selectedLanguage, setselectedLanguage] = useState("English");
  const navigate = useNavigate();
  const languagesArray = Object.values(languages);
  const creativityArray = ["Good", "Economic", "Average", "Premium"];
  const toneArray = [
    "Professional",
    "Funny",
    "Casual",
    "Excited",
    "Witty",
    "Sarcastic",
    "Feminine",
    "Masculine",
    "Bold",
    "Dramatic",
    "Grumpy",
    "Generate",
    "Secretive",
  ];
  return (
    <div>
      <div className="w-full px-4 py-3 border-b-gray-200 border-b ">
        <div
          onClick={() => navigate(-1)}
          className="flex gap-1 items-center text-black"
        >
          <IoIosArrowRoundBack />
          <p className="text-sm font-inter cursor-pointer text-black">Back</p>
        </div>
        <h1 className=" py-4 text-3xl text-black font-inter font-bold pb-0">
          Resume rewriter
        </h1>
        <p className="text-sm text-gray-400 font-inter py-2">
          We'll refine your resume to match the job description and highlight
          your qualifications.
        </p>
      </div>
      <div className="w-full px-4 py-3 border-b-gray-200 border-b flex md:flex-col ">
        <div className="left w-[50%] md:w-full">
          <form className="flex flex-col w-[65%] xl:w-[80%] lg:w-[90%] sm:w-full">
            <Label>Current Resume</Label>
            <Textarea placeholder="Current resume" />
            <Label>Job description for new job</Label>
            <Textarea placeholder="Job description for the job you want to apply for" />
            <select
              onChange={(e) => setselectedLanguage(e.target.value)}
              defaultValue={"English"}
              className="input resize-none w-[50%] font-inter px-1 py-2 mb-4 text-[#3F292B] outline-none rounded-lg border"
            >
              {languagesArray.map((item) => {
                return (
                  <option key={item.name} value={item.name}>
                    {item.name} ({item.native})
                  </option>
                );
              })}
            </select>
            <div className="flex justify-between m480:flex-col">
              <div className="flex flex-col w-[45%] m480:w-full">
                <Label>Max Length</Label>
                <input
                  placeholder="Max word length"
                  type="number"
                  className="input font-inter px-3 w-[100%] py-2 mb-4 text-[#3F292B] outline-none border rounded-lg "
                  defaultValue={400}
                  max={400}
                  min={100}
                  step={1}
                />
              </div>
              <div className="flex flex-col w-[45%] m480:w-full">
                <Label>Number of results</Label>
                <input
                  type="number"
                  placeholder="Number of results"
                  className="input font-inter px-3 w-[100%] py-2 mb-4 text-[#3F292B] outline-none border rounded-lg "
                  defaultValue={1}
                  step={1}
                  max={3}
                  min={1}
                />
              </div>
            </div>
            <div className="flex justify-between m480:flex-col">
              <div className="flex flex-col w-[45%] m480:w-full">
                <Label>Creativity</Label>
                <select
                  onChange={(e) => setSelectedCreativity(e.target.value)}
                  defaultValue={"Good"}
                  className="input font-inter px-3 w-[100%] py-2 mb-4 text-[#3F292B] outline-none border rounded-lg "
                >
                  {creativityArray.map((item) => {
                    return (
                      <option key={item} value={item}>
                        {item}
                      </option>
                    );
                  })}
                </select>
              </div>
              <div className="flex flex-col w-[45%] m480:w-full">
                <Label>Tone of voice</Label>
                <select
                  onChange={(e) => setSelectedTone(e.target.value)}
                  defaultValue={"Professional"}
                  className="input font-inter px-3 w-[100%] py-2 mb-4 text-[#3F292B] outline-none border rounded-lg "
                >
                  {toneArray.map((item) => {
                    return (
                      <option key={item} value={item}>
                        {item}
                      </option>
                    );
                  })}
                </select>
              </div>
            </div>
            <input
              value={"Generate"}
              type="submit"
              className="input font-inter px-3 py-[10px] my-4 bg-[#3F292B] text-oliv outline-none border rounded-3xl cursor-pointer transition duration-500 ease-in-out hover:shadow-lg hover:-translate-y-1.5 focus:outline-none focus:shadow-outline-blue lg:hover:shadow lg:hover:-translate-y-0 "
            />
          </form>
        </div>
        <div className="right w-[50%] md:w-full">
          <Editor />
        </div>
      </div>
    </div>
  );
};

export default ResumeRewriterPage;
