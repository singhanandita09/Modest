function Contact() {
  
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
            Contact Us
          </h1>
          <p className="mt-6 text-xl text-[#5f5346]">
            For collaborations, research data, and institutional monitoring applications.
          </p>
        </div>
      </section>

      <section className="bg-white py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-serif text-[#6b665b] text-shadow-lg mb-12">
            Institutional Information
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-[#f9f6f2] p-8 rounded-2xl shadow">
              <h3 className="text-2xl font-semibold text-[#50584d] mb-4">
                Institutional Address
              </h3>
              <p className="text-[#5f5346] leading-8">
                Department of Information Technology,
                <br />
                Indian Institute of Information Technology (IIIT) Allahabad,
                <br />
                Prayagraj, Uttar Pradesh - 211015, India.
              </p>
            </div>

            <div className="bg-[#f9f6f2] p-8 rounded-2xl shadow">
              <h3 className="text-2xl font-semibold text-[#50584d] mb-4">
                Sanctioning Authority
              </h3>
              <p className="text-[#5f5346] leading-8">
                Council of Science & Technology, U.P.
                <br />
                Letter No. CST/D-715
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#50584d] py-24 px-6 text-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-serif text-center text-shadow-lg mb-12">
            Lab Address
          </h2>

          <div className="max-w-3xl mx-auto bg-white/10 rounded-2xl p-10">
            <h3 className="text-3xl font-semibold mb-5">
              Big Data Analytics Lab
            </h3>
            <p className="leading-8">
              Room No.-5243, CV Raman Computer Center-III
              <br />
              IIIT Allahabad, Prayagraj
            </p>
          </div>
        </div>
      </section>

      <section className="bg-[#f3eee8] py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-serif text-[#6b665b] text-shadow-lg text-center mb-12">
            Communication
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow">
              <h3 className="text-2xl font-semibold text-[#50584d] mb-4">
                Phone
              </h3>
              <p className="text-[#5f5346]">+91-532-2922424</p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow">
              <h3 className="text-2xl font-semibold text-[#50584d] mb-4">
                Official Email
              </h3>
              <p className="text-[#5f5346] wrap-break-words">
                sonali@iiita.ac.in
                <br />
                rsi2026003@iiita.ac.in
                <br />
                prf.sarthak@iiita.ac.in
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow">
              <h3 className="text-2xl font-semibold text-[#50584d] mb-4">
                Personal Email
              </h3>
              <p className="text-[#5f5346] wrap-break-words">
                himanshisingh0312@gmail.com
                sarthakkesarwani2001@gmail.com
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Contact;