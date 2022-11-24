import styled from "styled-components";

export const Container = styled.div.attrs({
  className: "mt-[123px] -translate-x-[5%] w-screen object-cover z-0",
})``;

export const ContentText = styled.div.attrs({
  className: "font-semibold text-[16px] leading-[30px] dark:text-white1",
})``;

export const SubTitle = styled.div.attrs({
  className: "font-semibold text-[24px] leading-[32px] dark:text-white1",
})``;

export const AboutTitle = styled.span.attrs({
  className: "dark:text-white font-bold text-[42px] text-center",
})``;

export const AboutContent = styled.span.attrs({
  className: "dark:text-white1 font-medium text-[18px]",
})``;

export const SubscribeContainer = styled.div.attrs({
  className:
    "flex flex-col justify-center items-center mx-[30px] bg-no-repeat bg-center dark:bg-[url('/background/Back3.png')] bg-[url('/background/Back6.png')] bg-cover rounded-[20px]",
})``;
