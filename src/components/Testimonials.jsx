export default function Testimonials() {
  const testimonials = [
    {
      image: "/images/image36.jpg",
      name: "Dr. Syed Ali Ahmed",
      rating: "/images/image39.png",
      review: "Over the past few years, our partnership with Trendtial has transformed our patient engagement and brand presence. With optimized digital strategies and a strong online presence...",
      readMoreLink: "https://maps.app.goo.gl/1D38kd7SgfYXEmUW6/"
    },
    {
      image: "/images/image37.jpg",
      name: "Dr. Ramsha Zaheer",
      rating: "/images/image40.png",
      review: "A fantastic team to up your social media game. More than anything else, they understand the message that we want to deliver and then deliver it better than we do. They have provided valuable advice...",
      readMoreLink: "https://maps.app.goo.gl/1D38kd7SgfYXEmUW6/"
    },
    {
      image: "/images/image35.jpg",
      name: "Dr. Yawar Anis",
      rating: "/images/image38.png",
      review: "I'm so happy we chose Trendtial! They helped us reach a wider audience, and we're getting more calls than ever. Their team is professional, and they really know their stuff! I'd recommend them...",
      readMoreLink: "https://maps.app.goo.gl/1D38kd7SgfYXEmUW6/"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          What Our Clients Say
        </h2>
        <div className="grid md:grid-cols-12 gap-8">
          {/* Google Review Column */}
          <div className="md:col-span-3 flex items-center justify-center">
            <img 
              src="/images/image34.png" 
              alt="Google 5.0 Star Reviews" 
              className="w-full max-w-[200px] object-contain"
            />
          </div>

          {/* Vertical Divider */}
          <div className="hidden md:block md:col-span-1">
            <div className="w-px bg-gray-800 opacity-20 h-full mx-auto"></div>
          </div>

          {/* Testimonials Grid */}
          <div className="md:col-span-8 grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="relative">
                {/* Vertical divider between testimonials */}
                {index > 0 && (
                  <div className="hidden md:block absolute left-0 top-0 w-px bg-gray-800 opacity-20 h-full -ml-4" />
                )}
                
                <div className="bg-white p-6 flex flex-col items-center text-center">
                  <div className="w-32 h-32 mb-4 overflow-hidden rounded-full">
                    <img 
                      src={testimonial.image} 
                      alt={testimonial.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h2 className="text-2xl font-bold mb-4">{testimonial.name}</h2>
                  <img 
                    src={testimonial.rating} 
                    alt="5 Star Rating" 
                    className="h-8 mb-4"
                  />
                  <p className="text-gray-600 mb-6">
                    {testimonial.review}
                  </p>
                  <a
                    href={testimonial.readMoreLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-800 font-semibold"
                  >
                    Read More
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
} 