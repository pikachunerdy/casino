import styled from "styled-components";

export const Container = styled.div.attrs({
  className: "dark:bg-dark1 bg-white rounded-3xl px-[10px]",
})``;

export const Label = styled.span.attrs((props) => ({
  className: `${props.color} font-medium text-[14px]`,
}))``;
