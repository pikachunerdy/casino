import styled from "styled-components";

export const Card = styled.div.attrs((props) => ({
  className: `${
    props.backgroundColor ? props.backgroundColor : "dark:bg-black1 bg-white"
  }`,
}))``;

export const Date = styled.div.attrs({
  className: "text-blue1 font-semibold text-[14px]",
})``;

export const UserName = styled.div.attrs({
  className: "dark:text-white1 font-semibold text-[26px]",
})``;

export const UserEmail = styled.div.attrs({
  className: "dark:text-white1 font-normal text-[16px]",
})``;

export const Content = styled.div.attrs({
  className: "dark:text-white1 font-normal text-[16px]",
})``;

export const CardBadge = styled.div.attrs({
  className: "dark:text-white bg-green5 rounded-[10px] leading-[18px] px-2 py-1",
})``;
export const CardBadge2 = styled.div.attrs({
  className: "dark:text-white bg-red2 rounded-[10px] leading-[18px] px-2 py-1",
})``;
export const CardBadge1 = styled.div.attrs({
  className: "dark:text-black bg-[#fef08a] rounded-[10px] leading-[18px] px-2 py-1",
})``;
