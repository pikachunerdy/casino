import * as React from "react";
import { FormContainer } from "./SwitchButton.module";
import Button from "./Button";

const SwitchButton = (props) => {
  const { tabs } = props;
  const [selectedIndex, setSelectedIndex] = React.useState(0);

  return (
    <FormContainer>
      {tabs.map((tab, index) => (
        <Button
          label={tab}
          variant={index === selectedIndex ? "model" : ""}
          className={`${
            index === selectedIndex
              ? "!border-transparent hover:!bg-blue1"
              : "!border-transparent"
          }`}
          key={index}
          handleClick={() => setSelectedIndex(index)}
        />
      ))}
    </FormContainer>
  );
};

export default SwitchButton;
