
import { Card, CardContent } from "@/components/ui/card";

interface TestimonialCardProps {
  name: string;
  position: string;
  quote: string;
  image?: string;
}

export const TestimonialCard = ({ 
  name, 
  position, 
  quote,
  image 
}: TestimonialCardProps) => {
  return (
    <Card className="bg-white/10 backdrop-blur-md border-white/20 overflow-hidden">
      <CardContent className="p-6">
        <div className="flex flex-col items-center text-center">
          <div className="mb-4">
            <svg 
              className="h-8 w-8 text-white/60" 
              fill="currentColor" 
              viewBox="0 0 24 24"
            >
              <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.51.88-3.995 3.356-3.995 5.635h4v10.214h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.511.88-3.996 3.356-3.996 5.635h4v10.214h-10z" />
            </svg>
          </div>
          
          <p className="mb-6 italic">{quote}</p>
          
          <div className="mt-auto">
            <p className="font-semibold text-white">{name}</p>
            <p className="text-sm text-white/70">{position}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
