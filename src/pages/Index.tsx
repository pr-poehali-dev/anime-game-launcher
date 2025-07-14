import { useState } from "react";
import { Button } from "@/components/ui/button";

const Index = () => {
  const [isExploded, setIsExploded] = useState(false);

  const handlePlayClick = () => {
    // Play click sound
    const clickSound = new Audio('data:audio/wav;base64,UklGRnoGAABXQVZFZm10IBAAAAABAAEAQB8AAEAfAAABAAgAZGF0YQoGAACBhYqFbF1fdJivrJBhNjVgodDbq2EcBj+a2/LDciUFLIHO8tiJNwgZaLvt559NEAxQp+PwtmMcBjiR1/LMeSwFJHfH8N2QQAoUXrTp66hVFApGn+DyvmwhBDN+zPLUfCkGLoTO8NWMPAkTYLnu559NEAxPqOPwtmMcBjiS1/LNeSsFJHfH8N2QQAoUXrTp66hVFApGn+DyvmwhBDN+zPLUfCkGLoTO8NWMPAkTYLnu559NEAxPqOPwtmMcBjiS1/LNeSsFJHfH8N2QQAoUXrTp66hVFApGn+DyvmwhBDN+zPLUfCkGLoTO8NWMPAkTYLnu559NEAxPqOPwtmMcBjiS1/LNeSsFJHfH8N2QQAoUXrTp66hVFApGn+DyvmwhBDN+zPLUfCkGLoTO8NWMPAkTYLnu559NEAxPqOPwtmMcBjiS1/LNeSsFJHfH8N2QQAoUXrTp66hVFApGn+DyvmwhBDN+zPLUfCkGLoTO8NWMPAkTYLnu559NEAxPqOPwtmMcBjiS1/LNeSsFJHfH8N2QQAoUXrTp66hVFApGn+DyvmwhBDN+zPLUfCkGLoTO8NWMPAkTYLnu559NEAxPqOPwtmMcBjiS1/LNeSsFJHfH8N2QQAoUXrTp66hVFApGn+DyvmwhBDN+zPLUfCkGLoTO8NWMPAkTYLnu559NEAxPqOPwtmMcBjiS1/LNeSsFJHfH8N2QQAoUXrTp66hVFApGn+DyvmwhBDN+zPLUfCkGLoTO8NWMPAkTYLnu559NEAxPqOPwtmMcBjiS1/LNeSsFJHfH8N2QQAoUXrTp66hVFApGn+DyvmwhBDN+zPLUfCkGLoTO8NWMPAkTYLnu559NEAxPqOPwtmMcBjiS1/LNeSsFJHfH8N2QQAoUXrTp66hVFApGn+DyvmwhBDN+zPLUfCkGLoTO8NWMPAkTYLnu559NEAxPqOPwtmMcBjiS1/LNeSsFJHfH8N2QQAoUXrTp66hVFApGn+DyvmwhBDN+zPLUfCkGLoTO8NWMPAkTYLnu559NEAxPqOPwtmMcBjiS1/LNeSsFJHfH8N2QQAoUXrTp66hVFApGn+DyvmwhBDN+zPLUfCkGLoTO8NWMPAkTYLnu55A==');
    clickSound.play().catch(() => {});
    
    setIsExploded(true);
    
    // Play explosion sound after delay
    setTimeout(() => {
      const explosionSound = new Audio('data:audio/wav;base64,UklGRnoGAABXQVZFZm10IBAAAAABAAEAQB8AAEAfAAABAAgAZGF0YQoGAACBhYqFbF1fdJivrJBhNjVgodDbq2EcBj+a2/LDciUFLIHO8tiJNwgZaLvt559NEAxQp+PwtmMcBjiR1/LMeSwFJHfH8N2QQAoUXrTp66hVFApGn+DyvmwhBDN+zPLUfCkGLoTO8NWMPAkTYLnu559NEAxPqOPwtmMcBjiS1/LNeSsFJHfH8N2QQAoUXrTp66hVFApGn+DyvmwhBDN+zPLUfCkGLoTO8NWMPAkTYLnu559NEAxPqOPwtmMcBjiS1/LNeSsFJHfH8N2QQAoUXrTp66hVFApGn+DyvmwhBDN+zPLUfCkGLoTO8NWMPAkTYLnu559NEAxPqOPwtmMcBjiS1/LNeSsFJHfH8N2QQAoUXrTp66hVFApGn+DyvmwhBDN+zPLUfCkGLoTO8NWMPAkTYLnu559NEAxPqOPwtmMcBjiS1/LNeSsFJHfH8N2QQAoUXrTp66hVFApGn+DyvmwhBDN+zPLUfCkGLoTO8NWMPAkTYLnu559NEAxPqOPwtmMcBjiS1/LNeSsFJHfH8N2QQAoUXrTp66hVFApGn+DyvmwhBDN+zPLUfCkGLoTO8NWMPAkTYLnu559NEAxPqOPwtmMcBjiS1/LNeSsFJHfH8N2QQAoUXrTp66hVFApGn+DyvmwhBDN+zPLUfCkGLoTO8NWMPAkTYLnu559NEAxPqOPwtmMcBjiS1/LNeSsFJHfH8N2QQAoUXrTp66hVFApGn+DyvmwhBDN+zPLUfCkGLoTO8NWMPAkTYLnu559NEAxPqOPwtmMcBjiS1/LNeSsFJHfH8N2QQAoUXrTp66hVFApGn+DyvmwhBDN+zPLUfCkGLoTO8NWMPAkTYLnu559NEAxPqOPwtmMcBjiS1/LNeSsFJHfH8N2QQAoUXrTp66hVFApGn+DyvmwhBDN+zPLUfCkGLoTO8NWMPAkTYLnu559NEAxPqOPwtmMcBjiS1/LNeSsFJHfH8N2QQAoUXrTp66hVFApGn+DyvmwhBDN+zPLUfCkGLoTO8NWMPAkTYLnu559NEAxPqOPwtmMcBjiS1/LNeSsFJHfH8N2QQAoUXrTp66hVFApGn+DyvmwhBDN+zPLUfCkGLoTO8NWMPAkTYLnu559NEAxPqOPwtmMcBjiS1/LNeSsFJHfH8N2QQAoUXrTp66hVFApGn+DyvmwhBDN+zPLUfCkGLoTO8NWMPAkTYLnu55A==');
      explosionSound.play().catch(() => {});
    }, 100);
    
    // Reset after 3 seconds
    setTimeout(() => {
      setIsExploded(false);
    }, 3000);
  };

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Anime Background */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(/img/41c7ce9e-613d-4ce8-a926-f1c97f009a0d.jpg)`
        }}
      />
      
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/50" />
      
      {/* Main Content */}
      <div className="relative z-10 min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-6xl font-bold mb-16 text-white font-montserrat tracking-wide">
            PROJECT ZOMBOID
          </h1>
          
          <Button
            onClick={handlePlayClick}
            className="bg-[#FF1493] hover:bg-[#FF1493]/80 text-white font-bold py-8 px-16 rounded-xl text-3xl font-roboto transition-all duration-200 hover:scale-105 shadow-xl shadow-[#FF1493]/40"
          >
            Играть
          </Button>
        </div>
      </div>
      
      {/* Explosion Effect */}
      {isExploded && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black animate-scale-in">
          <div 
            className="w-full h-full bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: `url(/img/8f591624-eaf1-4a4e-ba03-b403d037cf0b.jpg)`
            }}
          />
        </div>
      )}
    </div>
  );
};

export default Index;