function Footer() {
  return (
    <footer className="bg-[#f4efeb] text-[#4b5146]">
      <div className="mx-auto max-w-[1450px] px-12 py-16">
        <div className="grid grid-cols-1 gap-20 lg:grid-cols-3">
          <div className="w-full max-w-[360px] justify-self-start">
            <h2 className="mb-6 font-serif text-3xl font-semibold text-[#4b5146]">
              Project Identity
            </h2>

            <p className="text-base leading-9">
              Multimodal Analysis for Mental Disorder Recognition to Improve
              Mental Health and Well-being. An initiative at the BDA Lab, IIIT
              Allahabad, aimed at integrating AI-driven diagnostics with
              culturally grounded perspectives to support more accessible,
              equitable, and context-sensitive mental health solutions.
            </p>
          </div>

          <div className="w-full max-w-[360px] justify-self-center">
            <h2 className="mb-6 font-serif text-3xl font-semibold text-[#4b5146]">
              Contact Us
            </h2>

            <h3 className="mb-3 text-lg font-semibold">
              Principal Investigator: Prof. Sonali Agarwal
            </h3>

            <p className="mb-6 text-base">
              Department of Information Technology
            </p>

            <div className="space-y-4 text-base">
              <div className="flex items-center gap-4">
                <i className="fa-regular fa-envelope text-lg text-[#4b5146]"></i>
                <span>sonali@iiita.ac.in</span>
              </div>

              <div className="flex items-center gap-4">
                <i className="fa-solid fa-phone text-lg text-[#4b5146]"></i>
                <span>+91-532-2922424</span>
              </div>

              <div className="flex items-center gap-4">
                <i className="fa-solid fa-location-arrow text-lg text-[#4b5146]"></i>
                <span>Jhalwa, Prayagraj - 211015</span>
              </div>
            </div>
          </div>

          <div className="w-full max-w-[360px] justify-self-end">
            <h2 className="mb-6 font-serif text-3xl font-semibold text-[#4b5146]">
              Quick Links
            </h2>

            <ul className="space-y-5 text-base">
              <li>
                <a
                  href="https://iiita.ac.in"
                  target="_blank"
                  rel="noreferrer"
                  className="transition hover:text-[#3f453a]"
                >
                  IIITA Official Website
                </a>
              </li>

              <li>
                <a
                  href="https://cstup.iiita.ac.in"
                  target="_blank"
                  rel="noreferrer"
                  className="transition hover:text-[#3f453a]"
                >
                  CSTUP Portal
                </a>
              </li>

              <li>
                <a
                  href="#/research-publications"
                  className="transition hover:text-[#3f453a]"
                >
                  Research Publications
                </a>
              </li>

              <li>
                <a href="#/services" className="transition hover:text-[#3f453a]">
                  Mental Health Support Resources
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex w-full items-center justify-center">
          <div className="flex items-center gap-5">
            <span className="text-base font-medium">Get Connect :</span>

            <button className="rounded-lg bg-[#4b5146] px-9 py-3 text-sm font-semibold text-white transition duration-300 hover:bg-[#3f453a]">
              Join Us
            </button>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-300">
        <div className="mx-auto flex max-w-[1450px] items-center justify-between px-12 py-6">
          <p className="text-sm">© 2024. All Rights Reserved.</p>

          <div className="flex gap-6 text-xl">
            <a href="#" aria-label="Facebook">
              <i className="fa-brands fa-facebook-f transition hover:text-[#3f453a]"></i>
            </a>

            <a href="#" aria-label="Instagram">
              <i className="fa-brands fa-instagram transition hover:text-[#3f453a]"></i>
            </a>

            <a href="#" aria-label="TikTok">
              <i className="fa-brands fa-tiktok transition hover:text-[#3f453a]"></i>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;