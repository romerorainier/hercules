import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import HowItWorks from "./pages/HowItWorks";
import Pricing from "./pages/Pricing";
import GetStarted from "./pages/GetStarted";
import Solutions from "./pages/Solutions";
import Resources from "./pages/Resources";
import ContactSupport from "./pages/ContactUs";

function App() {
  return (
    <Router>
      <div className="app-container" style={{ width: "100%", margin: 0, padding: 0 }}>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/how-it-works" element={<HowItWorks />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/get-started" element={<GetStarted />} />
          <Route path="/solutions" element={<Solutions />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/getstarted" element={<GetStarted />} />
          <Route path="/contactus" element={<ContactSupport />} />
        </Routes>
      </div>
       {/* Shared Footer */}
        <Footer />
    </Router>
  );
}

export default App;
