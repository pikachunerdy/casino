import styled from "styled-components";

export const CustomButton = styled.button.attrs((props) => ({
  className: `${
    props.variant == "model"
      ? "bg-blue1 border border-transparent hover:bg-transparent hover:border-white"
      : "border hover:bg-blue1 hover:border-transparent"
  } w-fit py-2 px-5 rounded-3xl ${props.className} transition`,
}))``;
