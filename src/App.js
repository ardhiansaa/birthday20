import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import { Banner } from "./Components/Banner";
import { Skills } from "./Components/Skills";
import { Projects } from "./Components/Projects";
import { Player } from "./Components/Player";
import { Footer } from "./Components/Footer";

function App() {
  return (
    <div className="App">
      <Banner />
      <Skills />
      <Projects />
      <Player />
      <Footer />
    </div>
  );
}

export default App;
