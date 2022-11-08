import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
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
    link: "/learn",
  },
  {
    label: "FAQs",
    link: "/faq",
  },
];

export default function Header({ children }) {
  const router = useRouter();

  return (
    <HeaderWrapper>
      <Logo>
        <Link href="/">
          <Image src="/image/logo.svg" alt="logo" width={182} height={24} />
        </Link>
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
          <Button label="Login"></Button>
          <Button label="Signup" variant="model"></Button>
        </AuthActionsWrapper>
      </RightActionsWrapper>
    </HeaderWrapper>
  );
}
