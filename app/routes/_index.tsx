import type { MetaFunction } from "@remix-run/node";
import { Camera, MessageCircle, PhoneCall, Users } from "lucide-react";
import { useState } from "react";
import { FaCamera, FaPhone, FaUsers } from "react-icons/fa";
import { HiDotsVertical } from "react-icons/hi";
import { Chats } from "~/screens/chats";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  const [activeTab, setActiveTab] = useState("Chats");

  return (
    <div className="fixed inset-0 flex items-center justify-center w-full h-full text-white">
      <div className="w-full lg:w-[30%] bg-[#030c07] h-full flex flex-col">
        {/* Header */}
        <div className="p-4 flex justify-between items-center flex-shrink-0">
          <h1 className="text-white font-bold text-[20px]">WhatsApp</h1>
          {/* Icon Side */}
          <div className="flex items-center gap-4">
            {activeTab === "Chats" && <Camera />}
            <HiDotsVertical />
          </div>
        </div>
        {/* Screens  */}
        <div className="flex-1 px-4 overflow-y-auto">
          {activeTab === "Chats" && <Chats />}
        </div>

        {/* Bottom Nav */}
        <div className="border-t border-t-[#80808021] p-4 flex justify-between flex-shrink-0 bg-[#030c07]">
          <div
            onClick={() => setActiveTab("Chats")}
            className="cursor-pointer flex flex-col items-center justify-center"
          >
            <MessageCircle className="w-6 h-6 text-white" />
            <p>Chats</p>
          </div>
          <div
            onClick={() => setActiveTab("Updates")}
            className="cursor-pointer flex flex-col items-center justify-center"
          >
            <MessageCircle className="w-6 h-6 text-white" />
            <p>Updates</p>
          </div>
          <div
            onClick={() => setActiveTab("Communities")}
            className="cursor-pointer flex flex-col items-center justify-center"
          >
            <FaUsers size={24} color="white" />
            <p>Communities</p>
          </div>
          <div
            onClick={() => setActiveTab("Calls")}
            className="cursor-pointer flex flex-col items-center justify-center"
          >
            <PhoneCall className="w-6 h-6 text-white" />
            <p>Chats</p>
          </div>
        </div>
      </div>
    </div>
  );
}

