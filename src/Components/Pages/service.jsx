import React from "react";
import Header from "../Header/Header";
import service from "../../assests/ourProcess/background.jpg";
import web_development from "../../assests/icons/web-development.png";
import bookmagzine from "../../assests/icons/book-and-magzine.png";
import art from "../../assests/icons/art.png";
import clipboard from "../../assests/icons/clipboard.png";
import search from "../../assests/icons/search.png";
import cloth from "../../assests/icons/cloth.png";
import packagess from "../../assests/icons/package.png";
import business from "../../assests/icons/business.png";
import logo from "../../assests/icons/Mac-Logo.png";
import img_1 from "../../assests/service/img-1.png";
import img_2 from "../../assests/service/img-2.png";
import img_3 from "../../assests/service//img-3.png";
import img_4 from "../../assests/service/img-4.png";
import Footer from "../Footer/footer";

const Service = () => {
  const services = [
    {
      name: "Logo Identity",
      icon: logo,
    },
    {
      name: "Web and App Design",
      icon: web_development,
    },
    {
      name: "Businesses and Advertising",
      icon: business,
    },
    {
      name: "Clothing and Merchandise",
      icon: cloth,
    },
    {
      name: "Art and Illistration",
      icon: art,
    },
    {
      name: "Packages and Label",
      icon: packagess,
    },
    {
      name: "Book and Magzine",
      icon: bookmagzine,
    },
    {
      name: "Others",
      icon: logo,
    },
  ];
  return (
    <div className="w-full h-full">
      <Header />
      <div className="flex h-[115px] mx-auto bg-[#F0F0F0] w-full">
        <div className="flex w-1/3 justify-center items-center text-center">
          <h1 className="text-[20px] uppercase py-[20px] text-navyBlue tracking-widest font-semibold leading-[60px]">
            Design-Services
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
            <span>/ Design-Services</span>
          </div>
        </div>
      </div>
      <div className="relative w-full h-[600px]">
        <img
          src={service}
          alt="service"
          className="w-full h-full object-cover"
        />

        <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center px-4">
          <h2 className="text-4xl font-bold mb-4">
            Good Design brings Good Business
          </h2>
          <button className="bg-white text-black px-6 py-3 rounded-md font-medium hover:bg-gray-200 transition">
            Let's Start Your Design Work
          </button>
        </div>
      </div>

      <div className="w-full">
        <div className="grid grid-cols-4 gap-4 py-5 w-[1210px] mx-auto">
          {services.map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center gap-6 p-4 text-[16px] text-[#262626] font-montserrat text-center"
            >
              <img src={item.icon} alt="" className="w-[30px] h-[30px]" />
              <span className="text-[18px] font-montserrat text-[#262626]">
                {item.name}
              </span>
            </div>
          ))}
        </div>
      </div>
      <div className="flex flex-col w-full items-center justify-center py-4 gap-6 p-4 text-[16px] text-[#262626] font-montserrat text-center">
        <span className="text-[32px] font-montserrat text-[#262626] py-4">
          Get Free Brand/Design Consultancy
        </span>
        <div className="flex gap-5">
          <input
            type="text"
            placeholder="Enter your name"
            name="name"
            id="name"
            className="border border-gray-300 w-[320px] rounded-sm px-4 py-2"
          />

          <input
            type="text"
            placeholder="Enter your email"
            className="border border-gray-300 w-[340px] rounded-sm px-4 py-2"
          />
          <input
            type="number"
            placeholder="Enter your phone number"
            name="phone"
            id="phone"
            className="border border-gray-300 w-[320px] rounded-sm px-4 py-2"
          />
          <button className="bg-[#2980B9] text-white px-8 py-2 rounded-sm hover:bg-[#424447] hover:text-[#fff]">
            Submit
          </button>
        </div>
      </div>
      <div className="flex w-[1210px] mx-auto">
        <div className="flex flex-col w-1/2 gap-3 justify-end">
          <span className="text-[#316A9D] text-[32px] font-googleProductSans font-semibold">
            Logo & Identity Design
          </span>
          <p className=" text-[16px] text-black font-googleProductSans">
            The logo is the face of your Brand. We have the most talented and
            experienced logo designers, who approach every logo design project
            with an inspired dedication with a complete thought process. Being a
            focus based quality branding agency in Pakistan, we have been
            designing logos and brand identities for many reputed companies and
            that’s something we are good at.
          </p>
        </div>
        <div className="flex flex-col w-1/2">
          <img
            src={img_1}
            alt="img_1"
            className="transition-transform duration-[1500ms] ease-in-out transform hover:scale-110"
          />
        </div>
      </div>
      <div className="flex w-[1210px] mx-auto">
        <div className="flex flex-col w-1/2">
          <img
            src={img_2}
            alt="img_2"
            className="transition-transform duration-[1500ms] ease-in-out transform hover:scale-110"
          />
        </div>
        <div className="flex flex-col w-1/2 gap-3 justify-end">
          <span className="text-[#316A9D] text-[32px] font-googleProductSans font-semibold">
            Print Design
          </span>
          <p className=" text-[16px] text-black font-googleProductSans">
            Your printed marketing material can make a significant impact on
            your company’s image. We provide quality print design services to
            make sure that your business cards, letterheads, envelopes,
            brochures, and other marketing materials stand out in every sales
            meeting, face-to-face encounters and direct mailings.
          </p>
        </div>
      </div>
      <div className="flex w-[1210px] mx-auto">
        <div className="flex flex-col w-1/2 gap-3 justify-end">
          <span className="text-[#316A9D] text-[32px] font-googleProductSans font-semibold">
            Web Design (UX/UI)
          </span>
          <p className=" text-[16px] text-black font-googleProductSans">
            From B2B to B2C websites, Buraqsys Studio provides quality web, UI
            and UX design services that are pixel perfect and uses a responsive
            design approach to make it work on all devices and make your website
            stand out from your competitors. Our website design services can
            help you boost more revenue, greater brand engagement and higher
            conversions with measurable results.
          </p>
        </div>
        <div className="flex flex-col w-1/2">
          <img
            src={img_3}
            alt="img_3"
            className="transition-transform duration-[1500ms] ease-in-out transform hover:scale-110"
          />
        </div>
      </div>
      <div className="flex w-[1210px] mx-auto pb-5">
        <div className="flex flex-col w-1/2">
          <img
            src={img_4}
            alt="img_4"
            className="transition-transform duration-[1500ms] ease-in-out transform hover:scale-110"
          />
        </div>
        <div className="flex flex-col w-1/2 gap-3 justify-end">
          <span className="text-[#316A9D] text-[32px] font-googleProductSans font-semibold">
            Brand & Stationery Design
          </span>
          <p className=" text-[16px] text-black font-googleProductSans">
            We offer a complete range of quality brand identity design services,
            stationery design services, company rebranding services, brand
            guidelines services, and branding consultation. Defining your
            brand’s identity is key in marketing, therefore our dedicated team
            ensures that they build out your brand visually. Buraqsys Studio is
            a creative brand agency you will ever need to stand out your brand
            image.
          </p>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center max-h-[700px] max-w-full bg-[#DDDDDD]">
        <span className="text-[#316A9D] text-[68px] font-montserrat tracking-widest uppercase">
          Our Process
        </span>

        {/* Step container */}
        <div className="flex gap-[150px] justify-center items-center h-[400px] w-full relative">
          {/* Step 1 */}
          <div className="relative">
            <span className="text-[300px] text-white z-0">1.</span>
            <span className="absolute top-[120px] left-1/2 -translate-x-1/2 translate-y-[100px] text-[#316A9D] text-xl font-bold z-10">
              RESEARCH
            </span>
          </div>

          {/* Step 2 */}
          <div className="relative">
            <span className="text-[300px] text-white z-0">2.</span>
            <span className="absolute top-[120px]  left-1/2 -translate-x-1/2 translate-y-[100px] text-[#316A9D] text-xl font-bold z-10">
              PLANNING
            </span>
          </div>

          {/* Step 3 */}
          <div className="relative">
            <span className="text-[300px] text-white z-0">3.</span>
            <span className="absolute top-[120px]  left-1/2 -translate-x-1/2 translate-y-[100px] text-[#316A9D] text-xl font-bold z-10">
              EXECUTION
            </span>
          </div>

          {/* Step 4 */}
          <div className="relative">
            <span className="text-[300px] text-white z-0">4.</span>
            <span className="absolute top-[120px]  left-1/2 -translate-x-1/2 translate-y-[100px] text-[#316A9D] text-xl font-bold z-10">
              PERFORMANCE
            </span>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Service;
