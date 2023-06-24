import About from "./components/about";
import Contact from "./components/contact";
import Experience from "./components/experience";
import Home from "./components/home";
import Navbar from "./components/navbar";
import Project from "./components/project";
import SocialIcons from "./components/social-icons";

function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <About />
      <Project />
      <Experience />
      <Contact />
      <SocialIcons />
    </div>
  );
}

export default App;
