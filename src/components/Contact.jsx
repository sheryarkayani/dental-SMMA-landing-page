export default function Contact() {
  const specialties = [
    "Cosmetic Surgeons", "Aesthetic Medicine Clinics", "Weight Loss Surgery Centers",
    "Orthopedic Surgeons", "Hair Restoration Clinics", "Ophthalmologists",
    "Vein Care Specialists", "Dermatology Clinics", "Men's and Women's Health Specialists",
    "Chiropractic Practices", "Mental Health Clinics", "Veterinary Clinics",
    "General Practitioners", "Rheumatology Specialists", "Vasectomy Clinics", "Other"
  ];

  const teamMembers = [
    "PPC Managers",
    "Technical SEO experts",
    "Creative Content Marketers",
    "Social Media Strategists",
    "Analytics Professionals",
    "Web Designers & Developers"
  ];

  return (
    <section className="py-20 bg-black bg-opacity-10" id="getquote">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Left Column */}
          <div className="space-y-8">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              WHY PARTNER WITH Trendtial?
            </h2>
            <p className="text-gray-600">
              Our team of skilled, dedicated professionals is focused on delivering exceptional, measurable results. With Trendtial, you gain access to years of expertise, a proven track record of success, and a passionate commitment to supporting your growth through digital marketing.
            </p>
            <div>
              <p className="font-semibold mb-4">You get access to the Trendtial expert marketing team comprised of:</p>
              <ul className="list-disc pl-6 space-y-2">
                {teamMembers.map((member, index) => (
                  <li key={index} className="text-gray-600">{member}</li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right Column - Form */}
          <div>
            <form className="space-y-6" method="post" encType="multipart/form-data">
              <input
                type="text"
                name="name"
                placeholder="Name"
                className="w-full p-3 border rounded-md"
                required
                maxLength="256"
              />
              <input
                type="tel"
                name="phone-number"
                placeholder="Phone Number"
                pattern="[0-9\-\(\)+ #*]+"
                className="w-full p-3 border rounded-md"
                required
                maxLength="128"
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                className="w-full p-3 border rounded-md"
                required
                maxLength="128"
              />
              <input
                type="text"
                name="clinic-name"
                placeholder="Clinic Name"
                className="w-full p-3 border rounded-md"
                required
                maxLength="256"
              />
              <select
                name="specialty"
                className="w-full p-3 border rounded-md"
                required
              >
                <option value="">– Please select your area of specialty –</option>
                {specialties.map((specialty, index) => (
                  <option key={index} value={specialty}>{specialty}</option>
                ))}
              </select>
              <textarea
                name="marketing-channels"
                placeholder="What marketing channels have you used to attract new patients to your practice?"
                className="w-full p-3 border rounded-md h-32"
                required
              ></textarea>
              <div className="flex items-start gap-2">
                <input
                  type="checkbox"
                  name="agreement"
                  id="agreement"
                  required
                  className="mt-1"
                />
                <label htmlFor="agreement" className="text-sm text-gray-600">
                  By submitting this form, you agree to receive text messages from Trendtial regarding updates, promotions, and other relevant information. Message and data rates may apply. You can opt out at any time by replying "STOP" to any message.
                </label>
              </div>
              <button
                type="submit"
                className="w-full bg-[#D03837] hover:bg-[#b82e2d] text-white font-bold py-3 px-6 rounded-md transition-colors duration-300"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
} 