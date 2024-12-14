export default function Hero() {
  return (
    <section id="hero" className="min-h-[40rem] flex items-center justify-center bg-black bg-opacity-75 bg-blend-overlay bg-[url('/images/hero-bg.jpg')] bg-cover bg-center text-white">
      <div className="max-w-4xl mx-auto text-center px-6">
        <h1 className="text-4xl md:text-6xl font-bold mb-8">
          We help Healthcare Clinics secure <span className="text-[#D03837]">10+ new patient</span> appointments within 14 days
        </h1>
        <p className="text-xl mb-12 text-gray-300">
          Join Social Prizm's Mission to Connect Healthcare Providers with Patients in Need
        </p>
        <div className="flex flex-col md:flex-row gap-6 justify-center">
          <button className="bg-[#D03837] hover:bg-[#b82e2d] text-white px-8 py-3 rounded-md text-lg font-semibold transition-colors">
            SEE HOW
          </button>
          <button className="bg-white hover:bg-gray-100 text-[#D03837] px-8 py-3 rounded-md text-lg font-semibold transition-colors">
            GET QUOTE!
          </button>
        </div>
      </div>
    </section>
  );
} 