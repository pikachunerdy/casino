import styled from "styled-components";

export const CustomButton = styled.button.attrs((props) => ({
  className: `${
    props.variant == "model"
      ? "dark:bg-blue1 bg-blue3 border border-transparent dark:hover:bg-transparent hover:bg-dark5 hover:border-white"
      : "border dark:hover:bg-blue1 hover:bg-dark5 dark:bg-transparent bg-blue3 hover:border-transparent"
  } w-fit py-2 px-5 rounded-3xl dark:text-white text-white ${
    props.className
  } transition`,
}))``;
