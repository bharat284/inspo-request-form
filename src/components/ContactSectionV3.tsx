
import { Button } from "./ui/button";
import { Link } from "react-router-dom";
import { MapPin, Mail, Phone, ArrowRight } from "lucide-react";

export const ContactSectionV3 = () => {
  return (
    <section className="py-20 relative bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cia-purple to-cia-brightpurple bg-clip-text text-transparent">
              Get In Touch
            </h2>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Ready to ensure quality excellence for your products? Contact us today to discuss your inspection needs.
            </p>
            
            <div className="space-y-6 mb-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-cia-brightpurple to-cia-accent rounded-lg flex items-center justify-center flex-shrink-0">
                  <MapPin className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-gray-900 font-semibold mb-1">Address</h3>
                  <p className="text-gray-600">
                    1st Floor, 724/A, Nyay Khand-3, Indirapuram<br />
                    Ghaziabad - 201012, U.P. India
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-cia-brightpurple to-cia-accent rounded-lg flex items-center justify-center flex-shrink-0">
                  <Phone className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-gray-900 font-semibold mb-1">Phone</h3>
                  <p className="text-gray-600">
                    <a href="tel:+918920465078" className="hover:text-cia-brightpurple transition-colors">+91 8920465078</a><br />
                    <a href="tel:+919625912724" className="hover:text-cia-brightpurple transition-colors">+91 9625912724</a>
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-cia-brightpurple to-cia-accent rounded-lg flex items-center justify-center flex-shrink-0">
                  <Mail className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-gray-900 font-semibold mb-1">Email</h3>
                  <p className="text-gray-600">
                    <a href="mailto:info@colombusinspectionagency.com" className="hover:text-cia-brightpurple transition-colors">
                      info@colombusinspectionagency.com
                    </a>
                  </p>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-cia-brightpurple to-cia-accent text-white hover:from-cia-accent hover:to-cia-brightpurple"
                asChild
              >
                <Link to="/v3/contact">
                  Contact Us <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button 
                size="lg" 
                className="bg-white text-cia-brightpurple hover:bg-gray-100 border border-cia-brightpurple"
                asChild
              >
                <Link to="/v3/inspection-form">Request Inspection</Link>
              </Button>
            </div>
          </div>

          <div className="bg-gradient-to-br from-cia-purple to-cia-brightpurple rounded-2xl p-8 border border-cia-brightpurple/20 text-white">
            <h3 className="text-2xl font-bold text-white mb-6">Quick Contact</h3>
            <form className="space-y-4">
              <div>
                <label className="block text-white mb-2">Name</label>
                <input 
                  type="text" 
                  className="w-full px-4 py-3 bg-white/10 border border-white/30 rounded-lg text-white placeholder-gray-300 focus:border-white focus:outline-none"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="block text-white mb-2">Email</label>
                <input 
                  type="email" 
                  className="w-full px-4 py-3 bg-white/10 border border-white/30 rounded-lg text-white placeholder-gray-300 focus:border-white focus:outline-none"
                  placeholder="your@email.com"
                />
              </div>
              <div>
                <label className="block text-white mb-2">Message</label>
                <textarea 
                  rows={4}
                  className="w-full px-4 py-3 bg-white/10 border border-white/30 rounded-lg text-white placeholder-gray-300 focus:border-white focus:outline-none resize-none"
                  placeholder="Your message"
                ></textarea>
              </div>
              <Button 
                type="submit" 
                className="w-full bg-white text-cia-brightpurple hover:bg-gray-100"
              >
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
