import styled from "styled-components";

export const HomeContainer = styled.div.attrs({
  className:
    "flex items-end justify-between bg-no-repeat bg-center -mx-[5.5%] min-h-screen bg-[url('/background/Back4.png')] pb-20",
})``;

export const Container = styled.div.attrs({
  className: "flex flex-col justify-center items-center bg-no-repeat bg-cover",
})``;

export const PageTitle = styled.div.attrs({
  className: "font-semibold text-[32px] leading-[30px] text-white1",
})``;

export const PageContent = styled.div.attrs({
  className: "font-normal text-[18px] leading-[32px] text-white1",
})``;
