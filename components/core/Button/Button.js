import { CustomButton } from "./Button.module";

export default function Button(props) {
  return (
    <CustomButton
      variant={props.variant}
      onClick={props.handleClick}
      disabled={props.disabled ? props.disabled : false}
    >
      <div className="flex">
        {props.name}
        {props.children}
      </div>
    </CustomButton>
  );
}
