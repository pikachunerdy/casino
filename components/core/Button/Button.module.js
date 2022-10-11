import styled from "styled-components";

export const CustomButton = styled.button.attrs((props) => ({
  className: `${
    props.variant == "model" ? "bg-darkBlue" : ""
  } py-2 px-5 rounded-3xl`,
}))``;
