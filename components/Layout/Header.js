import Image from "next/image";
import Link from "next/link";
import {
  HeaderWrapper,
  Logo,
  RightActionsWrapper,
  AuthActionsWrapper,
  MenuWrapper,
  Menu,
} from "./Header.module";
import Button from "../core/Button/Button";
import SwitchButton from "../core/Button/SwitchButton";

const menus = [
  {
    label: "Top 10 Casinos",
    link: "/gambling",
  },
  {
    label: "Reviews",
    link: "",
  },
  {
    label: "About",
    link: "",
  },
  {
    label: "Blog",
    link: "/learn",
  },
  {
    label: "FAQs",
    link: "",
  },
];

export default function Header({ children }) {
  return (
    <HeaderWrapper>
      <Logo>
        <Link href="/">
          <Image src="/image/logo.svg" width={182} height={24} />
        </Link>
      </Logo>

      <MenuWrapper>
        {menus.map((menu, index) => (
          <Menu key={index}>
            <Link href={menu.link}>{menu.label}</Link>
          </Menu>
        ))}
      </MenuWrapper>

      <RightActionsWrapper>
        <SwitchButton />

        <AuthActionsWrapper>
          <Button label="Login"></Button>
          <Button label="Signup" variant="model"></Button>
        </AuthActionsWrapper>
      </RightActionsWrapper>
    </HeaderWrapper>
  );
}
