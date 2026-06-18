import { NavLink } from "react-router-dom";

function Navbar() {
  const linkClass = ({ isActive }) =>
    isActive ? "text-purple-400" : "hover:text-purple-400";

  return (
    <header className="sticky top-0 z-50 w-full border-t-4 border-[#25545c] border-b-[6px] border-[#575757] bg-black">
      <div className="mx-auto flex h-[78px] max-w-[1750px] items-center justify-between px-24">
        <NavLink to="/" className="flex items-center gap-5">
          <img
            src="/modest_logo.png"
            alt="MODEST Logo"
            className="h-[58px] w-[58px] object-contain"
          />

          <span className="text-[26px] font-bold tracking-wide text-white">
            MODEST
          </span>
        </NavLink>

        <nav>
          <ul className="flex items-center gap-7 text-[17px] font-medium text-white">
            <li>
              <NavLink to="/" className={linkClass}>
                Welcome
              </NavLink>
            </li>

            <li>
              <NavLink to="/about" className={linkClass}>
                About
              </NavLink>
            </li>

            <li>
              <NavLink to="/research-publications" className={linkClass}>
                Research & Publications
              </NavLink>
            </li>

            <li>
              <NavLink to="/framework" className={linkClass}>
                The MODEST Framework
              </NavLink>
            </li>

            <li>
              <NavLink to="/services" className={linkClass}>
                Services
              </NavLink>
            </li>

            <li>
              <NavLink to="/newsevents" className={linkClass}>
                News & Events
              </NavLink>
            </li>

            <li>
              <NavLink to="/contact" className={linkClass}>
                Contact
              </NavLink>
            </li>

            <li className="group relative">
              <button className="hover:text-purple-400">
                Team <i className="fa-solid fa-caret-down ml-1 text-xs"></i>
              </button>

              <div className="absolute left-0 top-full hidden w-44 bg-[#111] py-3 shadow-xl group-hover:block">
                <NavLink
                  to="/members"
                  className="block px-5 py-3 hover:bg-purple-700"
                >
                  Members
                </NavLink>

                <NavLink
                  to="/students"
                  className="block px-5 py-3 hover:bg-purple-700"
                >
                  Students
                </NavLink>
              </div>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;