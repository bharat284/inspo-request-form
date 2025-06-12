
import { Card, CardContent } from "./ui/card";

export const TestimonialsV3 = () => {
  const testimonials = [
    {
      name: "Sarah Johnson",
      position: "Quality Manager, Global Textiles",
      quote: "Colombus Inspection Agency has been instrumental in maintaining our quality standards. Their attention to detail is unmatched."
    },
    {
      name: "Michael Chen",
      position: "Production Director, Fashion Forward",
      quote: "Professional, reliable, and thorough. CIA has helped us prevent costly quality issues before they reach our customers."
    },
    {
      name: "Emma Rodriguez",
      position: "Supply Chain Manager, Retail Plus",
      quote: "The detailed reports and fast turnaround times make CIA our preferred inspection partner for all our textile products."
    }
  ];

  return (
    <section className="py-20 relative bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cia-purple to-cia-brightpurple bg-clip-text text-transparent">
            What Our Clients Say
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Trusted by leading brands worldwide
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-gradient-to-br from-cia-purple to-cia-brightpurple rounded-xl p-8 border border-cia-brightpurple/20 text-white hover:transform hover:scale-105 transition-all duration-300">
              <div className="text-center">
                <div className="mb-6">
                  <svg 
                    className="h-8 w-8 text-white mx-auto" 
                    fill="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.51.88-3.995 3.356-3.995 5.635h4v10.214h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.511.88-3.996 3.356-3.996 5.635h4v10.214h-10z" />
                  </svg>
                </div>
                
                <p className="text-gray-100 mb-6 italic text-lg">"{testimonial.quote}"</p>
                
                <div>
                  <p className="font-semibold text-white text-lg">{testimonial.name}</p>
                  <p className="text-gray-100">{testimonial.position}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
