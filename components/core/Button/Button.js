import { CustomButton } from "./Button.module";

export default function Button(props) {
  return (
    <CustomButton
      variant={props.variant}
      onClick={props.handleClick()}
      disabled={props.disabled ? props.disabled : false}
    >
      {props.name}
      {props.children}
    </CustomButton>
  );
}
