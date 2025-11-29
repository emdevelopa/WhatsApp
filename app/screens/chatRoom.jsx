import { ArrowLeft, Send } from "lucide-react";
import { useState } from "react";

export function ChatRoom({ friend, onBack }) {
  const [messages, setMessages] = useState([
    { id: 1, text: "Hey! How are you?", sender: "friend", time: "10:30" },
    {
      id: 2,
      text: "I'm doing great, thanks for asking!",
      sender: "user",
      time: "10:31",
    },
    {
      id: 3,
      text: "That's awesome! What have you been up to?",
      sender: "friend",
      time: "10:32",
    },
    {
      id: 4,
      text: "Just working on some projects",
      sender: "user",
      time: "10:33",
    },
  ]);
  const [inputValue, setInputValue] = useState("");

  const handleSendMessage = () => {
    if (inputValue.trim()) {
      const newMessage = {
        id: messages.length + 1,
        text: inputValue,
        sender: "user",
        time: new Date().toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        }),
      };
      setMessages([...messages, newMessage]);
      setInputValue("");
    }
  };

  return (
    <div className="flex flex-col h-full">
      {/* Header */}
      <div className="flex items-center gap-4 pb-4 px-4 border-b border-b-[#80808021]">
        <button onClick={onBack} className="hover:bg-[#ffffff0a] p-2 rounded">
          <ArrowLeft size={24} />
        </button>
        <div>
          <h2 className="text-[16px] font-bold">{friend.name}</h2>
          <p className="text-[12px] text-gray-400">Active now</p>
        </div>
      </div>

      {/* Messages Area */}
      <div className="flex-1 overflow-y-auto py-4 px-4 flex flex-col gap-4">
        {messages.map((message) => (
          <div
            key={message.id}
            className={`flex ${
              message.sender === "user" ? "justify-end" : "justify-start"
            }`}
          >
            <div
              className={`max-w-xs px-4 py-2 rounded-2xl ${
                message.sender === "user"
                  ? "bg-[#00a86b] text-white rounded-br-none"
                  : "bg-[#2727274b] text-white rounded-bl-none"
              }`}
            >
              <p className="text-[14px]">{message.text}</p>
              <p className="text-[11px] mt-1 opacity-70">{message.time}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Input Area */}
      <div className="border-t border-t-[#80808021] p-4 flex items-center gap-3">
        <input
          type="text"
          placeholder="Message"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
          className="bg-[#2727274b] rounded-3xl px-4 py-2 flex-1 text-white placeholder-gray-500 outline-none"
        />
        <button
          onClick={handleSendMessage}
          className="hover:bg-[#ffffff0a] p-2 rounded-full transition"
        >
          <Send size={20} color="#00a86b" />
        </button>
      </div>
    </div>
  );
}
