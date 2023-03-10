import { useState, createContext, useEffect } from "react";
import { Wrapper } from "./Layout.module";
import Header from "./Header";
import Footer from "./Footer";

const ThemeContext = createContext({
  theme: "",
  toggleTheme: null,
});

export default function Layout({ children }) {
  const [theme, setTheme] = useState("dark");

  useEffect(() => {
    setTheme(
      localStorage.getItem("theme") ? localStorage.getItem("theme") : "dark"
    );
  }, []);

  const handleTheme = (colorTheme) => {
    setTheme(colorTheme);
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme: handleTheme }}>
      <div className={theme}>
        <Wrapper>
          <Header />
          <div className="flex flex-col justify-center w-[90%]">{children}</div>
          <Footer />
        </Wrapper>
      </div>
    </ThemeContext.Provider>
  );
}

export { ThemeContext };
