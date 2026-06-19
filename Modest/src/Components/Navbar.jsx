import { useState } from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  const [open, setOpen] = useState(false);

  const linkClass = ({ isActive }) =>
    isActive
      ? "text-[#6B705C] font-semibold"
      : "text-black hover:text-[#867a6b]";

  return (
    <header className="sticky top-0 z-50 w-full border-b border-[#d6cec4] bg-[#F5F1EC]">
      <div className="mx-auto flex h-[78px] max-w-[1750px] items-center justify-between px-5 md:px-10 lg:px-24">
        <NavLink to="/" className="flex items-center gap-3">
          <img
            src="/modest_logo.png"
            alt="MODEST Logo"
            className="h-[48px] w-[48px] md:h-[58px] md:w-[58px] object-contain"
          />

          <span className="text-[22px] md:text-[26px] font-bold tracking-wide text-black">
            MODEST
          </span>
        </NavLink>

        <button
          onClick={() => setOpen(!open)}
          className="text-3xl lg:hidden text-black"
        >
          ☰
        </button>

        <nav className="hidden lg:block">
          <ul className="flex items-center gap-7 text-[17px] font-medium">
            <li><NavLink to="/" className={linkClass}>Welcome</NavLink></li>
            <li><NavLink to="/about" className={linkClass}>About</NavLink></li>
            <li><NavLink to="/research-publications" className={linkClass}>Research & Publications</NavLink></li>
            <li><NavLink to="/framework" className={linkClass}>The MODEST Framework</NavLink></li>
            <li><NavLink to="/services" className={linkClass}>Services</NavLink></li>
            <li><NavLink to="/newsevents" className={linkClass}>News & Events</NavLink></li>

            <li className="group relative">
              <button className="text-black hover:text-[#867a6b]">
                Team <i className="fa-solid fa-caret-down ml-1 text-xs"></i>
              </button>

              <div className="absolute left-0 top-full hidden w-44 bg-[#F5F1EC] py-3 shadow-xl group-hover:block">
                <NavLink to="/members" className="block px-5 py-3 hover:bg-[#867a6b] hover:text-white">
                  Members
                </NavLink>
                <NavLink to="/students" className="block px-5 py-3 hover:bg-[#867a6b] hover:text-white">
                  Students
                </NavLink>
              </div>
            </li>

            <li><NavLink to="/contact" className={linkClass}>Contact</NavLink></li>
          </ul>
        </nav>
      </div>

      {open && (
        <nav className="lg:hidden bg-[#F5F1EC] border-t border-[#d6cec4]">
          <ul className="flex flex-col px-6 py-5 gap-4 text-[16px] font-medium">
            <li><NavLink onClick={() => setOpen(false)} to="/" className={linkClass}>Welcome</NavLink></li>
            <li><NavLink onClick={() => setOpen(false)} to="/about" className={linkClass}>About</NavLink></li>
            <li><NavLink onClick={() => setOpen(false)} to="/research-publications" className={linkClass}>Research & Publications</NavLink></li>
            <li><NavLink onClick={() => setOpen(false)} to="/framework" className={linkClass}>The MODEST Framework</NavLink></li>
            <li><NavLink onClick={() => setOpen(false)} to="/services" className={linkClass}>Services</NavLink></li>
            <li><NavLink onClick={() => setOpen(false)} to="/newsevents" className={linkClass}>News & Events</NavLink></li>
            <li><NavLink onClick={() => setOpen(false)} to="/members" className={linkClass}>Members</NavLink></li>
            <li><NavLink onClick={() => setOpen(false)} to="/students" className={linkClass}>Students</NavLink></li>
            <li><NavLink onClick={() => setOpen(false)} to="/contact" className={linkClass}>Contact</NavLink></li>
          </ul>
        </nav>
      )}
    </header>
  );
}

export default Navbar;