
export const ClientCarouselV3 = () => {
  const clients = [
    {
      name: "TUV Rheinland",
      logo: "/lovable-uploads/c1e21dc4-93b2-462d-a274-dce49a68e76f.png"
    },
    {
      name: "HQTS",
      logo: "/lovable-uploads/80f05266-b793-4590-8702-745636d1045f.png"
    },
    {
      name: "Pro QC International",
      logo: "/lovable-uploads/8eeb4bc4-4a07-49c8-b984-db9b092b9776.png"
    },
    {
      name: "Calidatex",
      logo: "/lovable-uploads/284fb38f-70f0-4d6b-8de7-fbbeb0c694a4.png"
    },
    {
      name: "Astro Inspection Services",
      logo: "/lovable-uploads/c0cc351c-245e-445b-ad47-d0e9a74383d7.png"
    },
    {
      name: "K Brand",
      logo: "/lovable-uploads/8bcfe531-051d-4864-8873-4f561d03467e.png"
    },
    {
      name: "Cotecna",
      logo: "/lovable-uploads/a3f99a6f-40c4-458a-b8e8-da26f2ed4eb1.png"
    },
    {
      name: "Kangen Alojd",
      logo: "/lovable-uploads/ff9e3794-f847-4f23-9de5-adc353d3770e.png"
    },
    {
      name: "Pretty Vacant",
      logo: "/lovable-uploads/185b9c26-d2a3-4323-9041-b5571a20fa58.png"
    },
    {
      name: "Ben Sherman",
      logo: "/lovable-uploads/085c38ca-57fc-40eb-b86b-39eb8355efa4.png"
    }
  ];

  return (
    <section className="py-16 bg-white overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-cia-purple to-cia-brightpurple bg-clip-text text-transparent">
            Our Happy Clients & Collaborations
          </h2>
          <p className="text-lg text-gray-600">
            Trusted by leading brands worldwide
          </p>
        </div>
        
        {/* Rolling carousel */}
        <div className="relative">
          <div className="flex animate-scroll-right">
            {/* First set of logos */}
            {clients.map((client, index) => (
              <div
                key={`first-${index}`}
                className="flex-shrink-0 mx-8 flex items-center justify-center h-20 w-32"
              >
                <img
                  src={client.logo}
                  alt={`${client.name} logo`}
                  className="max-h-16 max-w-28 object-contain filter grayscale hover:grayscale-0 transition-all duration-300 opacity-70 hover:opacity-100"
                />
              </div>
            ))}
            {/* Duplicate set for seamless loop */}
            {clients.map((client, index) => (
              <div
                key={`second-${index}`}
                className="flex-shrink-0 mx-8 flex items-center justify-center h-20 w-32"
              >
                <img
                  src={client.logo}
                  alt={`${client.name} logo`}
                  className="max-h-16 max-w-28 object-contain filter grayscale hover:grayscale-0 transition-all duration-300 opacity-70 hover:opacity-100"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
      
      <style>{`
        @keyframes scroll-right {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        
        .animate-scroll-right {
          animation: scroll-right 30s linear infinite;
        }
        
        .animate-scroll-right:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
};
