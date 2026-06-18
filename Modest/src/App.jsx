import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./PAGES/Home/Home";
import About from "./PAGES/About";
import ResearchPublication from "./PAGES/Research-Publication";
import Framework from "./PAGES/The MODEST Framework";
import Services from "./PAGES/Services";
import Members from "./PAGES/Members";
import Students from "./PAGES/Students";
import Contact from "./PAGES/Contact";
import NewsEvent from "./PAGES/NewsEvent";

function App() {
  return (
    <BrowserRouter>
      <Routes>

        {/* Home */}
        <Route path="/" element={<Home />} />

        {/* Main Pages */}
        <Route path="/about" element={<About />} />
        <Route
          path="/research-publications"
          element={<ResearchPublication />}
        />
        <Route path="/framework" element={<Framework />} />
        <Route path="/services" element={<Services />} />
        <Route path="/newsevents" element={<NewsEvent />} />
        <Route path="/contact" element={<Contact />} />

        {/* Team */}
        <Route path="/members" element={<Members />} />
        <Route path="/students" element={<Students />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;