export default function BookAppointment() {
  return (
    <section className="py-20 bg-gray-100">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Want a Consistent Flow of{" "}
          <span className="text-[#D03837] underline">New Patient</span> Bookings?
        </h2>
        <p className="text-[#888888] text-lg mb-4">
          Our strategic, cost-effective marketing approach has helped clinics grow patient numbers and boost bookings. See how we can do the same for you!
        </p>
        <p className="text-xl font-semibold mb-8 text-black">
          Book an Appointment for a FREE Consultation!
        </p>
        <a 
          href="#appointment" 
          className="inline-block bg-[#D03837] hover:bg-[#b82e2d] text-white font-bold py-4 px-8 rounded-lg text-lg transition-colors duration-300"
        >
          BOOK AN APPOINTMENT
        </a>
      </div>
    </section>
  );
} 