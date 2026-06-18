function Services() {
  const focusAreas = [
    "ADHD",
    "Anxiety",
    "Bipolar",
    "Mood and Personality",
    "Poly/Couples Work",
    "Depression",
    "PTSD",
    "Peer Relationships",
    "Stress",
  ];

  const services = [
    {
      title: "Digital Biomarker Analysis",
      text: "Interpretation of EEG and GSR data for clinical research.",
    },
    {
      title: "Speech & Text Screening",
      text: "Automated sentiment and emotional marker extraction for therapeutic documentation.",
    },
    {
      title: "Early Intervention Alerts",
      text: "AI-driven scoring for identifying high-risk symptoms in early stages.",
    },
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
          <h1 className="text-6xl md:text-7xl font-serif text-[#7c7569] text-shadow-lg">
            Services
          </h1>
          <p className="mt-6 text-xl text-[#5f5346]">
            Multimodal Analysis for Mental Disorder Recognition to Improve Well-being
          </p>
        </div>
      </section>

      <section className="bg-white py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-serif text-[#6b665b] text-shadow-lg mb-8">
            Our Approach to Healing
          </h2>

          <p className="text-lg text-[#5f5346] leading-8">
            Project MODEST supports well-being by combining multimodal mental
            health analysis with clinical understanding. It helps in observing
            emotional, behavioral, and physiological signals in a structured way.
          </p>

          <p className="text-lg text-[#5f5346] leading-8 mt-6">
            The goal is to support researchers and clinicians with better tools
            for early recognition, documentation, and intervention.
          </p>
        </div>
      </section>

      <section className="bg-[#50584d] py-24 px-6 text-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-serif text-center text-shadow-lg mb-12">
            Areas of Focus
          </h2>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
            {focusAreas.map((area, index) => (
              <div key={index} className="bg-white/10 p-8 rounded-2xl text-center">
                <h3 className="text-2xl font-semibold">{area}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#f3eee8] py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-serif text-[#6b665b] text-shadow-lg text-center mb-12">
            Technical Support Services
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl shadow">
                <h3 className="text-2xl font-semibold text-[#50584d] mb-4">
                  {service.title}
                </h3>
                <p className="text-[#5f5346] leading-7">{service.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default Services;