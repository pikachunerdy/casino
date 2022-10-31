import { InputContainer, CustomInput } from "./Input.module";

const Input = (props) => {
  return (
    <InputContainer>
      <CustomInput
        placeholder={props.placeholder}
        value={props.value}
      ></CustomInput>
    </InputContainer>
  );
};

export default Input;
