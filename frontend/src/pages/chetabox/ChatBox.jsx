import { Camera, Link } from "lucide-react";
import { FaMicrophone, FaPaperPlane, FaRegImages } from "react-icons/fa";
import React, { useState } from "react";

const ChatBox = () => {
  const [messages, setMessages] = useState([
    { text: "Hi", sender: "other" },
    { text: "Hi, Bol", sender: "user" },    
  ]);
  const [input, setInput] = useState("");

  const sendMessage = () => {
    if (input.trim() === "") return;

    setMessages([...messages, { text: input, sender: "user" }]);
    setInput("");

    // Simulate reply (optional)
    setTimeout(() => {
      setMessages((prev) => [...prev, { text: "Seen ✔", sender: "other" }]);
    }, 1000);
  };

  return (
    <div className="w-full max-w-md mx-auto flex flex-col h-[51.1vh] overflow-hidden">
     
      <div className="flex-1 p-4 overflow-y-auto space-y-2">

        {messages.map((msg, index) => (
          <div
            key={index}
            className={`flex ${
              msg.sender === "user" ? "justify-end" : "justify-start"
            }`}
          >
            <div
              className={`px-4 py-2 rounded-2xl text-sm max-w-xs ${
                msg.sender === "user"
                  ? "bg-pink-500 text-white rounded-br-none"
                  : "bg-gray-200 text-black rounded-bl-none"
              }`}
            >
              {msg.text}
            </div>
          </div>
        ))}
      </div>    

      {/* Input */}
      <div className=" border rounded-full outline-none focus:ring-1 bg-pink-400 items-center">
        <div className="flex items-center p-0 ">
          {/* Camera Icon */}
          <button className="mr-3 text-gray-900 hover:text-black rounded-full py-1 px-1 ml-2 bg-pink-600 transition">
            <Camera className="w-7 ml-[0.1rem] h-[2rem]" />
          </button>       

          {/* Message Input */}
          <input
            type="text"
            className="flex-1 bg-pink-400 py-2 pb-3 placeholder:text-gray-600 text-start -ml-2 -mr-[5rem] rounded-full px-1 outline-none"
            placeholder="Message..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && sendMessage()}
          />
          

          <button onClick={sendMessage} className="mt-[0rem] ml-7 mr-2 rounded-full flex items-center gap-2 px-4 py-2 bg-pink-500 text-white transition">
            <FaPaperPlane className="text-white text-lg" />
          </button>

          {/* FaMicrophone */}
          <div className="-ml-5 -mr-2 mt-[0.3rem]">
            <div className="flex items-center mt-[0.4rem] size-[1.8rem] -mb-[2.7rem] justify-center -ml-[7.5rem]">
              <FaMicrophone className="text-black text-3xl size-[1.5rem] mb-[0.3rem] ml-0" />
            </div>

            {/* FaMicrophone */}
            <button className="flex items-center mr-[4rem] mb-3 -ml-[6rem] -mt-[0.9rem] gap-2 px-4 py-2 text-black rounded-full transition">
              <FaRegImages className="text-xl -mb-3 mt-2 size-[1.6rem] " />
            </button>
          </div>          
        </div>
      </div>
    </div>
  );
};

export default ChatBox;