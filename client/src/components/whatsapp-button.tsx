import { MessageCircle } from "lucide-react";
import { useState } from "react";

export function WhatsAppButton() {
  const [isHovered, setIsHovered] = useState(false);
  
  const whatsappNumber = "251912633329"; // Format: country code + number without + or spaces
  const message = "Hello! I would like to know more about ANHAMA Trading PLC.";
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

  const handleClick = () => {
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="fixed bottom-24 right-8 z-50">
      <button
        onClick={handleClick}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="relative group"
        data-testid="button-whatsapp-chat"
        aria-label="Chat on WhatsApp"
      >
        {/* WhatsApp Button */}
        <div className="bg-[#25D366] hover:bg-[#20BA5A] text-white rounded-full p-4 shadow-2xl transition-all duration-300 hover:scale-110 flex items-center justify-center">
          <MessageCircle className="h-7 w-7" fill="white" />
        </div>
        
        {/* Tooltip */}
        <div
          className={`absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-gray-900 text-white px-4 py-2 rounded-lg whitespace-nowrap transition-all duration-300 ${
            isHovered ? 'opacity-100 visible' : 'opacity-0 invisible'
          }`}
        >
          <span className="text-sm font-medium">Chat with us on WhatsApp</span>
          <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-full">
            <div className="border-8 border-transparent border-l-gray-900"></div>
          </div>
        </div>

        {/* Pulse Animation */}
        <div className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-20"></div>
      </button>
    </div>
  );
}
