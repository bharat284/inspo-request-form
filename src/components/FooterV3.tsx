
import { MapPin, Mail, Phone } from "lucide-react";
import { Link } from "react-router-dom";

export const FooterV3 = () => {
  return (
    <footer className="relative bg-cia-lightgray border-t border-cia-brightpurple/20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-cia-brightpurple to-cia-accent rounded-lg flex items-center justify-center">
                <img 
                  src="/lovable-uploads/7f13fd27-c4b7-4d3d-b49d-c7c3bede087e.png" 
                  alt="CIA Logo" 
                  className="h-6 w-6 object-contain"
                />
              </div>
              <span className="text-lg font-bold text-white">CIA</span>
            </div>
            <p className="text-gray-400 text-sm">
              Your trusted partner in quality inspection services.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-medium mb-4 text-white">Services</h3>
            <ul className="space-y-2">
              <li><Link to="/v3/services/fabric-inspection" className="text-gray-400 hover:text-cia-brightpurple text-sm transition-colors">Fabric Inspection</Link></li>
              <li><Link to="/v3/services/garment-final-inspection" className="text-gray-400 hover:text-cia-brightpurple text-sm transition-colors">Garment Inspection</Link></li>
              <li><Link to="/v3/services/container-loading" className="text-gray-400 hover:text-cia-brightpurple text-sm transition-colors">Container Loading</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-medium mb-4 text-white">Company</h3>
            <ul className="space-y-2">
              <li><Link to="/v3/about" className="text-gray-400 hover:text-cia-brightpurple text-sm transition-colors">About Us</Link></li>
              <li><Link to="/v3/services" className="text-gray-400 hover:text-cia-brightpurple text-sm transition-colors">Our Services</Link></li>
              <li><Link to="/v3/contact" className="text-gray-400 hover:text-cia-brightpurple text-sm transition-colors">Contact</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-medium mb-4 text-white">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <MapPin className="h-4 w-4 text-cia-brightpurple shrink-0 mt-0.5" />
                <span className="text-gray-400 text-sm">
                  1st Floor, 724/A, Nyay Khand-3, Indirapuram<br />
                  Ghaziabad - 201012, U.P. India
                </span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-cia-brightpurple" />
                <a href="tel:+918920465078" className="text-gray-400 text-sm hover:text-cia-brightpurple transition-colors">+91 8920465078</a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-cia-brightpurple" />
                <a href="mailto:info@colombusinspectionagency.com" className="text-gray-400 text-sm hover:text-cia-brightpurple transition-colors">info@colombusinspectionagency.com</a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-cia-brightpurple/20 mt-12 pt-6 text-center text-sm text-gray-400">
          © {new Date().getFullYear()} Colombus Inspection Agency. All rights reserved.
        </div>
      </div>
    </footer>
  );
};
