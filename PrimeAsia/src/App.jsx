import "./App.css";
import Navigation from "./components/Navigation";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import WeAre from "./components/WeAre";

const App = () => {
  return (
    <div>
      <Navigation />
      <Hero />
      <WeAre />
      <Footer />
    </div>
  );
};

export default App;
