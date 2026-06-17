function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-t-4 border-[#25545c] border-b-[6px] border-[#575757] bg-black">
      <div className="mx-auto flex h-[78px] max-w-[1750px] items-center justify-between px-24">
        <a href="#welcome" className="flex items-center gap-5">
          <img
            src="/modest_logo.png"
            alt="MODEST Logo"
            className="h-[58px] w-[58px] object-contain"
          />

          <span className="text-[26px] font-bold tracking-wide text-white">
            MODEST
          </span>
        </a>

        <nav>
          <ul className="flex items-center gap-7 text-[17px] font-medium text-white">
            <li><a href="#welcome" className="hover:text-purple-400">Welcome</a></li>
            <li><a href="#about" className="hover:text-purple-400">About</a></li>
            <li><a href="#research" className="hover:text-purple-400">Research & Publications</a></li>
            <li><a href="#framework" className="hover:text-purple-400">The MODEST Framework</a></li>

            <li className="group relative">
              <button className="hover:text-purple-400">
                Team <i className="fa-solid fa-caret-down ml-1 text-xs"></i>
              </button>

              <div className="absolute left-0 top-full hidden w-44 bg-[#111] py-3 shadow-xl group-hover:block">
                <a href="#members" className="block px-5 py-3 hover:bg-purple-700">Members</a>
                <a href="#students" className="block px-5 py-3 hover:bg-purple-700">Students</a>
              </div>
            </li>

            <li><a href="#services" className="hover:text-purple-400">Services</a></li>
            <li><a href="#news" className="hover:text-purple-400">News & Events</a></li>
            <li><a href="#contact" className="hover:text-purple-400">Contact</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;