import { CheckCheck, Pin, PinIcon, Search, SearchIcon } from "lucide-react";
import { FaUser } from "react-icons/fa";
import { ChatScreenFilter } from "~/components/chatScreenFilter";

const friends = [
  {
    name: "My Number (You)",
    time: "22:30",
    last_msg: "RemoteSigned",
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
];

const getBgClass = (color: string | undefined) => {
  switch (color) {
    case "red":
      return "bg-[#ff5e0041]";
    case "blue":
      return "bg-[#00aeff56]";
    case "green":
      return "bg-green-500";
    default:
      return "bg-black";
  }
};
  
export function FriendList() {
  return (
    <>
      {friends.map((friend, index) => (
        <>
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
                <h2>{friend.name}</h2>
                <p className="text-[14px] text-gray-400">{friend.time}</p>
              </div>
              <div className="flex justify-between">
                <div className="flex items-center   gap-2">
                  <CheckCheck
                    color={friend.seen ? "#47c0f8" : "gray"}
                    size={20}
                  />
                  <p className="text-[14px] text-gray-400">{friend.last_msg}</p>
                </div>
                {friend.pinned && <PinIcon color="gray" size={20} />}
              </div>
            </div>
          </div>
        </>
      ))}
    </>
  );
}
