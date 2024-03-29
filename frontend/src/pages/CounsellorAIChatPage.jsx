import { FiPlus } from "react-icons/fi";
import { MdArrowUpward } from "react-icons/md";
import { RiRobot2Fill } from "react-icons/ri";
import ChatName from "../components/chat-components/ChatName";
import { IoSearchOutline } from "react-icons/io5";
import { IoIosArrowRoundBack } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import { useRef } from "react";
import { useState } from "react";
import UserPrompt from "../components/chat-components/UserPrompt";
import AIResponse from "../components/chat-components/AIResponse";

const CounsellorAIChatPage = () => {
  const promptRef = useRef(null);
  const [promptArray, setPromptArray] = useState([]);
  const navigate = useNavigate();
  function promptHandler() {
    const newQuestion = promptRef.current?.value;
    if (!newQuestion) {
      return alert("Enter a prompt");
    }
    setPromptArray((prev) => [
      ...prev,
      {
        question: newQuestion,
        answer: "AI currently isn't working",
      },
    ]);

    // Clear the input field after updating the state
    promptRef.current.value = "";
  }

  return (
    <>
      <div className="w-full px-4 py-3 border-b-gray-200 border-b ">
        <div
          onClick={() => navigate(-1)}
          className="flex gap-1 items-center cursor-pointer text-black"
        >
          <IoIosArrowRoundBack />
          <p className="text-sm font-inter cursor-pointer text-black">Back</p>
        </div>
        <h1 className=" py-4 text-3xl text-black font-inter font-bold pb-0">
          AI Chat Bot
        </h1>
      </div>

      <div className="mainContainer w-full h-[70%] px-4 py-3 border-b-gray-200 border-b-0 flex md:flex-col md:h-[900px]">
        <div
          className="leftContainer w-[30%]  border border-r-0
           rounded-l-md md:w-full md:h-[50%] md:border-r-[1px] md:rounded-r-md "
        >
          <div className="searchDiv h-[18%] w-full flex items-center justify-center border-b-[1px] ">
            <div className="inputBox relative w-[85%]  bg-oliv flex items-center rounded-3xl p-2.5 border ">
              <input
                type="text"
                className=" w-full font-inter rounded-3xl bg-oliv outline-none pl-8 text-sm"
                placeholder="Search"
              />
              <IoSearchOutline className="absolute top-[50%] translate-x-[-50%] translate-y-[-50%] left-6 text-xl" />
            </div>
          </div>
          <div className="chatTitleDiv h-[62%] w-full border-b-[1px] overflow-x-hidden overflow-y-scroll no-scrollbar">
            <ChatName
              title={
                "gvsxhj nm vbhsxjnkm vxshbjnkm tvxshbjn bxsjnk dfdfefdddgv efe"
              }
            />
            <ChatName title={"gvsxhj nm vbhsxjnkm vxshbjnkm tvxshbjn bxsjnk"} />
            <ChatName title={"gvsxhj nm vbhsxjnkm vxshbjnkm tvxshbjn bxsjnk"} />
            <ChatName title={"gvsxhj nm vbhsxjnkm vxshbjnkm tvxshbjn bxsjnk"} />
            <ChatName title={"gvsxhj nm vbhsxjnkm vxshbjnkm tvxshbjn bxsjnk"} />
            <ChatName title={"gvsxhj nm vbhsxjnkm vxshbjnkm tvxshbjn bxsjnk"} />
            <ChatName title={"gvsxhj nm vbhsxjnkm vxshbjnkm tvxshbjn bxsjnk"} />
            <ChatName title={"gvsxhj nm vbhsxjnkm vxshbjnkm tvxshbjn bxsjnk"} />
            <ChatName title={"gvsxhj nm vbhsxjnkm vxshbjnkm tvxshbjn bxsjnk"} />
            <ChatName title={"gvsxhj nm vbhsxjnkm vxshbjnkm tvxshbjn bxsjnk"} />
            <ChatName title={"gvsxhj nm vbhsxjnkm vxshbjnkm tvxshbjn bxsjnk"} />
            <ChatName title={"gvsxhj nm vbhsxjnkm vxshbjnkm tvxshbjn bxsjnk"} />
          </div>
          <div className="newChat h-[20%] w-full flex items-center justify-center">
            <button className="input flex items-center justify-center gap-3 font-inter w-[85%] px-3 py-[10px] my-4 bg-[#3F292B] text-oliv outline-none border rounded-3xl cursor-pointer transition duration-500 ease-in-out hover:shadow-lg hover:-translate-y-1.5 focus:outline-none focus:shadow-outline-blue lg:hover:shadow lg:hover:-translate-y-0 ">
              <FiPlus />
              New chat
            </button>
          </div>
        </div>
        <div className="rightContainer w-[70%] border rounded-r-md md:w-full md:h-[50%] md:rounded-r-none md:rounded-b-md">
          <div className="header h-[18%] w-full flex items-center border-b-[1px] p-3">
            <div className="flex gap-3 items-center">
              <RiRobot2Fill className="text-3xl text-black" />
              <p className="font-inter font-bold">GPT-4</p>
            </div>
          </div>
          <div className="w-full flex flex-col h-[67%] py-2 pl-3 pr-6 overflow-x-hidden overflow-y-scroll no-scrollbar">
            {/* <AIResponse response="As a B.Sc graduate " />
            <UserPrompt prompt="skills to navigate the intricate landscape of computer scien" />
            <AIResponse
              response="As a B.Sc graduate in Computer Science from the University of Mumbai, I
        have cultivated proficiency in a diverse set of programming languages,
        encompassing Python, Java, and JavaScript. My expertise extends to both
        backend and frontend frameworks, including React.js, Express.js,
        MongoDB, MySQL, and Node.js. I boast hands-on experience utilizing these
        tools and am particularly adept at constructing efficient and secure
        APIs. Throughout my academic and practical journey, I have honed my
        skills to navigate the intricate landscape of computer science,
        equipping myself with the ability to tackle complex challenges"
            />
            <UserPrompt
              prompt="in Computer Science from the University of Mumbai, I
        have cultivated proficiency in a diverse set of programming languages,
        encompassing Python, Java, and JavaScript. My expertise extends to both
        backend and frontend frameworks, including React.js, Express.js,
        MongoDB, MySQL, and Node.js. I boast hands-on experience utilizing these
        tools and am particularly adept at constructing efficient and secure
        APIs. Throughout my academic and practical journey, I have honed my
        skills to navigate the intricate landscape of computer science,
        equipping myself with the ability to tackle complex challenges"
            /> */}
            {promptArray.map((item) => {
              return (
                <>
                  <UserPrompt prompt={item?.question} />
                  <AIResponse response={item?.answer} />
                </>
              );
            })}
          </div>
          <div className="prompt w-full h-[15%]  px-3">
            <div className="relative w-full flex items-center justify-center h-full">
              <textarea
                ref={promptRef}
                rows="1"
                cols={"10"}
                type="text"
                className="w-full resize-none max font-inter py-3 rounded-3xl bg-oliv outline-none pl-8 pr-10 text-sm"
                placeholder="Enter your message"
              />
              <button
                onClick={promptHandler}
                className="absolute translate-x-10 top-[50%] translate-y-[-50%] right-11 bg-scrlt p-2 rounded-full"
              >
                <MdArrowUpward className=" text-white  text-xl hover:-translate-y-[2px] transition-all " />
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CounsellorAIChatPage;
