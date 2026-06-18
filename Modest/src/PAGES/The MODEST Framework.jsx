function Framework() {
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
            The MODEST Framework
          </h1>
          <p className="mt-6 text-xl text-[#5f5346]">
            Architecting Intelligent Solutions for Clinical Mental Health Diagnostics
          </p>
        </div>
      </section>

      <section className="bg-white py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-serif text-[#6b665b] text-shadow-lg mb-8">
            Framework Architecture
          </h2>
          <p className="text-lg text-[#5f5346] leading-8">
            The MODEST framework is a generalized multimodal fusion framework
            designed to estimate mental disorder scores and support early
            clinical interventions.
          </p>
        </div>
      </section>

      <section className="bg-[#50584d] py-24 px-6 text-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-serif text-center text-shadow-lg mb-12">
            Multimodal Input Integration
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              "Visual Image / Video: CNNs such as ResNet and VGGFace for face detection and expression encoding.",
              "Audio Speech: Prosodic features, MFCC, Librosa, and Whisper-based audio analysis.",
              "Text Transcript: Speech-to-text APIs with BERT and Paragraph Vector embeddings.",
              "Physiological EEG / GSR: Real-time wearable signal processing for stress markers.",
            ].map((item, index) => (
              <div key={index} className="bg-white/10 p-8 rounded-2xl">
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#f3eee8] py-24 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-serif text-[#6b665b] text-shadow-lg mb-10">
            Framework Overview
          </h2>

          <div className="bg-white rounded-2xl shadow p-10">
            <h3 className="text-3xl text-[#50584d] font-semibold mb-4">
              MODEST Framework Architecture
            </h3>
            <p className="text-[#5f5346]">
              Overview of the MODEST multimodal framework integrating visual,
              audio, text, and physiological data streams.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-serif text-[#6b665b] text-shadow-lg text-center mb-12">
            Core AI Techniques
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              "Fusion Models: Early, Late, and Hybrid cross-attention fusion.",
              "Explainable AI: Interpretable diagnostic support for clinicians.",
              "Domain Adaptation: Relating demographics and mental health patterns.",
            ].map((item, index) => (
              <div key={index} className="bg-[#f9f6f2] p-8 rounded-2xl shadow">
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#50584d] py-24 px-6 text-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-serif text-center text-shadow-lg mb-12">
            System Deliverables
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white/10 p-8 rounded-2xl">
              <h3 className="text-2xl font-semibold mb-4">Mobile Application</h3>
              <p>Beta version for audio/video recording and EEG wearable connection.</p>
            </div>

            <div className="bg-white/10 p-8 rounded-2xl">
              <h3 className="text-2xl font-semibold mb-4">Web-based UI</h3>
              <p>Interface for real-time assessment and visual analytics.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Framework;