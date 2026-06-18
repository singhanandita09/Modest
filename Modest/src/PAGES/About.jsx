function About() {
    return (
        <div className="bg-[#F5F1EC] text-[#2B2B2B]">
            {/* Hero */}
            <section className="relative min-h-[80vh] flex items-center px-8 md:px-20 overflow-hidden">

                <div className="absolute inset-0">
                    <img
                        src="/public/Image/About.bg.png"
                        alt=""
                        className="w-full h-full object-cover opacity-50 px-8"
                    />
                </div>
                <div className="max-w-5xl">
                    <h1 className="uppercase tracking-[4px] text-[#2a2d1f] text-shadow-lg mb-6 text-8xl">
                        MODEST
                    </h1>

                    <h5 className="font-serif text-5xl md:text-5xl leading-tight text-[#3F4638]">
                        Multimodal Analysis for Mental Disorder Recognition to Improve
                        Well-being
                    </h5>
                </div>
            </section>

            {/* Overview */}
            <section className="px-8 md:px-20 py-24 bg-white">
                <div className="grid md:grid-cols-2 gap-16 items-start">
                    <h2 className="font-serif text-4xl md:text-5xl text-[#6B705C] text-shadow-lg">
                        Project Overview
                    </h2>

                    <p className="text-lg leading-9 text-[#444] ">
                        A Multimodal Analysis for Mental Disorder Recognition to Improve
                        Mental Health and Well-being (MODEST) is a cutting-edge research
                        initiative sanctioned by the Council of Science & Technology, U.P.
                        (Letter No. CST/D-715). Hosted at the Indian Institute of
                        Information Technology (IIIT) - Allahabad, the project aims to
                        revolutionize mental health diagnostics by moving beyond traditional
                        clinical interviews.
                    </p>
                </div>
            </section>

            {/* Vision */}
            <section className="px-8 md:px-20 py-24 bg-[#4B5148] text-white">
                <div className="max-w-5xl mx-auto text-center">
                    <p className="uppercase tracking-[4px] text-[#D4B483] mb-5 text-6xl">
                        The Vision
                    </p>

                    <h2 className="font-serif text-4xl md:text-4xl mb-8">
                        Human-centric AI for early mental health support
                    </h2>

                    <p className="text-lg leading-9 text-gray-100">
                        Our primary mission is to develop an AI-powered electronic health
                        platform that integrates cost-effective interventions to promote
                        well-being. By utilizing a generalized multimodal fusion framework,
                        Project MODEST automatically estimates mental disorder scores in
                        their early stages, allowing for timely clinical support for
                        individuals, students, and children.
                    </p>
                </div>
            </section>

            {/* Objectives */}
            <section className="px-8 md:px-20 py-24 bg-[#F5F1EC]">
                <h2 className="font-serif text-4xl md:text-5xl text-[#3F4638] mb-16">
                    Core Objectives :
                </h2>

                <div className="grid md:grid-cols-3 gap-10">
                    {[
                        {
                            title: "Early Recognition",
                            text: "Integrating text, audio, visual, and physiological (EEG/GSR) data for the early detection of disorders like Depression, Anxiety, and Schizophrenia.",
                        },
                        {
                            title: "Inclusive Technology",
                            text: "Using domain adaptation and cross-attention mechanisms to capture the complex relationships between various triggers and mental health.",
                        },
                        {
                            title: "Decolonizing the Mind",
                            text: "Beyond technical recognition, we are committed to strategies that assist in reflection, restructure, and the growth of a safe, inclusive therapeutic experience.",
                        },
                    ].map((item, index) => (
                        <div
                            key={index}
                            className="border-l border-[#B8AD9D] pl-8 py-4"
                        >
                            <span className="font-serif text-5xl text-[#A68A64]">
                                0{index + 1}
                            </span>
                            <h3 className="font-serif text-2xl mt-6 mb-4 text-[#3F4638]">
                                {item.title}
                            </h3>
                            <p className="leading-8 text-[#4A4A4A]">{item.text}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Methodology */}
            <section className="px-8 md:px-20 py-24 bg-white">
                <div className="grid md:grid-cols-2 gap-16">
                    <div>
                        <p className="uppercase tracking-[4px] text-[#6B705C] mb-5  text-4xl text-shadow-lg">
                            Technical Methodology
                        </p>

                        <h2 className="font-serif text-4xl md:text-3xl text-[#3F4638]">
                            Deep learning architectures for multimodal diagnosis
                        </h2>
                    </div>

                    <div className="space-y-6 text-lg leading-8">
                        <p>
                            The project employs sophisticated deep learning architectures
                            (CNN, LSTM, and BiLSTM) to process diverse data types:
                        </p>

                        <p><b>Visual:</b> Face detection and expression encoding using CNNs.</p>
                        <p><b>Audio:</b> Prosodic and acoustic analysis to identify emotional markers.</p>
                        <p><b>Textual:</b> Natural Language Processing (BERT/Whisper) to analyze interview transcripts.</p>
                        <p><b>Physiological:</b> EEG and GSR monitoring via Bluetooth-enabled wearables to capture real-time stress markers.</p>
                    </div>
                </div>
            </section>

            {/* Research */}
            <section className="px-8 md:px-20 py-24 bg-[#4B5148] text-white">
                <h2 className="font-serif text-4xl md:text-5xl mb-14">
                    Featured Research & Contributions
                </h2>

                <div className="space-y-10 max-w-5xl">
                    <p className="text-lg leading-9">
                        <b>Innovative Early Estimation:</b> Our research has established a
                        framework for early mental disorder score estimation, presented at
                        the DEXA 2025 Conference (Springer Nature).
                    </p>

                    <p className="text-lg leading-9">
                        <b>Explainable AI (XAI):</b> We have successfully submitted work on
                        an XAI-enabled framework to IEEE INDICON 2025, focusing on fusion
                        approaches that make AI-driven diagnoses more interpretable for
                        clinicians.
                    </p>

                    <p className="text-lg leading-9">
                        <b>Comprehensive Diagnostics:</b> Our latest manuscripts
                        (arXiv:2502.03943) provide a data-driven approach to classifying
                        Depression, Anxiety, and Schizophrenia with high accuracy and
                        cultural sensitivity.
                    </p>
                </div>
            </section>


        </div>
    );
}

export default About;