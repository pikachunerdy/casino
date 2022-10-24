import styled from "styled-components";

export const Container = styled.div.attrs({
  className:
    "flex flex-col justify-center items-center w-full bg-no-repeat bg-center",
})``;

export const Title = styled.p.attrs({
  className: "text-white1 font-semibold text-[64px] text-center w-2/3",
})``;

export const Content = styled.p.attrs({
  className: "text-white1 font-normal text-[18px] text-center w-1/2",
})``;

export const SubTitle = styled.h2.attrs({
  className: "text-white1 font-semibold text-[48px] text-center",
})``;

export const IconTitle = styled.span.attrs({
  className: "text-white1 font-normal text-[16px]",
})``;

export const NewsSubTitle = styled.span.attrs({
  className: "text-white1 font-medium text-[16px]",
})``;

export const HomeCard = styled.span.attrs({
  className:
    "w-full bg-black1 py-5 px-7 rounded-xl cursor-pointer hover:scale-105 transition",
})``;

export const HomeCardTitle = styled.span.attrs({
  className: "text-white1 font-medium text-[22px]",
})``;

export const About = styled.span.attrs({
  className:
    "flex flex-col items-center gap-10 w-full bg-black1 pt-12 pb-[135px] px-[165px] text-center",
})``;

export const AboutTitle = styled.span.attrs({
  className: "font-semibold text-[42px] text-center",
})``;

export const AboutContent = styled.span.attrs({
  className: "text-white1 font-medium text-[18px]",
})``;

export const SubscribeContainer = styled.div.attrs({
  className:
    "flex flex-col justify-center items-center -mx-10 bg-no-repeat bg-center bg-[url('/background/Back3.png')] bg-cover rounded-[20px] h-[318px]",
})``;
