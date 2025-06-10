
import { MainNavigationV3 } from "@/components/MainNavigationV3";
import { FooterV3 } from "@/components/FooterV3";
import { InspectionForm } from "@/components/InspectionForm";
import { useState } from "react";
import { useToast } from "@/components/ui/use-toast";

const InspectionFormPage = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleFormSubmit = (formData: any) => {
    setIsSubmitting(true);
    
    // Simulating form submission to database/backend
    console.log("Form data to be saved:", formData);
    
    // In a real application, you would send this data to your backend
    setTimeout(() => {
      setIsSubmitting(false);
      setFormSubmitted(true);
      
      toast({
        title: "Inspection Request Submitted",
        description: "Thank you! Your inspection request has been received. We will contact you shortly.",
      });
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-cia-darkpurple via-cia-navy to-cia-purple">
      <MainNavigationV3 />

      <main className="pt-28 pb-20">
        <div className="container mx-auto py-8 px-4">
          <h2 className="text-3xl font-bold mb-8 text-center text-white">Inspection Request Form</h2>
          
          {formSubmitted ? (
            <div className="max-w-2xl mx-auto text-center bg-white/10 backdrop-blur-md p-8 rounded-lg border border-cia-brightpurple/20">
              <svg className="w-16 h-16 text-cia-brightpurple mx-auto mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <h3 className="text-2xl font-bold text-white mb-2">Thank You!</h3>
              <p className="text-gray-300 mb-6">
                Your inspection request has been successfully submitted. One of our representatives will contact you shortly to confirm the details.
              </p>
              <button 
                onClick={() => setFormSubmitted(false)}
                className="px-4 py-2 bg-gradient-to-r from-cia-brightpurple to-cia-accent text-white rounded-md hover:from-cia-accent hover:to-cia-brightpurple transition-all duration-300"
              >
                Submit Another Request
              </button>
            </div>
          ) : (
            <div className="max-w-6xl mx-auto">
              <p className="text-gray-300 mb-8 text-center">
                Please fill out the form below to request an inspection. Fields marked with * are required.
              </p>
              
              <div className="bg-white/10 backdrop-blur-md p-6 rounded-lg border border-cia-brightpurple/20">
                <InspectionForm />
              </div>
              
              <div className="mt-8 p-4 bg-cia-brightpurple/10 backdrop-blur-md rounded-md border border-cia-brightpurple/20">
                <h3 className="font-semibold text-white mb-2">Note:</h3>
                <ul className="list-disc pl-6 text-gray-300 space-y-1">
                  <li>Inspection requests should be submitted at least 4 working days prior to the desired inspection date.</li>
                  <li>Our team will review your request and contact you to confirm availability and additional details.</li>
                  <li>For urgent inspection requests, please contact us directly by phone.</li>
                </ul>
              </div>
            </div>
          )}
        </div>
      </main>

      <FooterV3 />
    </div>
  );
};

export default InspectionFormPage;
