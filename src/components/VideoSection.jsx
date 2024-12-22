export default function VideoSection() {
  const videos = [
    {
      id: "M37sj-jthHo",
      title: "Healthcare Marketing Success Story 1"
    },
    {
      id: "-p5VxihyM90",
      title: "Healthcare Marketing Success Story 2"
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
            <div key={video.id} className="aspect-video shadow-lg">
              <iframe
                className="w-full h-full rounded-lg"
                src={`https://www.youtube.com/embed/${video.id}`}
                title={video.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 