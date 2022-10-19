import styled from "styled-components";

export const HeaderName = styled.th.attrs({
  className: "text-white1 font-medium text-[12px] text-start py-3 px-6",
})``;

export const ContentName = styled.p.attrs({
  className: "text-white1 font-medium text-[14px]",
})``;

export const ContentSiteName = styled.p.attrs({
  className: "text-white1 font-normal text-[14px]",
})``;

export const CustomButton = styled.button.attrs((props) => ({
  className: `text-green1 font-normal text-[12px]`,
}))``;

export const FeatureContent = styled.span.attrs(() => ({
  className: "text-white1 font-normal text-[14px]",
}))``;

export const RatingContent = styled.span.attrs(() => ({
  className: "text-white1 font-normal text-[14px]",
}))``;

export const WebsiteContent = styled.div.attrs(() => ({
  className: "flex items-center text-blue1 font-medium text-[14px]",
}))``;
