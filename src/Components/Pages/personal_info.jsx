import React, { useState, useEffect } from "react";
import icont_01 from "../../assests/icons/icons-01.png";
import icont_02 from "../../assests/icons/icons-02.png";
import icont_03 from "../../assests/icons/icons-03.png";
import "../cart/cart.css";
const TypingAnimation = ({ texts }) => {
  const [displayedText, setDisplayedText] = useState(""); // State for the text being displayed
  const [isDeleting, setIsDeleting] = useState(false); // State to track typing/deleting
  const [charIndex, setCharIndex] = useState(0); // Current character index
  const [textIndex, setTextIndex] = useState(0); // Current index in the texts array
  const [speed, setSpeed] = useState(100); // Speed of typing/deleting

  const currentText = texts[textIndex]; // Get the current text to type

  useEffect(() => {
    let timer;

    if (!isDeleting && charIndex < currentText.length) {
      // Typing mode
      timer = setTimeout(() => {
        setDisplayedText(currentText.slice(0, charIndex + 1)); // Add next character
        setCharIndex(charIndex + 1); // Move to the next character
      }, speed);
    } else if (isDeleting && charIndex > 0) {
      // Deleting mode
      timer = setTimeout(() => {
        setDisplayedText(currentText.slice(0, charIndex - 1)); // Remove last character
        setCharIndex(charIndex - 1); // Move to the previous character
      }, speed);
    } else if (!isDeleting && charIndex === currentText.length) {
      // Pause before deleting
      timer = setTimeout(() => setIsDeleting(true), 1000); // Wait before deleting
    } else if (isDeleting && charIndex === 0) {
      // Switch to the next text after deleting
      setIsDeleting(false); // Reset to typing mode
      setTextIndex((prevIndex) => (prevIndex + 1) % texts.length); // Move to the next text
    }

    return () => clearTimeout(timer); // Cleanup timer to avoid memory leaks
  }, [charIndex, isDeleting, currentText, speed, texts]);

  return (
    <h2 className="font-bold text-[50px] font-[600] tracking-widest h-[200px]">
      a {displayedText}
    </h2>
  );
};

const Personal_Info = () => {
  return (
    <div className="flex   pt-[50px] max-h-[100vh] font-robotoCondensed normal-case text-white text-center justify-center items-center max-w-[100%] px-[150px]">
      <div className="flex flex-col px-4 w-full items-center max-w-[800px] justify-center">
        <span className="subtitle tracking-widest text-[20px] uppercase text-left justify-left item-left max-w-[500px] w-full">
          Welcome to my World
        </span>
        <p className="font-bold text-[50px] font-[600] tracking-widest h-[200px]">
          Hi, I'm <span className="text-[#FF004F]">Amir Khan</span>
          <TypingAnimation texts={["Developer.", "Professional Coder."]} />
        </p>
        <p className="text-[16px] font-[500] tracking-widest max-h-[200px] h-[full] w-full leading-[30px]">
          I use animation as a third dimension by which to simplify experiences
          and guiding through each and every interaction. I’m not adding motion
          just to spruce things up, but doing it in ways that.
        </p>
        <div className="flex py-8 gap-8">
          <div className="flex flex-col justify-center uppercase">
            <span className=" pr-3">Find with ME</span>
            <div className="flex flex-col ">
              <ul className="social-share flex liststyle">
                <li className="facebook px-4 py-4 card_shadow">
                  <a href="#">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      className="feather feather-facebook"
                    >
                      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                    </svg>
                  </a>
                </li>
                <li className="instagram px-4 py-4 card_shadow">
                  <a href="#">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      className="feather feather-instagram"
                    >
                      <rect
                        x="2"
                        y="2"
                        width="20"
                        height="20"
                        rx="5"
                        ry="5"
                      ></rect>
                      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                    </svg>
                  </a>
                </li>
                <li className="linkedin px-4 py-4 card_shadow">
                  <a href="#" className="shadow-2xl">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      className="feather feather-linkedin"
                    >
                      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                      <rect x="2" y="9" width="4" height="12"></rect>
                      <circle cx="4" cy="4" r="2"></circle>
                    </svg>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="flex flex-col justify-center uppercase">
            <span>Best Skill On</span>
            <ul className="skill-share flex liststyle">
              <li className="px-4 py-4 card_shadow ">
                <img
                  src={icont_01}
                  alt="Icons Images"
                  className="max-w-[20px] max-h-[20px]"
                />
              </li>
              <li className="px-4 py-4 card_shadow">
                <img
                  src={icont_02}
                  alt="Icons Images"
                  className="max-w-[20px] max-h-[20px]"
                />
              </li>
              <li className="px-4 py-4 card_shadow">
                <img
                  src={icont_03}
                  alt="Icons Images"
                  className="max-w-[20px] max-h-[20px]"
                />
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="flex flex-col w-full items-center  justify-center">
        <div className="card_shadow w-[400px] h-[550px] justify-center items-center">
          <img
            src={icont_01}
            alt="Handsome White"
            className="w-[698px] h-[509px] object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default Personal_Info;
