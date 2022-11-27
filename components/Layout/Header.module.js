import styled from "styled-components";

export const HeaderWrapper = styled.div.attrs({
  className:
    "absolute flex items-center justify-between w-[90%] mx-auto top-0 h-28",
})``;

export const RightActionsWrapper = styled.div.attrs({
  className: "flex items-center justify-between gap-3 hidden lg:inline-flex",
})``;

export const AuthActionsWrapper = styled.div.attrs({
  className: "flex gap-2",
})``;

export const MenuWrapper = styled.div.attrs({
  className: "flex gap-8 justify-between hidden lg:inline-flex",
})``;

export const Menu = styled.div.attrs((props) => ({
  className: `cursor-pointer font-medium ${
    props.active ? "text-blue1" : ""
  } hover:text-blue1 transition`,
}))``;

export const Logo = styled.div.attrs({
  className: "cursor-pointer",
})``;
