export default function Testimonials() {
  const testimonials = [
    {
      image: "/images/image36.jpg",
      name: "Dr. Syed Ali Ahmed",
      rating: "/images/image39.png",
      review: "Over the past few years, our partnership with Trendtial has transformed our patient engagement and brand presence. With optimized digital strategies and a strong online presence...",
      readMoreLink: "https://www.google.com/maps/place/Trendtial+Marketing+Bahria+Town+Phase+7+Branch/@33.528217,73.0169279,13z/data=!4m10!1m2!2m1!1strendtial!3m6!1s0x38df93d159950b3b:0xfc3b972c4cb8ab09!8m2!3d33.528217!4d73.0890257!15sCgl0cmVuZHRpYWySARBtYXJrZXRpbmdfYWdlbmN54AEA!16s%2Fg%2F11y9c_n26k?entry=ttu&g_ep=EgoyMDI0MTIxMS4wIKXMDSoASAFQAw%3D%3D"
    },
    {
      image: "/images/image37.jpg",
      name: "Dr. Ramsha Zaheer",
      rating: "/images/image40.png",
      review: "A fantastic team to up your social media game. More than anything else, they understand the message that we want to deliver and then deliver it better than we do. They have provided valuable advice...",
      readMoreLink: "https://www.google.com/maps/place/Trendtial+Marketing+Bahria+Town+Phase+7+Branch/@33.528217,73.0169279,13z/data=!4m10!1m2!2m1!1strendtial!3m6!1s0x38df93d159950b3b:0xfc3b972c4cb8ab09!8m2!3d33.528217!4d73.0890257!15sCgl0cmVuZHRpYWySARBtYXJrZXRpbmdfYWdlbmN54AEA!16s%2Fg%2F11y9c_n26k?entry=ttu&g_ep=EgoyMDI0MTIxMS4wIKXMDSoASAFQAw%3D%3D"
    },
    {
      image: "/images/image35.jpg",
      name: "Dr. Yawar Anis",
      rating: "/images/image38.png",
      review: "I'm so happy we chose Trendtial! They helped us reach a wider audience, and we're getting more calls than ever. Their team is professional, and they really know their stuff! I'd recommend them...",
      readMoreLink: "https://www.google.com/maps/place/Trendtial+Marketing+Bahria+Town+Phase+7+Branch/@33.528217,73.0169279,13z/data=!4m10!1m2!2m1!1strendtial!3m6!1s0x38df93d159950b3b:0xfc3b972c4cb8ab09!8m2!3d33.528217!4d73.0890257!15sCgl0cmVuZHRpYWySARBtYXJrZXRpbmdfYWdlbmN54AEA!16s%2Fg%2F11y9c_n26k?entry=ttu&g_ep=EgoyMDI0MTIxMS4wIKXMDSoASAFQAw%3D%3D"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          What Our Clients Say
        </h2>
        <div className="grid md:grid-cols-12 gap-6">
          {/* Google Review Column */}
          <div className="md:col-span-2 flex items-center justify-center">
            <img 
              src="/images/image34.png" 
              alt="Google 5.0 Star Reviews" 
              className="w-full max-w-[150px] object-contain"
            />
          </div>

          {/* Vertical Divider */}
          <div className="hidden md:block md:col-span-1">
            <div className="w-px bg-gray-800 opacity-20 h-full mx-auto"></div>
          </div>

          {/* Testimonials Grid */}
          <div className="md:col-span-9 grid md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="relative">
                {/* Vertical divider between testimonials */}
                {index > 0 && (
                  <div className="hidden md:block absolute left-0 top-0 w-px bg-gray-800 opacity-20 h-full -ml-4" />
                )}
                
                <div className="bg-white p-4 flex flex-col items-center text-center">
                  <div className="w-28 h-28 mb-4 overflow-hidden rounded-full">
                    <img 
                      src={testimonial.image} 
                      alt={testimonial.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h2 className="text-xl font-bold mb-4">{testimonial.name}</h2>
                  <img 
                    src={testimonial.rating} 
                    alt="5 Star Rating" 
                    className="h-6 mb-4"
                  />
                  <p className="text-gray-600 mb-4">
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
