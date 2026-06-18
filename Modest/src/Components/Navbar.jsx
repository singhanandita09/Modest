import { Link } from "react-router-dom";

function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-t-4 border-[#25545c] border-b-[6px] border-[#575757] bg-black">
      <div className="mx-auto flex h-[78px] max-w-[1750px] items-center justify-between px-24">
        <Link to="/" className="flex items-center gap-5">
          <img
            src="/modest_logo.png"
            alt="MODEST Logo"
            className="h-[58px] w-[58px] object-contain"
          />

          <span className="text-[26px] font-bold tracking-wide text-white">
            MODEST
          </span>
        </Link>
        

        <nav>
          <ul className="flex items-center gap-7 text-[17px] font-medium text-white">
            <li><Link to="/" className="hover:text-purple-400">Welcome</Link></li>

            <li><Link to="/about" className="hover:text-purple-400">About</Link></li>

            <li><Link to="/research-publications" className="hover:text-purple-400">Research & Publications</Link></li>

            <li><Link to="/framework" className="hover:text-purple-400">The MODEST Framework</Link></li>

            <li><Link to="/services" className="hover:text-purple-400">Services</Link></li>

            <li><Link to="/newsevents" className="hover:text-purple-400">News & Events</Link></li>

            <li><Link to="/contact" className="hover:text-purple-400">Contact</Link></li>
            <li className="group relative">
              <button className="hover:text-purple-400">
                Team <i className="fa-solid fa-caret-down ml-1 text-xs"></i>
              </button>

              <div className="absolute left-0 top-full hidden w-44 bg-[#111] py-3 shadow-xl group-hover:block">
                <a href="/members" className="block px-5 py-3 hover:bg-purple-700">Members</a>
                <a href="/students" className="block px-5 py-3 hover:bg-purple-700">Students</a>
              </div>
            </li>

            
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;