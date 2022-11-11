import logo from "./logo.svg";
import "./App.css";
import Header from "./components/header/Header";
import Nav from "./components/nav/Nav";
import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
import Experiance from "./components/experiance/Experiance";
import Portfolio from "./components/portfolio/Portfolio";

function App() {
  return (
    <>
      <Header />
      <Nav />
      <About />
      <Experiance />
      <Portfolio />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
