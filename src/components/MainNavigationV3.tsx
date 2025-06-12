
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "./ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";

export const MainNavigationV3 = () => {
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    document.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, [scrolled]);

  const isActive = (path: string) => location.pathname === path || location.pathname.startsWith(`${path}/`);
  const basePath = "/v3";

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    if (!isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  };

  return (
    <header 
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300",
        scrolled 
          ? "bg-cia-lightgray/95 backdrop-blur-md shadow-lg border-b border-cia-brightpurple/20" 
          : "bg-transparent"
      )}
    >
      <div className="container mx-auto px-4 flex justify-between items-center py-4">
        <div className="flex items-center space-x-3">
          <Link to="/v3" className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-gradient-to-br from-cia-brightpurple to-cia-accent rounded-lg flex items-center justify-center">
              <img 
                src="/lovable-uploads/7f13fd27-c4b7-4d3d-b49d-c7c3bede087e.png" 
                alt="CIA Logo" 
                className="h-8 w-8 object-contain"
              />
            </div>
            <span className="text-xl font-bold text-white">CIA</span>
          </Link>
        </div>
        
        {/* Desktop Navigation */}
        <NavigationMenu className="hidden md:flex">
          <NavigationMenuList>
            <NavigationMenuItem>
              <Link to="/v3">
                <NavigationMenuLink 
                  className={cn(
                    "px-4 py-2 rounded-md text-white hover:text-cia-brightpurple transition-colors",
                    isActive("/v3") && "text-cia-brightpurple bg-cia-brightpurple/10"
                  )}
                >
                  Home
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            
            <NavigationMenuItem>
              <NavigationMenuTrigger className="text-white hover:text-cia-brightpurple">
                Services
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] bg-cia-lightgray border border-cia-brightpurple/20">
                  {[
                    { title: "Fabric Inspection", path: `${basePath}/services/fabric-inspection` },
                    { title: "First Batch Inspection", path: `${basePath}/services/first-batch-inspection` },
                    { title: "Garment In-Line Inspection", path: `${basePath}/services/garment-inline-inspection` },
                    { title: "Garment Final Inspection", path: `${basePath}/services/garment-final-inspection` },
                    { title: "Container Loading", path: `${basePath}/services/container-loading` },
                  ].map((service) => (
                    <li key={service.title} className="row-span-1">
                      <Link to={service.path}>
                        <NavigationMenuLink
                          className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-cia-brightpurple/10 text-white hover:text-cia-brightpurple"
                        >
                          <div className="text-sm font-medium leading-none">{service.title}</div>
                        </NavigationMenuLink>
                      </Link>
                    </li>
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            
            <NavigationMenuItem>
              <Link to={`${basePath}/about`}>
                <NavigationMenuLink 
                  className={cn(
                    "px-4 py-2 rounded-md text-white hover:text-cia-brightpurple transition-colors",
                    isActive(`${basePath}/about`) && "text-cia-brightpurple bg-cia-brightpurple/10"
                  )}
                >
                  About
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            
            <NavigationMenuItem>
              <Link to={`${basePath}/contact`}>
                <NavigationMenuLink 
                  className={cn(
                    "px-4 py-2 rounded-md text-white hover:text-cia-brightpurple transition-colors",
                    isActive(`${basePath}/contact`) && "text-cia-brightpurple bg-cia-brightpurple/10"
                  )}
                >
                  Contact
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
        
        {/* Mobile menu button */}
        <button 
          onClick={toggleMenu}
          className="md:hidden text-white hover:text-cia-brightpurple transition-colors"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
        
        {/* Request Inspection Button */}
        <Button 
          variant="default" 
          className="bg-gradient-to-r from-cia-brightpurple to-cia-accent text-white hover:from-cia-accent hover:to-cia-brightpurple hidden md:inline-flex border-0"
          onClick={() => window.location.href = `${basePath}/inspection-form`}
        >
          Request Inspection
        </Button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden fixed inset-0 top-16 bg-cia-lightgray/95 backdrop-blur-md border-t border-cia-brightpurple/20">
          <nav className="flex flex-col p-6 space-y-4">
            <Link 
              to="/v3" 
              className="text-white hover:text-cia-brightpurple py-2 transition-colors"
              onClick={toggleMenu}
            >
              Home
            </Link>
            <Link 
              to={`${basePath}/services`} 
              className="text-white hover:text-cia-brightpurple py-2 transition-colors"
              onClick={toggleMenu}
            >
              Services
            </Link>
            <Link 
              to={`${basePath}/about`} 
              className="text-white hover:text-cia-brightpurple py-2 transition-colors"
              onClick={toggleMenu}
            >
              About
            </Link>
            <Link 
              to={`${basePath}/contact`} 
              className="text-white hover:text-cia-brightpurple py-2 transition-colors"
              onClick={toggleMenu}
            >
              Contact
            </Link>
            <Button 
              className="bg-gradient-to-r from-cia-brightpurple to-cia-accent text-white mt-4"
              onClick={() => {
                window.location.href = `${basePath}/inspection-form`;
                toggleMenu();
              }}
            >
              Request Inspection
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
};
