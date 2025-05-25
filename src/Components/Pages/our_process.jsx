import React from "react";
import Header from "../Header/Header";
import our_process from "../../assests/ourProcess/1.jpg";
import our_process2 from "../../assests/ourProcess/2.jpg";
import Discover from "../../assests/ourProcess/blueBackground 2.jpg";
import image_2 from "../../assests/ourProcess/solid-color/1.jpg";
import image_3 from "../../assests/ourProcess/solid-color/2.jpg";
import image_1 from "../../assests/ourProcess/solid-color/3.jpg";
import image_4 from "../../assests/ourProcess/solid-color/4.jpg";
import image_5 from "../../assests/ourProcess/solid-color/5.jpg";
import plan1 from "../../assests/ourProcess/plan1.jpg";
import Footer_div from "../Footer/footer";

const OurProcess = () => {
  return (
    <div className="w-full h-full">
      <Header />
      <div className="flex h-[115px] mx-auto bg-[#F0F0F0] w-full">
        <div className="flex w-1/3 justify-center items-center text-center">
          <h1 className="text-[20px] uppercase py-[20px] text-navyBlue tracking-widest font-semibold leading-[60px]">
            Our Process
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
            <span>/ Our Process</span>
          </div>
        </div>
      </div>
      <div className="relative w-full h-[600px]">
        <img
          src={image_4}
          alt="service"
          className="w-full h-full object-cover filter"
        />

        <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center px-4">
          <h2 className="text-[72px] font-montserrat font-bold mb-4">
            How we work.
          </h2>
          <span className="text-white font-montserrat text-[22px] px-6 py-3 rounded-md font-medium transition">
            Small teams working on big challenges in honest collaboration with
            our clients.
          </span>
        </div>
      </div>
      <div className="relative w-full h-[600px]">
        <img
          src={image_1}
          alt="Discover"
          className="w-full h-full object-cover filter"
        />

        <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center px-4">
          <h2 className="text-[72px] font-montserrat font-bold mb-4">
            How we work.
          </h2>
          <span className="text-white font-montserrat text-[22px] px-6 py-3 rounded-md font-medium transition">
            Small teams working on big challenges in honest collaboration with
            our clients.
          </span>
        </div>
      </div>
      <div className="relative w-full h-[600px]">
        <img
          src={image_2}
          alt="Discover"
          className="w-full h-full object-cover filter"
        />

        <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center px-4">
          <h2 className="text-[72px] font-montserrat font-bold mb-4">Plan</h2>
          <span className="text-white font-montserrat w-[700px] text-[22px] px-6 py-3 rounded-md font-medium transition">
            Buraqsys Studio possesses one of the most extensive planning and
            strategy formulation capabilities in the Pakistani digital media
            agency. The comprehensive planning process at Buraqsys Studio turns
            research into a detailed set of consumer insights. From this
            research we project user personas and anticipate outcomes of various
            scenarios. The plan is highly useful since it contributes
            information about the strategic vision of digital marketing efforts.
          </span>
        </div>
      </div>
      <div className="relative w-full h-[600px]">
        <img
          src={image_3}
          alt="Discover"
          className="w-full h-full object-cover filter"
        />

        <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center px-4">
          <h2 className="text-[72px] font-montserrat font-bold mb-4">
            Create and Iterate
          </h2>
          <span className="text-white font-montserrat w-[700px] text-[22px] px-6 py-3 rounded-md font-medium transition">
            The third phase is development of creative concepts to support the
            overall marketing strategy of the organization. This is not a
            one-time activity, rather it is an iterative approach involving
            toying with different alternatives, throwing out those elements
            which does not seem to click (sometimes even starting over again)
            until we come up with a creative solution which just fits the
            strategy and objectives.
          </span>
        </div>
      </div>
      <div className="relative w-full h-[600px]">
        <img
          src={image_4}
          alt="Discover"
          className="w-full h-full object-cover filter"
        />

        <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center px-4">
          <h2 className="text-[72px] font-montserrat font-bold mb-4">
            Implement
          </h2>
          <span className="text-white font-montserrat w-[700px] text-[22px] px-6 py-3 rounded-md font-medium transition">
            It is the implementation phase when the creative concept that has
            been refined the previous stage is executed into a full-fledged
            digital marketing campaign. Implementation is not merely an isolated
            action. Implementation comprises of a complex set of work-streams
            during which interaction takes place between design, technology,
            content and production.
          </span>
        </div>
      </div>
      <div className="relative w-full h-[600px]">
        <img
          src={image_5}
          alt="Discover"
          className="w-full h-full object-cover filter"
        />

        <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center px-4">
          <h2 className="text-[72px] font-montserrat font-bold mb-4">
            Measure
          </h2>
          <span className="text-white font-montserrat w-[700px] text-[22px] px-6 py-3 rounded-md font-medium transition">
            Buraqsys Studio’s team put a lot of efforts into ensuring that every
            single activity that has been carried out by us for our clients is
            measures through Key Performance Indicators. We need to be sure that
            the marketing spend and efforts actually bear results for the
            client. This measuring activity should not be difficult and time
            consuming. For this reason, we make interactive online dashboards
            for our clients which are easy to use. Thus, our customers are
            empowered to judge the effectiveness of our contribution. Buraqsys
            Studio’s work also includes evaluating customer relationship
            management through which customer data profiles to create much
            better content and to adopt much better approach in future
            campaigns.
          </span>
        </div>
      </div>

      <div
        className="relative w-full h-[600px] shadow-xl"
        // style={{ boxShadow: "0 0 50px #C62A25" }}
      >
        <img
          src={image_3}
          alt="Discover"
          className="w-full h-full object-cover"
        />

        <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center px-4">
          <h2 className="text-[72px] font-montserrat font-bold mb-4">Evolve</h2>
          <span className="text-white font-montserrat w-[700px] text-[22px] px-6 py-3 rounded-md font-medium transition">
            Once measurement of digital marketing campaigns has been carried
            out, positive actions are taken to further strengthen the campaign
            to meet predefined objectives. Even more importantly, campaigns
            evolve according to the changes taking place in the external
            environment so that performance of digital marketing can be enriched
            over time. By continuously measuring and evolving the campaigns, the
            ROI on marketing efforts is improved in a comprehensive manner over
            time.
          </span>
        </div>
      </div>
      <Footer_div />
    </div>
  );
};

export default OurProcess;
