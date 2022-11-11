import styled from "styled-components";

export const Card = styled.div.attrs({
  className:
    "dark:bg-black1 bg-white flex flex-col justify-center items-center h-full p-8",
})``;

export const StatusContainer = styled.div.attrs({
  className:
    "flex justify-start items-center dark:bg-green3 bg-white rounded-xl py-4 px-7 dark:border-none border border-solid border-[#E5E5EA] rounded-xl",
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
