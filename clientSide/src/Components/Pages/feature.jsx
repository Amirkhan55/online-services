import React, { Component } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import SystemSecurityUpdateGoodIcon from "@mui/icons-material/SystemSecurityUpdateGood";
import SpeakerNotesIcon from "@mui/icons-material/SpeakerNotes";
import WifiIcon from "@mui/icons-material/Wifi";
import LeakAddIcon from "@mui/icons-material/LeakAdd";

import Card from "../cart/card";

const cartData = [
  {
    icon: <MenuIcon />,
    title: "Business Strategy",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  },
  {
    icon: <MenuBookIcon />,
    title: "App Development",
    description:
      "It uses a dictionary of over 200 Latin words, combined with a handful of model sentence.",
  },
  {
    icon: <SystemSecurityUpdateGoodIcon />,
    title: "Content Writing",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  },
  {
    icon: <SpeakerNotesIcon />,
    title: "Mobile App Development",
    description:
      "I throw myself down among the tall grass by the stream as I lie close to the earth.",
  },
  {
    icon: <WifiIcon />,
    title: "CEO Marketing",
    description:
      "There are many variations of passages of Lorem Ipsum available, but the majority.",
  },
  {
    icon: <LeakAddIcon />,
    title: "Personal Portfolio April",
    description:
      "Always free from repetition, injected humour, or non-characteristic words etc.",
  },
];

const Feature = () => {
  return (
    <div className="flex flex-col w-full bg-[#222428] mt-[100px] text-white  font-robotoCondensed items-center justify-center">
      <span className="subtitle mt-[10px] text-[#FF004F] tracking-widest text-[14px] uppercase text-left justify-left item-left max-w-[1100px] w-full">
        Features
      </span>
      <span className="title text-[##C4CFDE] tracking-widest py-4 font-bold text-[50px] leading-[60px] uppercase text-left justify-left item-left max-w-[1100px] w-full">
        What I Do
      </span>
      <div className="grid grid-cols-3 gap-8 py-4 max-w-[1330px] w-full">
        {cartData.map((item, index) => (
          <Card
            key={index}
            icon={item?.icon}
            title={item?.title}
            description={item?.description}
          />
        ))}
      </div>
      <span className="text-[#FF004F] max-h-[100px] max-w-[700px] h-full card_shadow w-full"></span>
    </div>
  );
};

export default Feature;
