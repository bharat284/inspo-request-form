
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
          ? "bg-white/95 backdrop-blur-md shadow-lg border-b border-cia-brightpurple/20" 
          : "bg-white/90 backdrop-blur-sm"
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
            <span className="text-xl font-bold text-cia-brightpurple">CIA</span>
          </Link>
        </div>
        
        {/* Desktop Navigation */}
        <NavigationMenu className="hidden md:flex">
          <NavigationMenuList>
            <NavigationMenuItem>
              <Link to="/v3">
                <NavigationMenuLink 
                  className={cn(
                    "px-4 py-2 rounded-md text-cia-brightpurple hover:text-cia-accent transition-colors",
                    isActive("/v3") && "text-cia-accent bg-cia-brightpurple/10"
                  )}
                >
                  Home
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            
            <NavigationMenuItem>
              <Link to={`${basePath}/services`}>
                <NavigationMenuLink 
                  className={cn(
                    "px-4 py-2 rounded-md text-cia-brightpurple hover:text-cia-accent transition-colors",
                    isActive(`${basePath}/services`) && "text-cia-accent bg-cia-brightpurple/10"
                  )}
                >
                  Our Services
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            
            <NavigationMenuItem>
              <Link to={`${basePath}/about`}>
                <NavigationMenuLink 
                  className={cn(
                    "px-4 py-2 rounded-md text-cia-brightpurple hover:text-cia-accent transition-colors",
                    isActive(`${basePath}/about`) && "text-cia-accent bg-cia-brightpurple/10"
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
                    "px-4 py-2 rounded-md text-cia-brightpurple hover:text-cia-accent transition-colors",
                    isActive(`${basePath}/contact`) && "text-cia-accent bg-cia-brightpurple/10"
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
          className="md:hidden text-cia-brightpurple hover:text-cia-accent transition-colors"
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
        <div className="md:hidden fixed inset-0 top-16 bg-white/95 backdrop-blur-md border-t border-cia-brightpurple/20">
          <nav className="flex flex-col p-6 space-y-4">
            <Link 
              to="/v3" 
              className="text-cia-brightpurple hover:text-cia-accent py-2 transition-colors"
              onClick={toggleMenu}
            >
              Home
            </Link>
            <Link 
              to={`${basePath}/services`} 
              className="text-cia-brightpurple hover:text-cia-accent py-2 transition-colors"
              onClick={toggleMenu}
            >
              Our Services
            </Link>
            <Link 
              to={`${basePath}/about`} 
              className="text-cia-brightpurple hover:text-cia-accent py-2 transition-colors"
              onClick={toggleMenu}
            >
              About
            </Link>
            <Link 
              to={`${basePath}/contact`} 
              className="text-cia-brightpurple hover:text-cia-accent py-2 transition-colors"
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
