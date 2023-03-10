import styled from "styled-components";

export const SearchContainer = styled.div.attrs({
  className:
    "flex items-center gap-2 dark:bg-black1 bg-white dark:border-solid dark:border dark:border-[#3d3d3d] rounded-md py-3 px-4",
})``;

export const SearchInput = styled.input.attrs({
  className:
    "bg-transparent border-none placeholder:opacity-60 focus-visible:outline-0 dark:placeholder:text-dark4 w-full",
})``;
