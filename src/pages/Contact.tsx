
import { MainNavigation } from "@/components/MainNavigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { MapPin, Mail, Phone } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/components/ui/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Contact form submission:", formData);
    
    // In a real application, you would send this data to your backend
    toast({
      title: "Message Sent",
      description: "Thank you for contacting us. We will get back to you soon.",
    });
    
    // Reset form
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
  };

  return (
    <div className="min-h-screen bg-white">
      <MainNavigation />

      <main className="pt-28 pb-20">
        <section className="py-10">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl font-bold mb-8 text-aileron-darkblue text-center">Contact Us</h1>
            
            <div className="max-w-5xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
                <div>
                  <h2 className="text-2xl font-semibold mb-6 text-aileron-blue">Get In Touch</h2>
                  
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                        Your Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-aileron-blue"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                        Email Address
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-aileron-blue"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                        Subject
                      </label>
                      <input
                        type="text"
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-aileron-blue"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                        Message
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows={5}
                        value={formData.message}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-aileron-blue"
                      ></textarea>
                    </div>
                    
                    <div>
                      <Button 
                        type="submit" 
                        className="bg-aileron-blue hover:bg-aileron-mediumblue text-white"
                      >
                        Send Message
                      </Button>
                    </div>
                  </form>
                </div>
                
                <div>
                  <h2 className="text-2xl font-semibold mb-6 text-aileron-blue">Contact Information</h2>
                  
                  <div className="space-y-6">
                    <div className="flex items-start gap-4">
                      <MapPin className="h-6 w-6 text-aileron-blue shrink-0 mt-1" />
                      <div>
                        <h3 className="font-medium text-aileron-darkblue">Office Address</h3>
                        <p className="text-gray-600 mt-1">
                          1st Floor, 724/A, Nyay Khand-3, Indirapuram<br />
                          Ghaziabad - 201012<br />
                          U.P. India
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-4">
                      <Phone className="h-6 w-6 text-aileron-blue shrink-0 mt-1" />
                      <div>
                        <h3 className="font-medium text-aileron-darkblue">Phone Numbers</h3>
                        <p className="text-gray-600 mt-1">
                          <a href="tel:+918920465078" className="hover:text-aileron-blue">+91 8920465078</a><br />
                          <a href="tel:+919625912724" className="hover:text-aileron-blue">+91 9625912724</a>
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-4">
                      <Mail className="h-6 w-6 text-aileron-blue shrink-0 mt-1" />
                      <div>
                        <h3 className="font-medium text-aileron-darkblue">Email Address</h3>
                        <p className="text-gray-600 mt-1">
                          <a href="mailto:info@colombusinspectionagency.com" className="hover:text-aileron-blue">info@colombusinspectionagency.com</a>
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-8 pt-8 border-t border-gray-200">
                    <h3 className="font-medium text-aileron-darkblue mb-4">Business Hours</h3>
                    <table className="w-full text-gray-600">
                      <tbody>
                        <tr>
                          <td className="py-1">Monday - Friday:</td>
                          <td className="py-1">9:00 AM - 6:00 PM</td>
                        </tr>
                        <tr>
                          <td className="py-1">Saturday:</td>
                          <td className="py-1">9:00 AM - 1:00 PM</td>
                        </tr>
                        <tr>
                          <td className="py-1">Sunday:</td>
                          <td className="py-1">Closed</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
              
              <div className="h-96 rounded-lg overflow-hidden shadow-md">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3499.5367963024257!2d77.3644799!3d28.697720299999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cf1049b4ef5e7%3A0xd8d211c11f46d0a0!2sNyay%20Khand%20III%2C%20Indirapuram%2C%20Ghaziabad%2C%20Uttar%20Pradesh%20201014!5e0!3m2!1sen!2sin!4v1715483483353!5m2!1sen!2sin" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Contact;
