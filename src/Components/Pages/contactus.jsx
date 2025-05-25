import React from "react";
import Header from "../Header/Header";
import Footer_div from "../Footer/footer";

const ContactUs = () => {
  return (
    <div>
      <Header />
      <div className="flex h-[115px] mx-auto bg-[#F0F0F0] w-full">
        <div className="flex w-1/3 justify-center items-center text-center">
          <h1 className="text-[20px] uppercase py-[20px] text-navyBlue tracking-widest font-semibold leading-[60px]">
            Contact US
          </h1>
        </div>
        <div className="flex w-2/3 justify-center items-center text-center">
          <div className="flex gap-2 text-[18px] text-navyBlue tracking-widest">
            <a href="/" className="flex text-[#FF004F] uppercase gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="25"
                height="25"
                viewBox="0 0 48 48"
              >
                <path d="M 23.958984 4 A 1.50015 1.50015 0 0 0 22.953125 4.4257812 L 3.453125 23.425781 A 1.50015 1.50015 0 1 0 5.546875 25.574219 L 24 7.59375 L 42.453125 25.574219 A 1.50015 1.50015 0 1 0 44.546875 23.425781 L 25.046875 4.4257812 A 1.50015 1.50015 0 0 0 23.958984 4 z M 24 25 C 19.599415 25 16 28.599415 16 33 L 16 41.5 A 1.50015 1.50015 0 1 0 19 41.5 L 19 33 C 19 30.220585 21.220585 28 24 28 C 26.779415 28 29 30.220585 29 33 L 29 41.5 A 1.50015 1.50015 0 1 0 32 41.5 L 32 33 C 32 28.599415 28.400585 25 24 25 z M 8.4765625 25.978516 A 1.50015 1.50015 0 0 0 7 27.5 L 7 41.5 A 1.50015 1.50015 0 1 0 10 41.5 L 10 27.5 A 1.50015 1.50015 0 0 0 8.4765625 25.978516 z M 39.476562 25.978516 A 1.50015 1.50015 0 0 0 38 27.5 L 38 41.5 A 1.50015 1.50015 0 1 0 41 41.5 L 41 27.5 A 1.50015 1.50015 0 0 0 39.476562 25.978516 z"></path>
              </svg>
              Home
            </a>
            <span>/ Contact US</span>
          </div>
        </div>
      </div>
      <div className="flex h-[800px] mx-auto w-[1300px] py-[100px] ">
        <div className="flex flex-col w-[900px]">
          <div className="flex flex-col gap-2 py-4 px-5">
            <span className="text-[#1F2F6F] text-[28px] font-[26px] font-montserrat">
              Contact Form
            </span>
            <span className="text-[18px] text-[#B1B1B1]">
              We answer during 24 hours in working days.
            </span>
          </div>
          <div className="flex flex-col gap-5 border border-black py-4 px-5">
            <input
              type="text"
              placeholder="Your Name"
              className=" w-full border border-black py-2 px-2"
            />
            <input
              type="email"
              placeholder="Your Email"
              className=" w-full border border-black py-2 px-2"
            />
            <textarea
              rows={5}
              placeholder="Message"
              className="w-full border border-black py-2 px-2 resize-none"
            />

            <button className="text-lg uppercase bg-[#1F2F6F] text-white w-[180px] py-2">
              Send Message
            </button>
          </div>
        </div>
        <div className="flex flex-col gap-2 py-4 px-5">
          <div className="flex flex-col gap-2 py-4 px-5">
            <span className="text-[26px] text-[#1F2F6F] font-montserrat">
              Pakistan office
            </span>
            <div className="flex flex-col text-[#16px] text-[#777777]">
              <span>Address:</span>
              <span>54/A, STREET#14, CALVARY GROUND LAHORE</span>
              <span>Contact:</span>
              <span>+92-0301-6860000</span>
              <span>+92-0300-4436171</span>
              <span>+92-0333-4315872</span>
            </div>

            <div className="flex flex-col text-[#16px] text-[#777777]">
              <span className="text-[24px] text-[#1F2F6F] font-montserrat">
                Canada Office
              </span>
              <span>Address:</span>
              <span>CALGARY, ALBERTA , CANADA</span>
            </div>
            <div className="flex flex-col text-[#16px] text-[#777777]">
              <span className="text-[24px] text-[#1F2F6F] font-montserrat">
                Email
              </span>
              <span>info@buraqsys.com</span>
              <span>buraqsysstudio@gmail.com</span>
            </div>
            <div className="flex">
              <button className="">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  width="35"
                  height="35"
                  viewBox="0 0 48 48"
                >
                  <path
                    fill="#039be5"
                    d="M24 5A19 19 0 1 0 24 43A19 19 0 1 0 24 5Z"
                  ></path>
                  <path
                    fill="#fff"
                    d="M26.572,29.036h4.917l0.772-4.995h-5.69v-2.73c0-2.075,0.678-3.915,2.619-3.915h3.119v-4.359c-0.548-0.074-1.707-0.236-3.897-0.236c-4.573,0-7.254,2.415-7.254,7.917v3.323h-4.701v4.995h4.701v13.729C22.089,42.905,23.032,43,24,43c0.875,0,1.729-0.08,2.572-0.194V29.036z"
                  ></path>
                </svg>
              </button>
              <button className="">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  width="30"
                  height="30"
                  viewBox="0 0 48 48"
                >
                  <path
                    fill="#0288D1"
                    d="M42,37c0,2.762-2.238,5-5,5H11c-2.761,0-5-2.238-5-5V11c0-2.762,2.239-5,5-5h26c2.762,0,5,2.238,5,5V37z"
                  ></path>
                  <path
                    fill="#FFF"
                    d="M12 19H17V36H12zM14.485 17h-.028C12.965 17 12 15.888 12 14.499 12 13.08 12.995 12 14.514 12c1.521 0 2.458 1.08 2.486 2.499C17 15.887 16.035 17 14.485 17zM36 36h-5v-9.099c0-2.198-1.225-3.698-3.192-3.698-1.501 0-2.313 1.012-2.707 1.99C24.957 25.543 25 26.511 25 27v9h-5V19h5v2.616C25.721 20.5 26.85 19 29.738 19c3.578 0 6.261 2.25 6.261 7.274L36 36 36 36z"
                  ></path>
                </svg>
              </button>
              <button>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  width="30"
                  height="30"
                  viewBox="0 0 48 48"
                >
                  <path
                    fill="#f4511e"
                    d="M24 4A20 20 0 1 0 24 44A20 20 0 1 0 24 4Z"
                  ></path>
                  <path fill="#fff" d="M34 19H36V27H34z"></path>
                  <path
                    fill="#fff"
                    d="M31 22H39V24H31zM27.815 22.2l-.05-.2H19v3h5.91c-.477 2.837-2.938 5-5.91 5-3.314 0-6-2.686-6-6s2.686-6 6-6c1.5 0 2.868.554 3.92 1.465l2.151-2.106C23.471 15.894 21.34 15 19 15c-4.971 0-9 4.029-9 9s4.029 9 9 9 9-4.029 9-9C28 23.383 27.934 22.782 27.815 22.2z"
                  ></path>
                </svg>
              </button>
              <button>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  width="30"
                  height="30"
                  viewBox="0 0 48 48"
                >
                  <radialGradient
                    id="yOrnnhliCrdS2gy~4tD8ma_Xy10Jcu1L2Su_gr1"
                    cx="19.38"
                    cy="42.035"
                    r="44.899"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop offset="0" stop-color="#fd5"></stop>
                    <stop offset=".328" stop-color="#ff543f"></stop>
                    <stop offset=".348" stop-color="#fc5245"></stop>
                    <stop offset=".504" stop-color="#e64771"></stop>
                    <stop offset=".643" stop-color="#d53e91"></stop>
                    <stop offset=".761" stop-color="#cc39a4"></stop>
                    <stop offset=".841" stop-color="#c837ab"></stop>
                  </radialGradient>
                  <path
                    fill="url(#yOrnnhliCrdS2gy~4tD8ma_Xy10Jcu1L2Su_gr1)"
                    d="M34.017,41.99l-20,0.019c-4.4,0.004-8.003-3.592-8.008-7.992l-0.019-20	c-0.004-4.4,3.592-8.003,7.992-8.008l20-0.019c4.4-0.004,8.003,3.592,8.008,7.992l0.019,20	C42.014,38.383,38.417,41.986,34.017,41.99z"
                  ></path>
                  <radialGradient
                    id="yOrnnhliCrdS2gy~4tD8mb_Xy10Jcu1L2Su_gr2"
                    cx="11.786"
                    cy="5.54"
                    r="29.813"
                    gradientTransform="matrix(1 0 0 .6663 0 1.849)"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop offset="0" stop-color="#4168c9"></stop>
                    <stop
                      offset=".999"
                      stop-color="#4168c9"
                      stop-opacity="0"
                    ></stop>
                  </radialGradient>
                  <path
                    fill="url(#yOrnnhliCrdS2gy~4tD8mb_Xy10Jcu1L2Su_gr2)"
                    d="M34.017,41.99l-20,0.019c-4.4,0.004-8.003-3.592-8.008-7.992l-0.019-20	c-0.004-4.4,3.592-8.003,7.992-8.008l20-0.019c4.4-0.004,8.003,3.592,8.008,7.992l0.019,20	C42.014,38.383,38.417,41.986,34.017,41.99z"
                  ></path>
                  <path
                    fill="#fff"
                    d="M24,31c-3.859,0-7-3.14-7-7s3.141-7,7-7s7,3.14,7,7S27.859,31,24,31z M24,19c-2.757,0-5,2.243-5,5	s2.243,5,5,5s5-2.243,5-5S26.757,19,24,19z"
                  ></path>
                  <circle cx="31.5" cy="16.5" r="1.5" fill="#fff"></circle>
                  <path
                    fill="#fff"
                    d="M30,37H18c-3.859,0-7-3.14-7-7V18c0-3.86,3.141-7,7-7h12c3.859,0,7,3.14,7,7v12	C37,33.86,33.859,37,30,37z M18,13c-2.757,0-5,2.243-5,5v12c0,2.757,2.243,5,5,5h12c2.757,0,5-2.243,5-5V18c0-2.757-2.243-5-5-5H18z"
                  ></path>
                </svg>
              </button>
            </div>
          </div>
          <div></div>
        </div>
      </div>
      <Footer_div />
    </div>
  );
};

export default ContactUs;
