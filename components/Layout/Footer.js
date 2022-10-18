import {
  FooterContainer,
  FooterSubContainer,
  FooterTitle,
  FooterContent,
  FooterDivider,
} from "./Footer.module";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="w-[90%]">
      <FooterContainer>
        <FooterSubContainer className="w-[15%] mr-[180px]">
          <FooterTitle>Disclosed</FooterTitle>
          <div className="mt-10">
            <FooterContent>
              Our innovative algorithm guarantees genuine reviews. Using
              blockchain technology.
            </FooterContent>
          </div>
        </FooterSubContainer>

        <FooterSubContainer className="w-[15%] mr-[243px]">
          <FooterTitle>Company</FooterTitle>
          <div className="mt-10">
            <FooterContent>About</FooterContent>
          </div>
        </FooterSubContainer>

        <FooterSubContainer className="w-[8%]">
          <FooterTitle>Help</FooterTitle>
          <div className="mt-10">
            <Link href="/">
              <FooterContent>Customer Support</FooterContent>
            </Link>
            <Link href="/">
              <FooterContent>Terms & Conditions</FooterContent>
            </Link>
            <Link href="/">
              <FooterContent>Privacy Policy</FooterContent>
            </Link>
          </div>
        </FooterSubContainer>
      </FooterContainer>
      <FooterDivider></FooterDivider>
      <div className="my-9 text-center font-normal text-[14px]">
        © Copyright 2022, All Rights Reserved by Disclosed
      </div>
    </div>
  );
};

export default Footer;
