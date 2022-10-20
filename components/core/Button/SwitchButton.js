import { FormContainer } from "./SwitchButton.module";
import Button from "./Button";

const SwitchButton = (props) => {
  return (
    <FormContainer>
      <Button
        label={props.firstLabel}
        handleClick={props.onClick}
        variant="model"
      ></Button>
      <Button
        label={props.firstLabel}
        handleClick={props.onClick}
        className="text-white2"
      ></Button>
    </FormContainer>
  );
};

export default SwitchButton;
