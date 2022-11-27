import styled from "styled-components";

export const Container = styled.div.attrs({
  className: "tooltip w-[67px] h-[67px] transition relative",
})``;

export const Tooltip = styled.div.attrs({
  className:
    "tooltip-text invisible w-[120px] bg-white rounded-tl-[30px] rounded-tr-[30px] rounded-br-[30px] p-4 min-w-[235px] absolute bottom-[50px] left-[50px] z-10",
})``;

export const TooltipText = styled.div.attrs({
  className: "font-Inter font-medium text-[12px] leading-[15px] text-dark3",
})``;
