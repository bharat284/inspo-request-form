
import { MapPin, Mail, Phone } from "lucide-react";
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <img 
              src="/lovable-uploads/518bcfa0-fc1f-40e5-b963-86efb8897d05.png" 
              alt="Colombus Inspection Agency Logo" 
              className="h-10 mb-4 invert"
            />
            <p className="text-gray-400 text-sm mt-2">
              Your trusted partner in quality inspection services.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-medium mb-4">Services</h3>
            <ul className="space-y-2">
              <li><Link to="/services/fabric-inspection" className="text-gray-400 hover:text-white text-sm">Fabric Inspection</Link></li>
              <li><Link to="/services/garment-inspection" className="text-gray-400 hover:text-white text-sm">Garment Inspection</Link></li>
              <li><Link to="/services/container-loading" className="text-gray-400 hover:text-white text-sm">Container Loading</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-medium mb-4">Resources</h3>
            <ul className="space-y-2">
              <li><Link to="/resources/standards" className="text-gray-400 hover:text-white text-sm">Inspection Standards</Link></li>
              <li><Link to="/resources/guide" className="text-gray-400 hover:text-white text-sm">Quality Control Guide</Link></li>
              <li><Link to="/faq" className="text-gray-400 hover:text-white text-sm">FAQs</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-medium mb-4">Contact</h3>
            <ul className="space-y-2">
              <li className="flex items-start gap-2">
                <MapPin className="h-5 w-5 text-aileron-lightblue shrink-0 mt-0.5" />
                <span className="text-gray-400 text-sm">
                  1st Floor, 724/A, Nyay Khand-3, Indirapuram<br />
                  Ghaziabad - 201012<br />
                  U.P. India
                </span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-aileron-lightblue" />
                <a href="tel:+918920465078" className="text-gray-400 text-sm hover:text-white">+91 8920465078</a>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-aileron-lightblue" />
                <a href="tel:+919625912724" className="text-gray-400 text-sm hover:text-white">+91 9625912724</a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-aileron-lightblue" />
                <a href="mailto:info@colombusinspectionagency.com" className="text-gray-400 text-sm hover:text-white">info@colombusinspectionagency.com</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-12 pt-6 text-center text-sm text-gray-400">
          © {new Date().getFullYear()} Colombus Inspection Agency. All rights reserved.
        </div>
      </div>
    </footer>
  );
};
