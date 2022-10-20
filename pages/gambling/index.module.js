import styled from "styled-components";

export const HomeContainer = styled.div.attrs({
  className:
    "flex items-end justify-between bg-no-repeat bg-center -mx-[5.5%] min-h-screen bg-[url('/background/Back5.png')] pb-20",
})``;

export const Container = styled.div.attrs({
  className: "flex flex-col justify-center items-center bg-no-repeat bg-center",
})``;

export const PageTitle = styled.div.attrs({
  className: "font-semibold text-[32px] leading-[30px] text-white1",
})``;

export const ContentTitle = styled.div.attrs({
  className: "font-medium text-[40px] leading-[49px] text-white1",
})``;

export const CardContainer = styled.div.attrs({
  className: "bg-black1 py-10 px-[65px] rounded-lg",
})``;

export const ProsText = styled.div.attrs({
  className: "font-medium text-[20px] leading-[69px] text-green2",
})``;

export const ConsText = styled.div.attrs({
  className: "font-medium text-[20px] leading-[69px] text-red1",
})``;

export const CardContent = styled.span.attrs({
  className: "text-white1 font-normal text-[18px]",
})``;

export const SubTitle = styled.div.attrs({
  className: "font-semibold text-[24px] leading-[32px] text-white1",
})``;

export const AboutTitle = styled.span.attrs({
  className: "text-white font-bold text-[42px] text-center",
})``;

export const SubscribeContainer = styled.div.attrs({
  className:
    "flex flex-col justify-center items-center -mx-10 bg-no-repeat bg-center bg-[url('/background/Back3.png')] bg-cover rounded-[20px] h-[318px]",
})``;

export const ReviewTitle = styled.div.attrs({
  className: "text-white1 font-medium text-[24px] text-start",
})``;

export const ReviewContent = styled.div.attrs({
  className: "text-white1 font-normal text-[14px] text-start",
})``;

export const SummaryCard = styled.div.attrs({
  className: "bg-black1 py-16 pl-[72px]",
})``;

export const CryptoCard = styled.div.attrs({
  className: "bg-black1 py-[61px] px-6",
})``;
