import { useGlobal } from "@/hooks/context/global";
import ArrowLeft from '@/assets/svg/arrowRigthMenu.svg'
import IconClose from '@/assets/svg/closeModal.svg'
import * as Styles from "./styles";

export function LeftMenuMobile() {
  const { visibleMenuMobile, setVisibleMenuMobile } = useGlobal();
  return (
    <Styles.Wrapper visibleMenuLeftMobile={visibleMenuMobile}>
      <div className="ContentMenuMobile">
        <div className="headerMenuMobile">

        <h1>Portifolio</h1>
        <IconClose onClick={()=> setVisibleMenuMobile(false)}/>
        </div>


        <div className="textMenuMobile">
            <h2>Sobre mim</h2>
            <span>
                <ArrowLeft/>
            </span>
        </div>
        <div className="textMenuMobile">
            <h2>Desenvolvimentos</h2>
            <span>
                <ArrowLeft/>
            </span>
        </div>
        <div className="textMenuMobile">
            <h2>Contatos</h2>
            <span>
                <ArrowLeft/>
            </span>
        </div>
      </div>
    </Styles.Wrapper>
  );
}
