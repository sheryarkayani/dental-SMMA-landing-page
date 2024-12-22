export default function Services() {
  const servicesRow1 = [
    {
      image: "/images/image30.png",
      title: "Lead Generation\nSales Funnels"
    },
    {
      image: "/images/image31.png",
      title: "Highly Engaged Social\nMedia Presence"
    },
    {
      image: "/images/image32.png",
      title: "Conversion Driven Web\nDesign & Development"
    }
  ];

  const servicesRow2 = [
    {
      image: "/images/image25.png",
      title: "Results-Oriented Pay\nPer Click Advertising"
    },
    {
      image: "/images/image26.png",
      title: "Build Your Authority With\nVideo Marketing"
    },
    {
      image: "/images/image27.png",
      title: "Online Reputation\nManagement & Monitoring"
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-100">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">
            SERVICES <span className="text-[#D03837] underline">WE OFFER</span>
          </h2>
          <p className="max-w-4xl mx-auto text-lg text-[#888888] leading-relaxed">
            We offer a complete lead generation system for healthcare practices, bringing together different tools and strategies to help you consistently get new patients. Our approach is simple: we use a clear, big-picture plan to make sure all the parts work together smoothly, like a well-oiled machine, to keep your practice growing with new patient leads.
          </p>
        </div>

        {/* First Row of Services */}
        <div className="grid md:grid-cols-3 gap-6 mb-6">
          {servicesRow1.map((service, index) => (
            <div key={index} className="flex flex-col items-center text-center bg-white p-8 rounded-lg border border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-300">
              <div className="mb-6">
                <img 
                  src={service.image} 
                  alt={service.title}
                  className="w-24 h-24 object-contain"
                />
              </div>
              <h2 className="text-xl font-bold whitespace-pre-line">
                {service.title}
              </h2>
            </div>
          ))}
        </div>

        {/* Second Row of Services */}
        <div className="grid md:grid-cols-3 gap-6">
          {servicesRow2.map((service, index) => (
            <div key={index} className="flex flex-col items-center text-center bg-white p-8 rounded-lg border border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-300">
              <div className="mb-6">
                <img 
                  src={service.image} 
                  alt={service.title}
                  className="w-24 h-24 object-contain"
                />
              </div>
              <h2 className="text-xl font-bold whitespace-pre-line">
                {service.title}
              </h2>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 