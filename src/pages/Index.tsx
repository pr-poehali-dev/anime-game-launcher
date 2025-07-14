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
          backgroundImage: `url(/img/d647a1cf-7f69-4500-8bc3-2a4f9de3071a.jpg)`
        }}
      />
      
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/50" />
      
      {/* Main Content */}
      <div className="relative z-10 min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-6xl font-bold mb-8 text-white font-montserrat tracking-wide">
            PROJECT ZOMBOID
          </h1>
          <p className="text-xl text-white/80 mb-12 font-roboto">
            Фан-сайт игры
          </p>
          
          <Button
            onClick={handlePlayClick}
            className="bg-[#FF1493] hover:bg-[#FF1493]/80 text-white font-bold py-6 px-12 rounded-lg text-2xl font-roboto transition-all duration-200 hover:scale-105 shadow-lg shadow-[#FF1493]/30"
          >
            Играть
          </Button>
        </div>
      </div>
      
      {/* Explosion Effect */}
      {isExploded && (
        <div 
          className="fixed inset-0 z-50 bg-cover bg-center bg-no-repeat animate-scale-in"
          style={{
            backgroundImage: `url(/img/8d18a675-11ec-4ab6-9740-b2a88b230356.jpg)`
          }}
        />
      )}
    </div>
  );
};

export default Index;