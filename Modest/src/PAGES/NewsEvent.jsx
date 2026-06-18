function NewsEvent() {
  const updates = [
    {
      date: "February 2026",
      title: "DEXA 2025 Conference Presentation",
      text: "The MODEST team presented findings on early mental disorder score estimation at DEXA in partnership with Springer Nature.",
    },
    {
      date: "December 2025",
      title: "IEEE INDICON 2025 Submission",
      text: "Research on Explainable AI for mental health diagnostics was submitted for presentation.",
    },
    {
      date: "August 2025",
      title: "Open Source Mental Health Informatics",
      text: "A GitHub repository was launched for datasets, algorithms, and mental health informatics resources.",
    },
    {
      date: "Ongoing",
      title: "Wearable Integration",
      text: "Bluetooth-enabled EEG and GSR sensors are being integrated with the MODEST framework.",
    },
  ];

  const events = [
    "MODEST Symposium 2026",
    "Student Counseling Drive",
    "Student Workshop at IIIT Allahabad",
  ];

  return (
    <>
      <section
        className="py-28 px-6 bg-[#f3eee8]"
        style={{
          backgroundImage: "url('/public/Images/About-bg.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-serif text-[#7c7569] text-shadow-lg">
            News & Recent Events
          </h1>
          <p className="mt-6 text-xl text-[#5f5346]">
            Latest milestones, conferences, and community workshops.
          </p>
        </div>
      </section>

      <section className="bg-white py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-serif text-[#6b665b] text-shadow-lg mb-12">
            Latest Updates
          </h2>

          <div className="space-y-6">
            {updates.map((item, index) => (
              <div key={index} className="bg-[#f9f6f2] p-8 rounded-2xl shadow">
                <p className="text-[#50584d] font-semibold mb-2">{item.date}</p>
                <h3 className="text-2xl font-semibold text-[#50584d] mb-4">
                  {item.title}
                </h3>
                <p className="text-[#5f5346] leading-7">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#50584d] py-24 px-6 text-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-serif text-center text-shadow-lg mb-12">
            Upcoming Events
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {events.map((event, index) => (
              <div key={index} className="bg-white/10 p-8 rounded-2xl">
                <h3 className="text-2xl font-semibold mb-4">{event}</h3>
                <p>
                  Planned activity under the MODEST project for research,
                  clinical collaboration, and student awareness.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default NewsEvent;