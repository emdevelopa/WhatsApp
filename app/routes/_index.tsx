import type { MetaFunction } from "@remix-run/node";
import {
  Camera,
  MessageCircle,
  Phone,
  PhoneCall,
  SearchIcon,
  Users,
} from "lucide-react";
import { useState } from "react";
import { FaCamera, FaPhone, FaPhoneAlt, FaUsers } from "react-icons/fa";
import { HiDotsVertical } from "react-icons/hi";
import { Chats } from "~/screens/chats";
import { Updates } from "~/screens/Updates";

export const meta: MetaFunction = () => {
  return [
    { title: "WhatsApp Clone" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  const [activeTab, setActiveTab] = useState("Chats");
  const [isChatRoomOpen, setIsChatRoomOpen] = useState(false);

  return (
    <div className="fixed inset-0 flex items-center justify-center w-full h-full text-white">
      <div className="w-full lg:w-[30%] bg-[#030c07] h-full flex flex-col">
        {/* Header */}
        {!isChatRoomOpen && (
          <div className="px-2 py-4 flex justify-between items-center flex-shrink-0">
            <h1 className="text-white font-bold text-[20px]">
              {activeTab === "Chats" && "WhatsApp"}
              {activeTab === "Updates" && "Updates"}
              {activeTab === "Communities" && "Communities"}
              {activeTab === "Calls" && "Calls"}
            </h1>
            {/* Icon Side */}
            <div className="flex items-center gap-4">
              {activeTab === "Chats" && <Camera />}
              {["Updates", "Calls"].includes(activeTab) && (
                <SearchIcon size={20} />
              )}
              <HiDotsVertical />
            </div>
          </div>
        )}
        {/* Screens  */}
        <div className="flex-1 px-2 overflow-y-auto">
          {activeTab === "Chats" && (
            <Chats onChatRoomOpen={setIsChatRoomOpen} />
          )}
          {activeTab === "Updates" && <Updates />}
          {activeTab === "Communities" && <h1>Communities</h1>}
          {activeTab === "Calls" && <h1>Calls</h1>}
        </div>

        {/* Bottom Nav */}
        {!isChatRoomOpen && (
          <div className="border-t border-t-[#80808021] p-4 flex justify-between flex-shrink-0 bg-[#030c07]">
            <div
              onClick={() => setActiveTab("Chats")}
              className="cursor-pointer flex flex-col items-center justify-center"
            >
              <div
                className={`${
                  activeTab === "Chats" ? "bg-[#00ff0029]" : ""
                }   px-5 py-2 rounded-2xl`}
              >
                <MessageCircle className="w-6 h-6  text-white" />
              </div>
              <p className="text-[12px]">Chats</p>
            </div>
            <div
              onClick={() => setActiveTab("Updates")}
              className="cursor-pointer flex flex-col items-center justify-center"
            >
              <div
                className={`${
                  activeTab === "Updates" ? "bg-[#00ff0029]" : ""
                }   px-5 py-2 rounded-2xl`}
              >
                <MessageCircle className="w-6 h-6 text-white" />
              </div>
              <p className="text-[12px]">Updates</p>
            </div>
            <div
              onClick={() => setActiveTab("Communities")}
              className="cursor-pointer flex flex-col items-center justify-center"
            >
              <div
                className={`${
                  activeTab === "Communities" ? "bg-[#00ff0029]" : ""
                }   px-5 py-2 rounded-2xl`}
              >
                <FaUsers size={24} color="white" />
              </div>
              <p className="text-[12px]">Communities</p>
            </div>
            <div
              onClick={() => setActiveTab("Calls")}
              className="cursor-pointer flex flex-col items-center justify-center"
            >
              <div
                className={`${
                  activeTab === "Calls" ? "bg-[#00ff0029]" : ""
                }   px-5 py-2 rounded-2xl`}
              >
                <Phone className="w-6 h-6 text-white" />
              </div>
              <p className="text-[12px]">Calls</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
