import { useState } from "react";
import { Search, SearchIcon } from "lucide-react";
import { ChatScreenFilter } from "~/components/chatScreenFilter";
import { FriendList } from "~/components/friendsLists";
import { ChatRoom } from "~/screens/chatRoom";

const filterOptions = ["All", "Unread", "Favourites", "Groups"] as const;

export function Chats({
  onChatRoomOpen,
}: {
  onChatRoomOpen?: (isOpen: boolean) => void;
}) {
  const [selectedFriend, setSelectedFriend] = useState(null);

  const handleFriendSelect = (friend: any) => {
    setSelectedFriend(friend);
    onChatRoomOpen?.(true);
  };

  const handleBack = () => {
    setSelectedFriend(null);
    onChatRoomOpen?.(false);
  };

  if (selectedFriend) {
    return <ChatRoom friend={selectedFriend} onBack={handleBack} />;
  }

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
      <div className="mt-8 flex flex-col gap-8">
        <FriendList onFriendSelect={handleFriendSelect} />
      </div>
    </div>
  );
}
