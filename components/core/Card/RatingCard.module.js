import styled from "styled-components";

export const Card = styled.div.attrs({
  className:
    "dark:bg-black1 bg-white flex flex-col justify-center items-center h-full p-8",
})``;

export const StatusContainer = styled.div.attrs({
  className: "flex justify-start items-center bg-green3 rounded-xl py-4 px-7",
})``;

export const CardText = styled.div.attrs({
  className: "font-medium text-[14px] leading-[18px] dark:text-white1",
})``;

export const PosText = styled.div.attrs({
  className: "font-medium text-[14px] leading-[18px] text-green4",
})``;

export const NegText = styled.div.attrs({
  className: "font-medium text-[14px] leading-[18px] text-red2",
})``;
