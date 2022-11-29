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
import logoBlack from "../../public/image/logos/Minimumlogo_black.png";
import logoWhite from "../../public/image/logos/Minimumlogo_white.png";
import Image from "next/image";
import React from "react";
import { ThemeContext } from "./Layout";

const Footer = () => {
  const theme = React.useContext(ThemeContext);
  return (
    <div className="w-[90%] ">
      <FooterContainer>
        <FooterSubContainer className="w-full md:w-1/3">
          <div>
            <Image
              src={theme.theme === "light" ? logoBlack : logoWhite}
              width={60}
              height={50}
            />
            <FooterContent className="w-60 mt-5">
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

        <FooterSubContainer className="w-full md:w-1/3 mt-3">
          <FooterTitle>Company</FooterTitle>
          <Link href="/about">
            <div className="mt-[30px] sm:mt-5 cursor-pointer">
              <FooterContent>About</FooterContent>
            </div>
          </Link>
        </FooterSubContainer>

        <FooterSubContainer className="w-full md:w-1/3 mt-3">
          <FooterTitle>Help</FooterTitle>
          <div className="mt-[30px] sm:mt-5">
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
