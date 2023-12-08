import IconMenuHeader from '@/assets/svg/openMenuMobile.svg'
import { NavBarHeader, LeftMenuMobile } from "@/components";
import * as Styles from "./styles";
import { useGlobal } from '@/hooks/context/global';

export function Header() {
  const {setVisibleMenuMobile} = useGlobal()
  return (
    <Styles.Content>
      <div className="contentNav">
        <NavBarHeader />
      </div>
      <div className='menuHeaderMobile' >
        <IconMenuHeader onClick={()=> setVisibleMenuMobile(true)}/>
      </div>
      <div className="nameEndLogo">
        <h1>Portifolio</h1>
      </div>


    </Styles.Content>
  );
}
