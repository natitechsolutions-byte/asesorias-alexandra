import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import History from "./pages/History";
import ServiceDetail from "./pages/ServiceDetail";
import Footer from "./components/Footer";
import Services from "./components/Services";

function App() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-gradient-to-br from-white via-[#faf8f3] to-[#f8f2e8]">
      <div className="fixed top-0 right-0 w-[700px] h-[700px] bg-[#C8A24A]/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="fixed bottom-0 left-0 w-[500px] h-[500px] bg-[#071B3A]/5 rounded-full blur-3xl pointer-events-none"></div>

      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/quiensomos" element={<Home />} />
        <Route path="/services" element={<Home />} />
        <Route path="/preguntas" element={<Home />} />
        <Route path="/contact" element={<Home />} />
        <Route path="/quiensomos/historia" element={<History />} />
        <Route path="/services/:slug" element={<ServiceDetail />} />
        <Route path="*" element={<Home />} />
      </Routes>

      <Footer />
    </main>
  );
}

export default App;