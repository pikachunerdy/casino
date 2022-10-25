import * as React from "react";
import {
  FormContainer,
  SwitchButton as Button,
} from "./ColorSwitchButton.module";
import { FaMoon, FaSun } from "react-icons/fa";

const ColorSwitchButton = (props) => {
  const [colorTheme, setColorTheme] = React.useState(1);

  return (
    <FormContainer>
      <Button active={colorTheme === 0} onClick={() => setColorTheme(0)}>
        <FaSun />
      </Button>
      <Button active={colorTheme === 1} onClick={() => setColorTheme(1)}>
        <FaMoon />
      </Button>
    </FormContainer>
  );
};

export default ColorSwitchButton;