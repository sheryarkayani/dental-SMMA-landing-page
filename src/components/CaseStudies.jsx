export default function CaseStudies() {
  return (
    <section id="case-studies" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold">
            CUSTOMER <span className="text-[#E91E50] underline">STORIES</span>
          </h2>
        </div>

        {/* Case Study Content */}
        <div className="grid md:grid-cols-2 gap-12">
          {/* Left Column - Problem & Results */}
          <div className="space-y-8">
            <h2 className="text-2xl font-bold">Alina Dental Clinic</h2>
            <p className="text-gray-600">Client With Trendtial Since 2019</p>

            <div>
              <h2 className="text-xl font-bold mb-4">Problem Faced</h2>
              <ul className="list-disc pl-6 space-y-3 text-gray-700">
                <li>Alina Dental Clinic operates across three locations in different cities.</li>
                <li>The clinic faced limited visibility and engagement through local advertising channels.</li>
                <li>Low online brand presence and inconsistent results from social media campaigns.</li>
                <li>Limited patient bookings and minimal new patient acquisition.</li>
                <li>Limited leads and new patient inquiries through digital platforms.</li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-bold mb-4">Results Delivered</h2>
              <ul className="list-disc pl-6 space-y-3 text-gray-700">
                <li>A fully optimized Google My Business presence for each clinic location.</li>
                <li>Achieved consistent monthly leads, reaching over 200+ inquiries through Google My Business.</li>
                <li>A 50+ monthly increase in new patient bookings generated through PPC campaigns.</li>
                <li>Increased social media engagement and brand visibility with tailored, engaging content across platforms.</li>
                <li>Improved overall brand recognition across local communities, positioning Alina Dental Clinic as a trusted name in dental care.</li>
              </ul>
            </div>
          </div>

          {/* Right Column - Testimonial */}
          <div className="flex flex-col space-y-6">
            <div className="w-full h-[400px] rounded-lg overflow-hidden">
              <img 
                src="/images/image29.jpg" 
                alt="Dr Syed Ali Ahmed" 
                className="w-full h-full object-cover"
              />
            </div>
            <p className="text-lg italic">
              Over the past few years, our partnership with <strong><em>Trendtial has transformed our patient engagement and brand presence. With optimized digital strategies and a strong online presence,</em></strong> we've experienced steady growth in patient inquiries and bookings that have surpassed our initial expectations.
            </p>
            <div>
              <h2 className="text-xl font-bold">Dr Syed Ali Ahmed</h2>
              <p className="text-gray-600">
                Certified Dental Implantologist and Periodontist (C.Implants)
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 