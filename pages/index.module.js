import styled from "styled-components";

export const Container = styled.div.attrs({
  className:
    "flex flex-col justify-center items-center w-full bg-no-repeat bg-center",
})``;

export const Title = styled.p.attrs({
  className:
    "dark:text-white1 font-semibold md:text-[64px] text-[38px] text-center md:w-2/3 w-full",
})``;

export const Content = styled.p.attrs({
  className:
    "dark:text-white1 font-normal text-[18px] text-center md:w-1/2 w-full",
})``;

export const SubTitle = styled.h2.attrs({
  className:
    "dark:text-white1 font-semibold md:text-[48px] text-[39px] mt-[71px] md:mt-0 text-center",
})``;

export const IconTitle = styled.span.attrs({
  className: "dark:text-white1 font-normal text-[16px]",
})``;

export const NewsSubTitle = styled.span.attrs({
  className: "dark:text-white1 font-medium text-[16px]",
})``;

export const HomeCard = styled.span.attrs({
  className:
    "w-full dark:bg-black1 bg-white py-5 px-7 rounded-xl cursor-pointer hover:scale-105 transition",
})``;

export const HomeCardTitle = styled.span.attrs({
  className: "dark:text-white1 font-medium text-[22px]",
})``;

export const About = styled.span.attrs({
  className:
    "flex flex-col items-center gap-10 w-full dark:bg-black1 bg-white pt-[70px] px-[31px] pb-[31px] md:pt-12 md:pb-[115px] md:px-[165px] text-center",
})``;

export const AboutTitle = styled.span.attrs({
  className: "font-semibold text-[28px] md:text-[42px] text-center",
})``;

export const AboutContent = styled.span.attrs({
  className:
    "dark:text-white1 font-normal text-[14px] leading-[38px] md:font-medium md:text-[18px] md:leading-[30px]",
})``;

export const SubscribeContainer = styled.div.attrs({
  className:
    "flex flex-col justify-center items-center md:-mx-10 bg-no-repeat bg-center bg-[url('/background/Back3.png')] bg-cover rounded-[20px] h-[318px]",
})``;

export const AvatarContainer = styled.div.attrs({
  className: "hidden lg:inline-block lg:absolute cursor-pointer",
})`
  bottom: ${(props) => props.bottom};
  left: ${(props) => props.left};
`;
