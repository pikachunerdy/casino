import styled from "styled-components";

export const FooterContainer = styled.div.attrs({
  className: "grid grid-cols-3 gap-5",
})``;

export const FooterSubContainer = styled.div.attrs({
  className: "flex flex-col w-full text-left",
})``;

export const FooterTitle = styled.div.attrs({
  className: "text-blue3 font-medium text-[18px]",
})``;

export const FooterContent = styled.div.attrs({
  className:
    "text-white1 font-normal text-[14px] leading-[26px] cursor-pointer hover:text-blue1 transition",
})``;

export const FooterDivider = styled.div.attrs({
  className: "border-t w-full mt-24",
})``;
