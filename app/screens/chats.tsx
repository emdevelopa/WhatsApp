import { Search, SearchIcon } from "lucide-react";
import { ChatScreenFilter } from "~/components/chatScreenFilter";
import { FriendList } from "~/components/friendsLists";


const filterOptions = ["All", "Unread", "Favourites", "Groups"] as const;

export function Chats() {
  return (
    <div>
      <div className="bg-[#2727274b] rounded-3xl p-3 flex items-center gap-2">
        <SearchIcon size={20} />
        <input
          type="text"
          placeholder="Ask Meta AI or Search"
          className="bg-transparent w-full"
        />
      </div>
      {/* Filter */}
      <div className="flex items-center gap-2 mt-4 w-full overflow-x-auto">
        <ChatScreenFilter filterOptions={[...filterOptions]} />
      </div>
      {/* FriendList */}
      <div className="mt-8 flex flex-col gap-6">
        <FriendList />
      </div>
    </div>
  );
}
