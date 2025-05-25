import React from "react";
import Header from "../Header/Header";
import Footer_div from "../Footer/footer";
import image_1 from "../../assests/team/1st.jpg";
import image_2 from "../../assests/team/2.jpg";
import image_3 from "../../assests/team/3.jpg";
import image_4 from "../../assests/team/4.jpg";
import image_5 from "../../assests/team/5.jpg";
import image_6 from "../../assests/team/6.jpg";
import image_7 from "../../assests/team/7.jpg";
import image_8 from "../../assests/team/8.jpg";
import image_9 from "../../assests/team/9.jpg";
import image_10 from "../../assests/team/10.jpg";
import image_11 from "../../assests/team/11.jpg";
import image_12 from "../../assests/team/12.jpg";
import image_13 from "../../assests/team/13.jpg";
import image_14 from "../../assests/team/14.jpg";
import image_15 from "../../assests/team/15.jpg";
import image_16 from "../../assests/team/16.jpg";
import image_17 from "../../assests/team/17.jpg";
import image_18 from "../../assests/team/18.jpg";
import image_19 from "../../assests/team/19.jpg";
import image_20 from "../../assests/team/20.jpg";

const MyTeam = () => {
  const img_array = [
    {
      image: image_1,
      name: "Amina Khan",
      description: "Chief Strategy Officer",
    },
    {
      image: image_2,
      name: "Zain Raza",
      description: "Digital Marketing Lead",
    },
    {
      image: image_3,
      name: "Sana Javed",
      description: "Creative Director",
    },
    {
      image: image_4,
      name: "Sadia Khan",
      description: "Lead Frontend Engineer",
    },
    {
      image: image_5,
      name: "Fatima Noor",
      description: "Brand Manager",
    },
    {
      image: image_6,
      name: "Omar Siddiqui",
      description: "Head of Product",
    },
    {
      image: image_7,
      name: "Maya Ali",
      description: "UI/UX Designer",
    },
    {
      image: image_8,
      name: "Tariq Mehmood",
      description: "Full Stack Developer",
    },
    {
      image: image_9,
      name: "Areeba Shah",
      description: "Community Manager",
    },
    {
      image: image_10,
      name: "Rayan Malik",
      description: "SEO Specialist",
    },
    {
      image: image_11,
      name: "Shanas Akhtar",
      description: "Marketing Executive",
    },
    {
      image: image_12,
      name: "Bilal Qureshi",
      description: "Backend Developer",
    },
    {
      image: image_13,
      name: "Saleem Akhtar",
      description: "Content Strategist",
    },
    {
      image: image_14,
      name: "Imran Haider",
      description: "Data Analyst",
    },
    {
      image: image_15,
      name: "Aleena Rauf",
      description: "Copywriter",
    },
    {
      image: image_16,
      name: "Zeeshan Ali",
      description: "Software Engineer",
    },
    {
      image: image_17,
      name: "Haris Ahmed",
      description: "Operations Manager",
    },
    {
      image: image_18,
      name: "Asim Farooq",
      description: "Project Manager",
    },
    {
      image: image_19,
      name: "Hadi Mir",
      description: "PR Specialist",
    },
    {
      image: image_20,
      name: "Yusra Khan",
      description: "Technical Lead",
    },
  ];

  return (
    <div>
      <Header />
      <div className="flex h-[115px] mx-auto bg-[#F0F0F0] w-full">
        <div className="flex w-1/3 justify-center items-center text-center">
          <h1 className="text-[20px] uppercase py-[20px] text-navyBlue tracking-widest font-semibold leading-[60px]">
            Team
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
            <span>/ Team</span>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-3 gap-6 justify-center items-start w-[1300px] h-full mx-auto">
        {img_array.map((item, index) => (
          <div
            key={index}
            className="relative overflow-hidden group w-[400px] h-[400px] p-4 shadow-lg rounded-lg bg-white text-center"
          >
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-2/3 object-cover rounded-md transform transition-all duration-500 ease-in-out group-hover:-translate-y-2 group-hover:shadow-2xl"
            />

            <h1 className="mt-4 text-xl font-semibold uppercase pt-6">
              {item.name}
            </h1>
            <p className="text-gray-600 text-sm uppercase">
              {item.description}
            </p>
          </div>
        ))}
      </div>
      <Footer_div />
    </div>
  );
};

export default MyTeam;
