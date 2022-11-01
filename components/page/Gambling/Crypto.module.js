import styled from "styled-components";

export const ReviewTitle = styled.div.attrs({
  className: "dark:text-white1 font-medium text-[20px] text-start",
})``;

export const ReviewContent = styled.div.attrs({
  className: "dark:text-white1 font-normal text-[12px] text-start",
})``;

export const SummaryCard = styled.div.attrs({
  className: "dark:bg-black1 bg-white py-16 pl-[72px]",
})``;

export const CryptoCard = styled.div.attrs({
  className: "dark:bg-black1 bg-white py-[61px] px-6 h-full",
})``;

export const ReviewButton = styled.button.attrs({
  className:
    "dark:bg-blue1 bg-blue3 rounded-lg dark:text-white text-white hover:text-black py-4 px-[107px] text-[20px] font-medium border border-transparent hover:bg-transparent hover:border-white transition",
})``;
