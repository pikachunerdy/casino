import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import Modal from "./Modal";
import {
  HeaderWrapper,
  Logo,
  RightActionsWrapper,
  AuthActionsWrapper,
  MenuWrapper,
  Menu,
} from "./Header.module";
import Button from "../core/Button/Button";
import ColorSwitchButton from "../core/Button/ColorSwitchButton";

const ratingOptions = [
  { value: 6, label: 6, className: "dropdown-menu-option" },
  { value: 5, label: 5, className: "dropdown-menu-option" },
  { value: 4, label: 4, className: "dropdown-menu-option" },
  { value: 3, label: 3, className: "dropdown-menu-option" },
  { value: 2, label: 2, className: "dropdown-menu-option" },
  { value: 1, label: 1, className: "dropdown-menu-option" },
];

const menus = [
  {
    label: "Top 10 Casinos",
    link: "/gambling",
  },
  {
    label: "All Casinos",
    link: "/casinos",
  },
  {
    label: "About",
    link: "/about",
  },
  {
    label: "Blog",
    link: "/blogs",
  },
  {
    label: "Profile",
    link: "/profile",
  },
  {
    label: "Reviews",
    link: "/reviews",
  },
];

export default function Header({ children }) {
  const router = useRouter();
  const AppLink = React.forwardRef((props, ref) => (
    <Link innerRef={ref} {...props} />
  ));

  let [isOpen, setIsOpen] = useState(false);
  let [modalTitle, setModalTitle] = useState("");

  const handleSigninChange = () => {
    setIsOpen(!isOpen);
    setModalTitle("In");
  };

  const handleSignupChange = () => {
    setIsOpen(!isOpen);
    setModalTitle("Up");
  };

  const handleChange = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    setIsOpen(isOpen);
    if (!isOpen) {
      document.documentElement.style.overflow = "auto";
    } else {
      document.documentElement.style.overflow = "hidden";
    }
  }, [isOpen]);

  return (
    <>
      <HeaderWrapper>
        <Logo>
          <AppLink href="/">
            <a>
              <Image src="/image/logo.svg" alt="logo" width={300} height={50} />
            </a>
          </AppLink>
        </Logo>

        <MenuWrapper>
          {menus.map((menu, index) => (
            <Menu key={index} active={router.asPath.indexOf(menu.link) != -1}>
              <Link href={menu.link}>{menu.label}</Link>
            </Menu>
          ))}
        </MenuWrapper>

        <RightActionsWrapper>
          <ColorSwitchButton />

          <AuthActionsWrapper>
            <Button
              label="Login"
              handleClick={() => handleSigninChange()}
            ></Button>
            <Button
              label="Signup"
              variant="model"
              handleClick={() => handleSignupChange()}
            ></Button>
          </AuthActionsWrapper>
        </RightActionsWrapper>
      </HeaderWrapper>
      <Modal
        open={isOpen}
        title={modalTitle}
        content={
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
        }
        onConfirm={() => console.log("Button confirm")}
        onDiscard={() => console.log("Button discard")}
        buttons={[
          // {
          //   role: "custom",
          //   onClick: () => console.log("custom test"),
          //   toClose: true,
          //   classes:
          //     "bg-zinc-500/20 px-4 py-2 rounded-lg hover:bg-zinc-500/30 transition-all duration-200",
          //   label: "Custom",
          // },
          // {
          //   role: "discard",
          //   toClose: true,
          //   classes:
          //     "bg-zinc-500/20 px-4 py-2 rounded-lg hover:bg-zinc-500/30 transition-all duration-200",
          //   label: "Discard",
          // },
          {
            role: "confirm",
            toClose: true,
            classes:
              "dark:bg-blue1 bg-blue3 border border-transparent hover:bg-transparent hover:border-white w-fit py-2 px-5 rounded-3xl transition w-1/2 mx-auto",
            label: "Register/Login",
          },
        ]}
        handleChange={handleChange}
        ratingOptions={ratingOptions}
      >
      </Modal>
    </>
  );
}
