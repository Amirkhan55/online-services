import React from "react";
import client1 from "../../assests/clients/1.svg";
import client2 from "../../assests/clients/2.svg";
import client3 from "../../assests/clients/3.jpg";
import client4 from "../../assests/clients/4.svg";
import client5 from "../../assests/clients/5.svg";
import client6 from "../../assests/clients/6.svg";
import client7 from "../../assests/clients/7.jpg";
import client8 from "../../assests/clients/8.svg";
import client9 from "../../assests/clients/9.svg";
import client10 from "../../assests/clients/10.svg";
import client11 from "../../assests/clients/11.svg";
import client12 from "../../assests/clients/12.svg";
import client13 from "../../assests/clients/13.svg";
import client14 from "../../assests/clients/14.svg";
import client15 from "../../assests/clients/15.svg";
import client16 from "../../assests/clients/16.svg";
import client17 from "../../assests/clients/17.svg";
import ClientCard from "../client-card/client_card";

const Clients = () => {
  const clients = [
    { name: "client1", image: client1 },
    { name: "client2", image: client2 },
    { name: "client3", image: client3 },
    { name: "client4", image: client4 },
    { name: "client5", image: client5 },
    { name: "client6", image: client6 },
    { name: "client7", image: client7 },
    { name: "client8", image: client8 },
    { name: "client9", image: client9 },
    { name: "client10", image: client10 },
    { name: "client11", image: client11 },
    { name: "client12", image: client12 },
    { name: "client13", image: client13 },
    { name: "client14", image: client14 },
    { name: "client15", image: client15 },
    { name: "client16", image: client16 },
    { name: "client17", image: client17 },
  ];

  return (
    <div className="w-full px-4 flex flex-col items-center py-10">
      <h1 className="text-[36px] md:text-[50px] text-[#102953] tracking-widest font-bold leading-[60px] text-center mb-8">
        Our Clients
      </h1>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 place-items-center max-w-[1200px] w-full">
        {clients.map((client) => (
          <ClientCard
            key={client.name}
            image={client.image}
            name={client.name}
            className="w-[100px] h-auto object-contain transition duration-300"
          />
        ))}
      </div>
    </div>
  );
};

export default Clients;
