import Navbar from "../../components/Navbar";

function Home() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-[#f4efeb] text-[#4b5146]">
        <section
          id="welcome"
          className="grid min-h-[560px] overflow-hidden bg-[#4b5146] md:grid-cols-2"
        >
          <div className="flex flex-col items-center justify-center px-12 text-center text-white">
            <h1 className="mb-6 max-w-xl font-serif text-5xl leading-tight">
              Your Journey to Well-being Starts Here
            </h1>

            <p className="mb-8 text-2xl">Find Support and Guidance</p>

            <button className="rounded-md border-2 border-white px-10 py-3 text-lg transition hover:bg-white hover:text-[#4b5146]">
              Contact Us
            </button>
          </div>

          <div>
            <img
              src="/mental-health.jpg"
              alt="Meditation"
              className="h-full w-full object-cover opacity-80"
            />
          </div>
        </section>

        <section id="about" className="grid items-center gap-10 px-24 py-12 md:grid-cols-2">
          <h2 className="font-serif text-5xl leading-tight">
            Prioritize Your <br /> Mental Health
          </h2>

          <p className="text-lg leading-8">
            We partner with you to unlock your potential and achieve your goals.
            Our experienced therapists provide compassionate and effective care,
            helping you navigate life's challenges and build a stronger, more
            fulfilling life.
          </p>
        </section>

        <section id="services" className="bg-[#4b5146] px-20 py-24 text-center text-white">
          <h2 className="mb-20 font-serif text-5xl">
            Your Well-being is Our Priority
          </h2>

          <div className="grid gap-16 md:grid-cols-3">
            <div>
              <i className="fa-solid fa-heart mb-6 text-6xl"></i>
              <h3 className="mb-4 font-serif text-4xl">Expertise with <br /> Heart</h3>
              <p className="text-lg">Skilled therapists who truly <br /> understand and care</p>
            </div>

            <div>
              <i className="fa-solid fa-lock mb-6 text-6xl"></i>
              <h3 className="mb-4 font-serif text-4xl">Confidentiality <br /> Assured</h3>
              <p className="text-lg">A safe space to open up without <br /> judgment</p>
            </div>

            <div>
              <i className="fa-solid fa-handshake mb-6 text-6xl"></i>
              <h3 className="mb-4 font-serif text-4xl">A Supportive <br /> Community</h3>
              <p className="text-lg">Connecting with others on a similar <br /> journey</p>
            </div>
          </div>
        </section>

        <section id="research" className="px-24 py-20">
          <h2 className="mb-4 font-serif text-5xl">Research & Publications</h2>
          <p className="text-lg leading-8">Research content will go here.</p>
        </section>

        <section id="framework" className="bg-white px-24 py-20">
          <h2 className="mb-4 font-serif text-5xl">The MODEST Framework</h2>
          <p className="text-lg leading-8">Framework content will go here.</p>
        </section>

        <section id="members" className="px-24 py-20">
          <h2 className="mb-4 font-serif text-5xl">Members</h2>
          <p className="text-lg leading-8">Members content will go here.</p>
        </section>

        <section id="students" className="bg-white px-24 py-20">
          <h2 className="mb-4 font-serif text-5xl">Students</h2>
          <p className="text-lg leading-8">Students content will go here.</p>
        </section>

        <section id="news" className="px-24 py-20">
          <h2 className="mb-4 font-serif text-5xl">News & Events</h2>
          <p className="text-lg leading-8">News content will go here.</p>
        </section>

        <footer id="contact" className="flex items-center justify-between px-20 py-8">
          <p>© 2024. All Rights Reserved.</p>

          <div className="flex gap-8 text-2xl">
            <a href="#"><i className="fa-brands fa-facebook-f hover:text-black"></i></a>
            <a href="#"><i className="fa-brands fa-instagram hover:text-black"></i></a>
            <a href="#"><i className="fa-brands fa-tiktok hover:text-black"></i></a>
          </div>
        </footer>
      </main>
    </>
  );
}

export default Home;