import styled from "styled-components";

export const CustomButton = styled.button.attrs((props) => ({
  className: `${
    props.variant == "model" ? "bg-blue1" : ""
  } py-2 px-5 rounded-3xl`,
}))``;
