export default function VideoSection() {
  const videos = [
    {
      id: "1052712279",
      title: "Dr. Javeria Qureshi - How Digital Marketing Transformed My Dental Practice!"
    },
    {
      id: "1052713124",
      title: "Dr. Mansur Ahmed - Elevating Medical Practice with Digital Marketing!"
    }
  ];

  return (
    <section className="py-20 bg-gray-200">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Success <span className="text-[#D03837] underline">Stories</span>
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          {videos.map((video) => (
            <div key={video.id} className="shadow-lg rounded-lg overflow-hidden">
              <div style={{ padding: '56.25% 0 0 0', position: 'relative' }}>
                <iframe
                  src={`https://player.vimeo.com/video/${video.id}?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=58479`}
                  style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
                  title={video.title}
                  frameBorder="0"
                  allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 