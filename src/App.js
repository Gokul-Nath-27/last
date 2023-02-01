import "./App.css";
import Navbar from "./components/navbar/Navbar";
import { FaArrowUp } from "react-icons/fa";
import { BrowserRouter } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import Footer from "./components/footer/Footer";
import Impdate from "./components/impdate/ImpDate";
import Committe from "./components/Committe/Committe";
import Aos from "aos";
import Hero from "./components/hero/Hero";
import CallForPaper from "./components/call-for-paper/CallForPaper";
import Publication from "./components/publication/Publication";
import About from "./components/About/About";

function App() {
  Aos.init();
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <main className="main-container">
          <section id="hero">
            <Hero />
          </section>
          <section id="paper-submission">
            <Impdate />
          </section>
          <section id="publications">
            <Publication />
          </section>
          <section id="committee">
            <Committe />
          </section>
          <section id="call-for-paper">
            <CallForPaper/>
          </section>
          <section id="about">
            <About />
          </section>
          <HashLink className="back-to-top" to="#">
          <FaArrowUp />
        </HashLink>
        </main>
      

        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
