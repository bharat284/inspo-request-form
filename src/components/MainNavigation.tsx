
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

export const MainNavigation = () => {
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll effect for navbar
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

  // Check if the current path starts with the given path
  const isActive = (path: string) => location.pathname === path || location.pathname.startsWith(`${path}/`);
  
  // Get the base path depending on version (v1 or v2)
  const basePath = location.pathname.startsWith("/v1") ? "/v1" : "";

  return (
    <header 
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300",
        scrolled 
          ? "bg-white shadow-md py-2" 
          : "bg-transparent py-4"
      )}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <Link to={basePath === "/v1" ? "/v1" : "/"}>
            <img 
              src="/lovable-uploads/518bcfa0-fc1f-40e5-b963-86efb8897d05.png" 
              alt="Colombus Inspection Agency Logo" 
              className="h-12"
            />
          </Link>
        </div>
        
        <NavigationMenu className="hidden md:flex">
          <NavigationMenuList>
            <NavigationMenuItem>
              <Link to={basePath === "/v1" ? "/v1" : "/"}>
                <NavigationMenuLink 
                  className={cn(
                    navigationMenuTriggerStyle(),
                    (isActive("/") || isActive("/v1") && basePath === "/v1") && "bg-accent text-accent-foreground"
                  )}
                >
                  Home
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            
            <NavigationMenuItem>
              <NavigationMenuTrigger>Services</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
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
                          className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
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
                    navigationMenuTriggerStyle(),
                    isActive(`${basePath}/about`) && "bg-accent text-accent-foreground"
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
                    navigationMenuTriggerStyle(),
                    isActive(`${basePath}/contact`) && "bg-accent text-accent-foreground"
                  )}
                >
                  Contact
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
        
        <Button 
          variant="default" 
          className="bg-aileron-blue text-white hover:bg-aileron-mediumblue hidden md:inline-flex"
          onClick={() => window.location.href = `${basePath}/inspection-form`}
        >
          Request Inspection
        </Button>
      </div>
    </header>
  );
};
