import * as Styles from "./styles";
import { Header, BodyHome, LeftMenuMobile } from "@/components";
export function FirstPage() {
  return (
    <Styles.Wrapper>
      <LeftMenuMobile />

      <Header />
      {/* <BodyHome/> */}
    </Styles.Wrapper>
  );
}
