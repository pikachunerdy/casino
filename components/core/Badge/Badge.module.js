import styled from "styled-components";

export const Container = styled.div.attrs({
  className: "dark:bg-dark1 dark:border-transparent border rounded-3xl px-[10px]",
})``;

export const Label = styled.span.attrs((props) => ({
  className: `${props.color} light:border font-medium text-[14px]`,
}))``;
