
import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Button } from "./ui/button";

export const VersionSwitcher = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  
  // Determine which version we're on
  const currentVersion = location.pathname.startsWith("/v3") ? "V3" : 
                        location.pathname.startsWith("/v1") ? "V1" : "V2";
  
  const switchToVersion = (version: string) => {
    const currentPath = location.pathname;
    let newPath = "/";
    
    // Remove version prefix from current path
    const pathWithoutVersion = currentPath.replace(/^\/v[123]/, "");
    
    switch(version) {
      case "V1":
        newPath = `/v1${pathWithoutVersion}`;
        break;
      case "V2":
        newPath = pathWithoutVersion || "/";
        break;
      case "V3":
        newPath = `/v3${pathWithoutVersion}`;
        break;
    }
    
    navigate(newPath);
    setIsOpen(false);
  };
  
  return (
    <div className="fixed bottom-4 right-4 z-50">
      <div className="relative">
        <Button 
          onClick={() => setIsOpen(!isOpen)}
          className={`shadow-lg ${
            currentVersion === "V3" ? "bg-cia-darkpurple hover:bg-cia-purple text-white" :
            currentVersion === "V1" ? "bg-aileron-darkblue hover:bg-aileron-blue text-white" :
            "bg-gray-800 hover:bg-gray-700 text-white"
          }`}
        >
          Currently: {currentVersion}
        </Button>
        
        {isOpen && (
          <div className="absolute bottom-12 right-0 bg-white rounded-lg shadow-xl p-4 border border-gray-200 w-64">
            <p className="text-sm text-gray-600 mb-4">
              Switch between different design versions
            </p>
            <div className="space-y-2">
              <Button 
                onClick={() => switchToVersion("V1")}
                className="w-full bg-aileron-blue hover:bg-aileron-mediumblue text-white"
                disabled={currentVersion === "V1"}
              >
                Switch to V1 (Original)
              </Button>
              <Button 
                onClick={() => switchToVersion("V2")}
                className="w-full bg-gray-600 hover:bg-gray-700 text-white"
                disabled={currentVersion === "V2"}
              >
                Switch to V2 (Refined)
              </Button>
              <Button 
                onClick={() => switchToVersion("V3")}
                className="w-full bg-cia-purple hover:bg-cia-darkpurple text-white"
                disabled={currentVersion === "V3"}
              >
                Switch to V3 (Modern)
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
