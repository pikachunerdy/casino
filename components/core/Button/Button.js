import { CustomButton } from "./Button.module";

export default function Button(props) {
  return (
    <CustomButton
      variant={props.variant}
      onClick={props.handleClick}
      disabled={props.disabled ? props.disabled : false}
      className={props.className}
    >
      <div className="flex">
        {props.label}
        {props.children}
      </div>
    </CustomButton>
  );
}
