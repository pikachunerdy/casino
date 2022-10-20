import styled from "styled-components";

export const Card = styled.div.attrs({
  className:
    "bg-black1 flex flex-col justify-center items-center p-8 rounded-lg",
})``;

export const StatusContainer = styled.div.attrs({
  className: "flex justify-start items-center bg-green3 rounded-xl py-4 px-7",
})``;

export const CardText = styled.div.attrs({
  className: "font-medium text-[14px] leading-[18px] text-white1",
})``;

export const PosText = styled.div.attrs({
  className: "font-medium text-[14px] leading-[18px] text-green4",
})``;

export const NegText = styled.div.attrs({
  className: "font-medium text-[14px] leading-[18px] text-red2",
})``;
