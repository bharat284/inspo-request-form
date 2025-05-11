
import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Button } from "./ui/button";

export const VersionSwitcher = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  
  // Determine if we're on V1 or V2
  const isV1 = location.pathname === "/v1";
  
  const switchVersion = () => {
    if (isV1) {
      navigate("/");
    } else {
      navigate("/v1");
    }
    setIsOpen(false);
  };
  
  return (
    <div className="fixed bottom-4 right-4 z-50">
      <div className="relative">
        <Button 
          onClick={() => setIsOpen(!isOpen)}
          className="bg-aileron-darkblue hover:bg-aileron-blue text-white shadow-lg"
        >
          {isV1 ? "Currently: V1" : "Currently: V2"}
        </Button>
        
        {isOpen && (
          <div className="absolute bottom-12 right-0 bg-white rounded-lg shadow-xl p-4 border border-gray-200 w-64">
            <p className="text-sm text-gray-600 mb-4">
              Switch between the original design (V1) and the new design (V2)
            </p>
            <Button 
              onClick={switchVersion}
              className="w-full bg-aileron-blue hover:bg-aileron-mediumblue text-white"
            >
              Switch to {isV1 ? "V2" : "V1"}
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};
