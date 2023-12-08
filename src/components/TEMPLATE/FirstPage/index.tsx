import * as Styles from "./styles";
import { Header, BodyHome, LeftMenuMobile } from "@/components";
import Image from 'next/image'

export function FirstPage() {
  return (
    <Styles.Wrapper>
      <LeftMenuMobile />
      <Header />
      <BodyHome/>
    </Styles.Wrapper>
  );
}
