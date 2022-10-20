import styled from "styled-components";

export const Container = styled.div.attrs({
  className: "bg-dark1 rounded-3xl px-[10px]",
})``;

export const Label = styled.p.attrs((props) => ({
  className: `${props.color} font-medium text-[14px]`,
}))``;
