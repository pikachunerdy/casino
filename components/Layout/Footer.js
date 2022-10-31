import {
  FooterContainer,
  FooterSubContainer,
  FooterTitle,
  FooterContent,
  FooterDivider,
  FooterSocialContent,
} from "./Footer.module";
import Link from "next/link";
import { FaTwitter, FaFacebookF, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="w-[90%] ">
      <FooterContainer>
        <FooterSubContainer>
          <FooterTitle>
            <span className="text-[22px]">D</span>isclosed
            <span className="text-[50px]"> .</span>
          </FooterTitle>
          <div className="mt-10">
            <FooterContent className="w-60">
              Our innovative algorithm guarantees genuine reviews. Using
              blockchain technology.
            </FooterContent>
            <div className="flex gap-4 mt-8">
              <FooterSocialContent>
                <FaTwitter />
              </FooterSocialContent>
              <FooterSocialContent>
                <FaFacebookF />
              </FooterSocialContent>
              <FooterSocialContent>
                <FaInstagram />
              </FooterSocialContent>
            </div>
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
