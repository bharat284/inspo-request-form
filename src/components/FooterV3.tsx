import { MapPin, Mail, Phone } from "lucide-react";
import { Link } from "react-router-dom";

export const FooterV3 = () => {
  return (
    <footer className="relative bg-white border-t border-cia-brightpurple/20">
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
              <span className="text-lg font-bold text-cia-brightpurple">CIA</span>
            </div>
            <p className="text-gray-600 text-sm mb-4">
              Your trusted partner in quality inspection services.
            </p>
            
            {/* Certificates Section */}
            <div>
              <h4 className="text-sm font-medium mb-3 text-cia-brightpurple">Certifications</h4>
              <div className="flex gap-3">
                <div className="group cursor-pointer">
                  <img 
                    src="/lovable-uploads/355c844f-b856-4b5b-a775-63a754cb6a9a.png" 
                    alt="ISO 9001:2015 Certificate" 
                    className="h-16 w-12 object-cover rounded border border-cia-brightpurple/20 hover:shadow-md transition-shadow"
                  />
                  <p className="text-xs text-gray-500 mt-1 text-center">ISO 9001:2015</p>
                </div>
                <div className="group cursor-pointer">
                  <img 
                    src="/lovable-uploads/42ffeaf3-2701-48f2-8844-f453a2becec0.png" 
                    alt="UDYAM Registration Certificate" 
                    className="h-16 w-12 object-cover rounded border border-cia-brightpurple/20 hover:shadow-md transition-shadow"
                  />
                  <p className="text-xs text-gray-500 mt-1 text-center">UDYAM Reg.</p>
                </div>
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-medium mb-4 text-cia-brightpurple">Services</h3>
            <ul className="space-y-2">
              <li><Link to="/services/fabric-inspection" className="text-gray-600 hover:text-cia-brightpurple text-sm transition-colors">Fabric Inspection</Link></li>
              <li><Link to="/services/garment-final-inspection" className="text-gray-600 hover:text-cia-brightpurple text-sm transition-colors">Garment Inspection</Link></li>
              <li><Link to="/services/container-loading" className="text-gray-600 hover:text-cia-brightpurple text-sm transition-colors">Container Loading</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-medium mb-4 text-cia-brightpurple">Company</h3>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-gray-600 hover:text-cia-brightpurple text-sm transition-colors">About Us</Link></li>
              <li><Link to="/services" className="text-gray-600 hover:text-cia-brightpurple text-sm transition-colors">Our Services</Link></li>
              <li><Link to="/contact" className="text-gray-600 hover:text-cia-brightpurple text-sm transition-colors">Contact</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-medium mb-4 text-cia-brightpurple">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <MapPin className="h-4 w-4 text-cia-brightpurple shrink-0 mt-0.5" />
                <span className="text-gray-600 text-sm">
                  1st Floor, 724/A, Nyay Khand-3, Indirapuram<br />
                  Ghaziabad - 201012, U.P. India
                </span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-cia-brightpurple" />
                <a href="tel:+918920465078" className="text-gray-600 text-sm hover:text-cia-brightpurple transition-colors">+91 8920465078</a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-cia-brightpurple" />
                <a href="mailto:info@colombusinspectionagency.com" className="text-gray-600 text-sm hover:text-cia-brightpurple transition-colors">info@colombusinspectionagency.com</a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-cia-brightpurple/20 mt-12 pt-6 text-center text-sm text-gray-600">
          © {new Date().getFullYear()} Colombus Inspection Agency. All rights reserved.
        </div>
      </div>
    </footer>
  );
};
