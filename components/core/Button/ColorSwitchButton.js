import * as React from "react";
import {
  FormContainer,
  SwitchButton as Button,
} from "./ColorSwitchButton.module";
import { FaMoon, FaSun } from "react-icons/fa";
import { ThemeContext } from "../../Layout/Layout";

const ColorSwitchButton = (props) => {
  const [colorTheme, setColorTheme] = React.useState(1);
  const theme = React.useContext(ThemeContext);

  const handleColorTheme = () => {
    if (colorTheme === 1) {
      setColorTheme(0);
      localStorage.setItem("theme", "light");
      theme.toggleTheme("light");
    } else {
      setColorTheme(1);
      localStorage.setItem("theme", "dark");
      theme.toggleTheme("dark");
    }
  };

  React.useEffect(() => {
    if (
      localStorage.getItem("theme") &&
      localStorage.getItem("theme") === "light"
    ) {
      setColorTheme(0);
    }
  }, []);

  return (
    <FormContainer>
      <Button active={colorTheme === 0} onClick={handleColorTheme}>
        <FaSun />
      </Button>
      <Button active={colorTheme === 1} onClick={handleColorTheme}>
        <FaMoon />
      </Button>
    </FormContainer>
  );
};

export default ColorSwitchButton;
