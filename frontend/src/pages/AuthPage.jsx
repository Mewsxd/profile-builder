import { useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import dashMockup from "../assets/dash-mockup.png";
import { useContext } from "react";
import { MainContext } from "../store/MainContext";

const AuthPage = () => {
  const nameRef = useRef("");
  const emailRef = useRef("");
  const passwordRef = useRef("");
  const navigate = useNavigate();
  const { setStateReload } = useContext(MainContext);
  const [isLoginPage, setIsLoginPage] = useState(true);

  async function loginFormSubmitHandler(e) {
    e.preventDefault();
    if (!emailRef.current?.value) {
      return alert("Please give us your email id");
    }
    if (!passwordRef.current?.value) {
      return alert("Please give us your password");
    }
    const reqBody = {
      email: emailRef.current.value,
      password: passwordRef.current?.value,
    };
    try {
      const request = await fetch(`http://localhost:8000/api/v1/user/login`, {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(reqBody),
      });
      const response = await request.json();
      console.log(response);
      if (response.status === "success") {
        emailRef.current.value = "";
        passwordRef.current.value = "";
        localStorage.setItem("jwt", response?.token);
        setStateReload(Math.random());
        navigate("/dashboard");
      } else if (response.status === "fail") {
        alert(response.message || "Some error occured");
      }
    } catch (err) {
      console.log(err);
    }
  }
  async function signupFormSubmitHandler(e) {
    e.preventDefault();
    if (!nameRef.current?.value) {
      return alert("Please give us your name");
    }
    if (!emailRef.current?.value) {
      return alert("Please give us your email id");
    }
    if (!passwordRef.current?.value) {
      return alert("Please give us your password");
    }
    const reqBody = {
      name: nameRef.current?.value,
      email: emailRef.current?.value,
      password: passwordRef.current?.value,
    };
    let response;
    try {
      const request = await fetch(`http://localhost:8000/api/v1/user/signup`, {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(reqBody),
      });
      response = await request.json();
      https://github.com/Mewsxd/profile-builder
      if (response.status === "success") {
        nameRef.current.value = "";
        emailRef.current.value = "";
        passwordRef.current.value = "";
        localStorage.setItem("jwt", response?.token);
        navigate("/dashboard");
        // alert("Form submitted succesfully");
      } else if (response.status === "fail") {
        alert(response.message);
      }
    } catch (err) {
      console.log(response);
      alert("An error occured");
    }
  }

  return (
    <div className="w-[100%] flex justify-center items-center h-dvh bg-[#EFECE8] overflow-hidden">
      <div className="left flex items-center flex-1 justify-center w-full h-full">
        <form
          className="form w-[342px] flex flex-col  gap-2 p-4 rounded"
          onSubmit={
            isLoginPage ? loginFormSubmitHandler : signupFormSubmitHandler
          }
        >
          <label className="input font-inter text-2xl text-[#A45848] font-semibold px-1 py-[10px] outline-none rounded w-full">
            {isLoginPage ? "Log in" : "Sign up"} to ProfileBuilder
          </label>
          {isLoginPage || (
            <input
              type="text"
              placeholder="name"
              ref={nameRef}
              className="input font-inter px-3 py-[10px] text-[#3F292B] outline-none border rounded w-full"
            />
          )}
          <input
            type="email"
            placeholder="email"
            ref={emailRef}
            className="input font-inter px-3 py-[10px] text-[#3F292B] outline-none border rounded w-full"
          />
          <input
            type="password"
            ref={passwordRef}
            placeholder="password"
            className="input font-inter px-3 py-[10px] text-[#3F292B] outline-none border rounded w-full"
          />
          <button
            type="submit"
            className="font-inter w-full px-3 py-[10px]  outline-none border rounded bg-[#A45848] text-white"
          >
            {isLoginPage ? "Log In" : "Sign Up"}
          </button>
          <label className="input font-inter px-1 py-[10px] text-[#3F292B] outline-none rounded w-full">
            {isLoginPage
              ? "Don't have an account?"
              : "Already have an account?"}
          </label>
          <Link to={`?mode=${isLoginPage ? "login" : "signup"}`}>
            <button
              type="button"
              className="font-inter w-fit px-5 py-[10px]  outline-none border rounded bg-[#A45848] text-white"
              onClick={() => setIsLoginPage(!isLoginPage)}
            >
              {isLoginPage ? "Sign Up" : "Log In"}
            </button>
          </Link>
        </form>
      </div>
      <div className="right flex-1 overflow-hidden md:hidden">
        <img
          src={dashMockup}
          className="max-w-6xl h-[150%] object-cover"
          alt="Dashboard Mockup"
        />
      </div>
    </div>
  );
};

export default AuthPage;
