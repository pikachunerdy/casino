import styled from "styled-components";

export const FormContainer = styled.div.attrs({
  className:
    "flex items-center justify-center dark:bg-[#030D1A] bg-[#F0F3F7] rounded-[36px] h-10 px-1 gap-1",
})``;

export const SwitchButton = styled.div.attrs((props) => ({
  className: `flex items-center justify-center w-8 h-8 rounded-full cursor-pointer transition ${
    props.active ? "dark:bg-[#102540] bg-[#FDFEFF]" : ""
  }`,
}))``;
