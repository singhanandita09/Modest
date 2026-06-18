function ResearchPublication() {
  const researchCards = [
    {
      title: "Multimodal Fusion Framework",
      text: "Integration of interviews, voice patterns, facial expressions, and EEG/GSR signals.",
    },
    {
      title: "Explainable AI",
      text: "AI-generated scores are designed to be understandable for clinical professionals.",
    },
    {
      title: "Domain Adaptation",
      text: "Studies how demographic and environmental factors relate to mental health conditions.",
    },
  ];

  const publications = [
    {
      title:
        "Innovative Framework for Early Estimation of Mental Disorder Scores to Enable Timely Interventions",
      info: "Singh, H., Agarwal, S., Singh, V. | DEXA 2025, Springer Nature",
    },
    {
      title:
        "XAI-Enabled Framework to Estimate Mental Disorder Using Fusion Approaches",
      info: "Submitted to IEEE INDICON 2025",
    },
    {
      title:
        "Multimodal Data-Driven Classification of Mental Disorders",
      info: "arXiv:2502.03943, 2025",
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
          <h1 className="text-5xl md:text-7xl font-serif text-[#7c7569] text-shadow-lg">
            Research & Publications
          </h1>
          <p className="mt-6 text-xl text-[#5f5346]">
            Advancing Mental Health Informatics through Multimodal Fusion
          </p>
        </div>
      </section>

      <section className="bg-white py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-serif text-[#6b665b] text-shadow-lg mb-8">
            Research Focus & Methodology
          </h2>

          <p className="text-lg text-[#5f5346] leading-8 mb-12">
            Our research moves away from single-source data and uses a fusion
            approach to understand a user's mental state through multiple data
            sources.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {researchCards.map((card, index) => (
              <div key={index} className="bg-[#f9f6f2] p-8 rounded-2xl shadow">
                <h3 className="text-2xl font-semibold text-[#50584d] mb-4">
                  {card.title}
                </h3>
                <p className="text-[#5f5346] leading-7">{card.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#50584d] py-24 px-6 text-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-serif text-center text-shadow-lg mb-12">
            Key Publications
          </h2>

          <div className="space-y-6">
            {publications.map((paper, index) => (
              <div key={index} className="bg-white/10 p-8 rounded-2xl">
                <h3 className="text-2xl font-semibold mb-3">{paper.title}</h3>
                <p className="text-gray-200">{paper.info}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#f3eee8] py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-serif text-[#6b665b] text-shadow-lg text-center mb-12">
            Technical Frameworks
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow">
              <h3 className="text-2xl font-semibold text-[#50584d] mb-4">
                Vision Pipeline
              </h3>
              <p>CNN-based face detection and expression encoding.</p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow">
              <h3 className="text-2xl font-semibold text-[#50584d] mb-4">
                Acoustic Pipeline
              </h3>
              <p>Pitch, tone, pause, and voice pattern analysis.</p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow">
              <h3 className="text-2xl font-semibold text-[#50584d] mb-4">
                Physiological Pipeline
              </h3>
              <p>EEG and GSR signal processing for stress response.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-serif text-[#6b665b] text-shadow-lg mb-8">
            Deliverables & Progress
          </h2>

          <p className="text-xl text-[#5f5346] mb-6">
            Current Milestone: 40% Completion
          </p>

          <div className="w-full h-5 bg-gray-200 rounded-full mb-10">
            <div className="w-[40%] h-5 bg-[#50584d] rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              "Dataset Curation",
              "Baseline Model Development",
              "Initial Fusion Logic",
              "Real-time Validation",
              "Web-interface Deployment",
              "Mobile App Integration",
            ].map((item, index) => (
              <div key={index} className="bg-[#f9f6f2] p-6 rounded-2xl shadow">
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default ResearchPublication;