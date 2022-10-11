import styled from "styled-components";

export const Container = styled.div.attrs({
  className:
    "flex flex-col justify-center items-center w-full bg-no-repeat bg-center",
})``;

export const Title = styled.h1.attrs({
  className: "text-darkWhite font-semibold text-[64px] text-center w-2/3",
})``;

export const Content = styled.p.attrs({
  className: "text-darkWhite font-normal text-[18px] text-center w-1/2",
})``;

export const SubTitle = styled.h2.attrs({
  className: "text-darkWhite font-semibold text-[48px] text-center",
})``;
