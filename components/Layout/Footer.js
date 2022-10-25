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
    <div className="w-[90%] ">
      <FooterContainer>
        <FooterSubContainer>
          <FooterTitle>Disclosed</FooterTitle>
          <div className="mt-10">
            <FooterContent className="w-60">
              Our innovative algorithm guarantees genuine reviews. Using
              blockchain technology.
            </FooterContent>
          </div>
        </FooterSubContainer>

        <FooterSubContainer>
          <FooterTitle>Company</FooterTitle>
          <div className="mt-10">
            <FooterContent>About</FooterContent>
          </div>
        </FooterSubContainer>

        <FooterSubContainer>
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
