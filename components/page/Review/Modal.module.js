import styled from "styled-components";

export const InputContainer = styled.div.attrs({
  className:
    "flex items-center gap-2 bg-[#1f1f1e] border-solid border border-[#3d3d3d] rounded-md py-3 px-4",
})``;

export const CustomInput = styled.input.attrs({
  className:
    "bg-transparent border-none placeholder:opacity-60 focus-visible:outline-0 placeholder:text-[#667085] w-full",
})``;

export const CustomSelect = styled.select.attrs({
  className:
    "bg-[#1f1f1e] border-none placeholder:opacity-60 focus-visible:outline-0 text-[#667085] w-full outline-none",
})``;
