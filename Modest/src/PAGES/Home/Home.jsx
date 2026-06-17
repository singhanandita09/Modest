function Home() {
  return (
    <div className="min-h-screen bg-[#f4efeb] text-[#4b5146]">
      {/* Navbar */}
      <nav className="flex items-center justify-between bg-[#f4efeb] px-20 py-6">
        <div className="flex h-28 w-28 items-center justify-center rounded-full border-2 border-[#4b5146] text-center text-xs font-bold">
          LOGO TEXT HERE
        </div>

        <ul className="flex gap-10 text-lg font-medium">
          <li className="border-b-4 border-[#4b5146] pb-2">Home</li>
          <li className="hover:border-b-4 hover:border-[#4b5146] hover:pb-2">
            Contact
          </li>
        </ul>

        <div className="w-28"></div>
      </nav>

      {/* Hero */}
      <section className="grid min-h-[560px] overflow-hidden bg-[#4b5146] md:grid-cols-2">
        <div className="flex flex-col items-center justify-center px-12 text-center text-white">
          <h1 className="mb-6 max-w-xl font-serif text-5xl leading-tight">
            Your Journey to Well-being Starts Here
          </h1>

          <p className="mb-8 text-2xl">Find Support and Guidance</p>

          <button className="rounded-md border-2 border-white px-10 py-3 text-lg hover:bg-white hover:text-[#4b5146]">
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

      {/* Intro */}
      <section className="grid items-center gap-10 px-24 py-12 md:grid-cols-2">
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

      {/* Cards */}
      <section className="bg-[#4b5146] px-20 py-24 text-center text-white">
        <h2 className="mb-20 font-serif text-5xl">
          Your Well-being is Our Priority
        </h2>

        <div className="grid gap-16 md:grid-cols-3">
          <div>
            <div className="mb-6 text-7xl">♡</div>
            <h3 className="mb-4 font-serif text-4xl">
              Expertise with <br /> Heart
            </h3>
            <p className="text-lg">
              Skilled therapists who truly <br /> understand and care
            </p>
          </div>

          <div>
            <div className="mb-6 text-6xl">🔒</div>
            <h3 className="mb-4 font-serif text-4xl">
              Confidentiality <br /> Assured
            </h3>
            <p className="text-lg">
              A safe space to open up without <br /> judgment
            </p>
          </div>

          <div>
            <div className="mb-6 text-6xl">🤝</div>
            <h3 className="mb-4 font-serif text-4xl">
              A Supportive <br /> Community
            </h3>
            <p className="text-lg">
              Connecting with others on a similar <br /> journey
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="flex items-center justify-between px-20 py-8 text-[#4b5146]">
        <p>© 2024. All Rights Reserved.</p>

        <div className="flex gap-8 text-xl font-bold">
          <span>f</span>
          <span>◎</span>
          <span>♪</span>
        </div>
      </footer>
    </div>
  );
}

export default Home;