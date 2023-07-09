import { useEffect, useState } from "react";
import About from "./components/about";
import Contact from "./components/contact";
import Experience from "./components/experience";
import Home from "./components/home";
import Loader from "./components/loader";
import Navbar from "./components/navbar";
import Project from "./components/project";
import SocialIcons from "./components/social-icons";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  const [showHomePage, setShowHomePage] = useState(false);

  useEffect(() => {
    // Simulating a delay for the loader animation
    setTimeout(() => {
      setIsLoading(false);
    }, 4000);

    setTimeout(() => {
      setShowHomePage(true);
    }, 4000);
  }, []);
  return (
    <>
      {isLoading && <Loader />}
      {showHomePage && (
        <div>
          <Navbar />
          <Home />
          <About />
          <Project />
          <Experience />
          <Contact />
          <SocialIcons />
        </div>
      )}
    </>
  );
}

export default App;
