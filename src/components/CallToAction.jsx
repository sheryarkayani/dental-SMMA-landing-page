export default function CallToAction() {
  return (
    <section 
      className="py-20 bg-black bg-opacity-60 bg-blend-overlay bg-[url('/images/container51.jpg')] bg-cover bg-center"
    >
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Take Your Practice to the Next Level!
            </h2>
            <p className="text-[#888888] text-lg md:text-xl">
              Connect with our team for a free consultation and discover how we can help you attract more patients and increase your online presence.
            </p>
          </div>
          <div className="flex justify-center md:justify-end">
            <a 
              href="tel:+18163253036"
              className="inline-block bg-[#D03837] hover:bg-[#b82e2d] text-white font-bold py-4 px-8 rounded-lg text-lg transition-colors duration-300"
            >
              CALL NOW
            </a>
          </div>
        </div>
      </div>
    </section>
  );
} 