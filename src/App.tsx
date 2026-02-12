import { useState, useEffect, useRef, Suspense } from "react";
import { GlobalStyles } from "./styles/GlobalStyles";
import { lightTheme, darkTheme } from "./styles/theme";
import { ThemeProvider } from "styled-components";
import Topbar from "./components/topbar/Topbar";
import Intro from "./components/introduction/Intro";
import About from "./components/about/About";
import Experiences from "./components/experiences/Experiences";
import Projects from "./components/projects/Projects";
import Blogs from "./components/blogs/Blogs";
import Certificates from "./components/certificates/Certificates";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
import Skills from "./components/skills/Skills";
import Spinner from "./components/spinner/Spinner";

type Theme = "dark" | "light";

function App() {
  const [theme, setTheme] = useState<Theme>(
    () => (localStorage.getItem("theme") as Theme) ?? "dark",
  );
  const toggleTheme = () => {
    setTheme((prev) => {
      const nextTheme: Theme = prev === "dark" ? "light" : "dark";
      localStorage.setItem("theme", nextTheme);
      return nextTheme;
    });
  };
  const lastScrollTop = useRef(0);

  useEffect(() => {
    // Function to reveal elements on scroll
    const reveal = () => {
      const scrollTop =
        window.pageYOffset || document.documentElement.scrollTop;

      // Check if 'navbar' element exists in the DOM
      const navbar = document.getElementById("sticky-topbar"); // Replace 'yourNavbarId' with the actual ID of your navbar element

      if (navbar) {
        if (scrollTop > lastScrollTop.current) {
          navbar.style.top = "-80px";
        } else {
          navbar.style.top = "0";
        }
      }

      lastScrollTop.current = scrollTop;

      const reveals = document.querySelectorAll(".reveal");
      for (let i = 0; i < reveals.length; i++) {
        const windowHeight = window.innerHeight;
        const elementTop = reveals[i].getBoundingClientRect().top;
        const elementVisible = window.innerWidth <= 768 ? 50 : 100;

        if (elementTop < windowHeight - elementVisible) {
          reveals[i].classList.add("active");
          localStorage.setItem(`reveal-${i}`, "active");
        } else {
          reveals[i].classList.remove("active");
        }
      }
    };

    // Attach the 'reveal' function to the scroll event
    window.addEventListener("scroll", reveal);

    // Cleanup the event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", reveal);
    };
  }, []); // Empty dependency array to ensure it runs once

  return (
    <ThemeProvider theme={theme === "dark" ? darkTheme : lightTheme}>
      <Suspense fallback={<Spinner />}>
        <div className="App">
          <GlobalStyles />
          <Topbar toggleTheme={toggleTheme} isDarkTheme={theme === "dark"} />
          <Intro />
          <About />
          <Skills />
          <Experiences />
          <Projects />
          <Blogs />
          <Certificates />
          <Contact />
          <Footer />
        </div>
      </Suspense>
    </ThemeProvider>
  );
}

export default App;
