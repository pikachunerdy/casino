import * as React from "react";
import { FormContainer } from "./SwitchButton.module";
import Button from "./Button";

const SwitchButton = (props) => {
  const { tabs, currentTab, handleClick } = props;

  return (
    <FormContainer>
      {tabs.map((tab, index) => (
        <Button
          label={tab}
          variant={index === currentTab ? "model" : ""}
          className={`${
            index === currentTab
              ? "!border-transparent dark:hover:!bg-blue1 hover:!bg-blue3"
              : "!border-transparent dark:bg-transparent bg-dark5"
          }`}
          key={index}
          handleClick={() => handleClick(index)}
        />
      ))}
    </FormContainer>
  );
};

export default SwitchButton;
