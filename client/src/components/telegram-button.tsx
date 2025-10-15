import { Send } from "lucide-react";
import { useState } from "react";

export function TelegramButton() {
  const [isHovered, setIsHovered] = useState(false);
  
  // Replace with your Telegram username or bot username
  const telegramUsername = "Kimosales"; // Change this to your actual Telegram username or bot
  const telegramUrl = `https://t.me/${telegramUsername}`;

  const handleClick = () => {
    window.open(telegramUrl, '_blank');
  };

  return (
    <div className="fixed bottom-24 right-8 z-50">
      <button
        onClick={handleClick}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="relative group"
        data-testid="button-telegram-chat"
        aria-label="Chat on Telegram"
      >
        {/* Telegram Button */}
        <div className="bg-[#0088cc] hover:bg-[#0077b5] text-white rounded-full p-4 shadow-2xl transition-all duration-300 hover:scale-110 flex items-center justify-center">
          <Send className="h-7 w-7" fill="white" />
        </div>
        
        {/* Tooltip */}
        <div
          className={`absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-gray-900 text-white px-4 py-2 rounded-lg whitespace-nowrap transition-all duration-300 ${
            isHovered ? 'opacity-100 visible' : 'opacity-0 invisible'
          }`}
        >
          <span className="text-sm font-medium">Chat with us on Telegram</span>
          <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-full">
            <div className="border-8 border-transparent border-l-gray-900"></div>
          </div>
        </div>

        {/* Pulse Animation */}
        <div className="absolute inset-0 rounded-full bg-[#0088cc] animate-ping opacity-20"></div>
      </button>
    </div>
  );
}
