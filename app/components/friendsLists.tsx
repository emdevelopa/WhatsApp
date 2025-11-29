import {
  CheckCheck,
  PhoneIncoming,
  Pin,
  PinIcon,
  Search,
  SearchIcon,
} from "lucide-react";
import { FaPhoneAlt, FaUser } from "react-icons/fa";
import { ChatScreenFilter } from "~/components/chatScreenFilter";
import { useState } from "react";

const friends = [
  {
    name: "My Number (You)",
    time: "22:30",
    last_msg: "RemoteSigned",
    avatarcolor: "black",
    avatar: "",
    seen: true,
    pinned: true,
  },
  {
    name: "❤️❤️❤️",
    time: "21:15",
    last_msg: "Oh, okay luv",
    avatar: <FaUser color="#ff5e00aa" />,
    avatarcolor: "red",
    seen: false,
    pinned: true,
  },
  {
    name: "Simi🏀🏀🏀",
    time: "20:45",
    last_msg: "Going PRO🏀",
    avatar: <p className="text-[#00aeff] font-bold">S</p>,
    avatarcolor: "blue",
    seen: false,
    pinned: false,
  },
  {
    name: "Kyrie Irving🏀",
    time: "07:45",
    last_msg: "Yoooooooo  Fam",
    avatar: <p className="text-[#00ff11] font-bold">K</p>,
    avatarcolor: "green",
    seen: false,
    pinned: false,
  },
  {
    name: "MUM",
    time: "15:39",
    last_msg: (
      <span className="flex items-center gap-2">
        <PhoneIncoming size={14} /> Voice call
      </span>
    ),
    avatar: <p className="text-[#0004ff] font-bold">M</p>,
    avatarcolor: "#0004ff",
    seen: false,
    pinned: false,
  },
  {
    name: "Dave💻💪",
    time: "16:05",
    last_msg: "LOL🤣 Na man",
    avatar: <p className="text-[#ff0066] font-bold">D</p>,
    avatarcolor: "pink",
    seen: false,
    pinned: false,
  },
  {
    name: "Patrick🏀🏀🏀",
    time: "06:00",
    last_msg: "Bruva Hoops🏀 today. ",
    avatar: <p className="text-[#a52a2a] font-bold">P</p>,
    avatarcolor: "brown",
    seen: false,
    pinned: false,
  },
  {
    name: "Aunty Tayo",
    time: "07:45",
    last_msg: "Received✅ Thank you so much ma'am",
    avatar: <p className="text-[#7f6063] font-bold">AT</p>,
    avatarcolor: "#7f6063",
    seen: false,
    pinned: false,
  },
];

const getBgClass = (color: string | undefined) => {
  switch (color) {
    case "red":
      return "bg-[#ff5e0041]";
    case "blue":
      return "bg-[#00aeff35]";
    case "green":
      return "bg-[#00ff1135]";
    case "black":
      return "bg-black";
    case "pink":
      return "bg-[#ff006635]";
    case "#7f6063":
      return "bg-[#7f606335]";
    case "#0004ff":
      return "bg-[#0004ff35]";
    case "brown":
      return "bg-[#a52a2a35]";

    default:
      return "bg-black";
  }
};

export function FriendList({
  onFriendSelect,
}: {
  onFriendSelect?: (friend: (typeof friends)[0]) => void;
}) {
  const handleFriendClick = (friend: (typeof friends)[0]) => {
    if (onFriendSelect) {
      onFriendSelect(friend);
    }
  };

  return (
    <>
      {friends.map((friend, index) => (
        <div
          key={index}
          onClick={() => handleFriendClick(friend)}
          className="cursor-pointer hover:bg-[#ffffff0a] p-2 rounded transition"
        >
          <div className="flex items-center gap-4">
            <div className="w-[10%]]">
              <div
                className={`${getBgClass(
                  friend.avatarcolor
                )} w-[3em] h-[3em] flex items-center justify-center rounded-full`}
              >
                {friend.avatar}
              </div>
            </div>
            <div className="w-[90%]">
              <div className="flex justify-between">
                <h2 className="text-[14px]">{friend.name}</h2>
                <p className="text-[14px] text-gray-400">{friend.time}</p>
              </div>
              <div className="flex justify-between">
                <div className="flex items-center   gap-2">
                  {/* Show seen icon for all except MUM */}
                  {friend.name !== "MUM" && (
                    <CheckCheck
                      color={friend.seen ? "#47c0f8" : "gray"}
                      size={20}
                    />
                  )}
                  <p className="text-[12px] text-gray-400 truncate overflow-hidden whitespace-nowrap">
                    {friend.last_msg}
                  </p>
                </div>
                {friend.pinned && <PinIcon color="gray" size={20} />}
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}
