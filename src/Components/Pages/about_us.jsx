import React from "react";
import about from "../../assests/aboutus.jpg";
import about_1 from "../../assests/about/philosophy-1.webp";
import about_2 from "../../assests/about/vision-1.webp";
import about_3 from "../../assests/about/mission-1.webp";
import Footer from "../Footer/footer";
import Header from "../Header/Header";

const About = () => {
  return (
    <div className="h-full w-full">
      <Header />
      <div className="flex h-[115px] mx-auto bg-[#F0F0F0] w-full">
        <div className="flex w-1/3 justify-center items-center text-center">
          <h1 className="text-[20px] uppercase py-[20px] text-navyBlue tracking-widest font-bold leading-[60px]">
            About Us
          </h1>
        </div>
        <div className="flex w-2/3 justify-center items-center text-center">
          <div className="flex gap-2 text-[18px] text-navyBlue tracking-widest">
            <a href="/" className="text-[#FF004F] uppercase">
              Home
            </a>
            <span>/ ABOUT US</span>
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center">
        <img src={about} className="w-full h-[600px]" alt="About Us" />

        <div className="flex flex-col justify-center items-center w-[1300px] mx-auto">
          <h1 className="text-[50px] leading-[60px] font-montserrat pt-[80px] pb-[40px] text-[#000000] tracking-widest font-bold uppercase">
            About Us
          </h1>
          <span className="text-[#000000] leading-[30px] w-[1000px] text-[18px] font-montserrat  text-center">
            Buraqsys STUDIO is a digital marketing company. We have been
            providing e-business and other IT solutions to several clients. With
            a team of highly qualified professionals, Buraqsys STUDIO provides
            IT consultancy services. Our clients are constantly trying to
            improve their businesses. They are small, medium, and large in size.
            They know their business best. They face complex challenges. They
            want to migrate to the most rational e-business solutions given
            their constructs. They want continuity of operations. Our firm
            delivers services that enable our customers to improve their
            planning, development, designing, and operations. We at Buraqsys are
            their partners working side-by-side at strategic, tactical, and
            operational levels providing innovative, honest, objective, and
            pragmatic advice. Our solutions combine the discipline of a process
            with the power of innovation. We have the dedication and creative
            know-how to meet your challenges head-on and exceed your
            expectation. Our main focus is you, our client. Each endeavor is
            approached as a partnership enabling us to preserve your goals while
            leveraging our experience to determine the most efficient project
            strategy.
          </span>
        </div>
        <div className="flex mt-10 mb-5">
          <div className="flex flex-col w-[385px] h-[428px] items-center shadow-[rgba(50,50,93,0.25)_0px_50px_100px_-20px,rgba(0,0,0,0.3)_0px_30px_60px_-30px,rgba(10,37,64,0.35)_0px_-2px_6px_0px_inset]">
            <img
              src={about_1}
              alt="about_1"
              className="w-[150px] h-[150px] py-2"
            />
            <span className="text-[29px] font-montserrat py-4">
              OUR PHILOSOPHY
            </span>
            <p className="px-6 text-[#000000] text-[16px] font-montserrat text-center">
              We are a thriving Advertising agency in Pakistan; our philosophy
              revolves around the provision of professional and ethical services
              to our esteemed clients. We have established the best team which
              is capable of providing creative solutions to your advertising
              needs.
            </p>
          </div>
          <div className="flex flex-col w-[385px] h-[428px] items-center shadow-[rgba(50,50,93,0.25)_0px_50px_100px_-20px,rgba(0,0,0,0.3)_0px_30px_60px_-30px,rgba(10,37,64,0.35)_0px_-2px_6px_0px_inset]">
            <img
              src={about_2}
              alt="about_1"
              className="w-[150px] h-[150px] py-2"
            />
            <span className="text-[29px] font-montserrat py-4">OUR VISION</span>
            <p className="px-6 text-[#000000] text-[16px] font-montserrat text-center">
              Partnering in growth and prosperity is essential to us. We have
              worked really hard to bring the best set of individuals together
              who are capable of understanding the clients’ needs and designing
              their way to the successful future.
            </p>
          </div>
          <div className="flex flex-col w-[385px] h-[428px] items-center shadow-[rgba(50,50,93,0.25)_0px_50px_100px_-20px,rgba(0,0,0,0.3)_0px_30px_60px_-30px,rgba(10,37,64,0.35)_0px_-2px_6px_0px_inset]">
            <img
              src={about_3}
              alt="about_1"
              className="w-[150px] h-[150px] py-2"
            />
            <span className="text-[29px] font-montserrat py-4">
              OUR MISSION
            </span>
            <p className="px-6 text-[#000000] text-[16px] font-montserrat text-center">
              To revolutionize advertising and marketing by thinking outside the
              box. We transform ideas into reality! We aspire to transform the
              traditional ways of advertising and work alongside our valuable
              clients to ensure their business growth keeping in mind the
              quality of work.
            </p>
          </div>
        </div>
        <div className="flex w-full">
          <div className="flex flex-col bg-[#222020] text-[#FFFFFF] text-center justify-center w-1/2">
            <span className="text-[51px] pt-[90px] pb-5 font-bold">
              Capabilities
            </span>
            <p className="flex mx-auto w-[390px] h-[190px] text-[16px] font-googleProductSans">
              We consolidate digital strategy, UX and design to help customers
              think past normal. We work with businesses of all shapes and
              sizes, from all sides of the globe. We take a shot at getting
              better every time. We’ve helped organizations win hearts and
              psyche. We craft digital experiences to help our clients grow.
            </p>
            <button className="text-[18px] font-montserrat uppercase w-[200px] h-[48px] bg-[#316A9D] mx-auto rounded-[4px] mb-[150px]">
              Know More
            </button>
          </div>
          <div className="flex flex-col bg-[#316A9D] text-[#FFFFFF] text-center justify-center w-1/2">
            <span className="text-[51px] pt-[90px] pb-5 font-bold">
              Process
            </span>
            <p className="flex mx-auto w-[390px] h-[190px] text-[16px] font-googleProductSans">
              Buraqsys Studio possesses one of the most extensive planning and
              strategy formulation capabilities in the Pakistani digital media
              agencies. From this research we project user personas and
              anticipate outcomes of various scenarios. The plan is highly
              useful since it contributes information about the strategic vision
              of digital marketing efforts.
            </p>
            <button className="text-[18px] font-montserrat uppercase w-[200px] h-[48px] bg-[#222020] mx-auto rounded-[4px] mb-[150px]">
              Our Approach
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default About;
