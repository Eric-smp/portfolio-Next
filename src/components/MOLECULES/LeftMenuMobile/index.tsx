import { useGlobal } from "@/hooks/context/global";
import ArrowLeft from "@/assets/svg/arrowRigthMenu.svg";
import IconClose from "@/assets/svg/closeModal.svg";
import {useRouter} from 'next/router'
import * as Styles from "./styles";

export function LeftMenuMobile() {
  const router = useRouter()
  const { visibleMenuMobile, setVisibleMenuMobile } = useGlobal();
  return (
    <Styles.Wrapper visibleMenuLeftMobile={visibleMenuMobile}>
      <div className="ContentMenuMobile">
        <div className="headerMenuMobile">
          <h1>Portifolio</h1>
          <IconClose onClick={() => setVisibleMenuMobile(false)} />
        </div>

        <div className="textMenuMobile">
          <h2 onClick={()=> {
            router.push('/')
            setVisibleMenuMobile(false)
          }}>Inicio</h2>
          <span>
            <ArrowLeft />
          </span>
        </div>
        <div className="textMenuMobile">
          <h2 onClick={()=>{
            router.push('/aboutMe')
            setVisibleMenuMobile(false)
          }}>Sobre mim</h2>
          <span>
            <ArrowLeft />
          </span>
        </div>
        <div className="textMenuMobile">
          <h2 onClick={()=> {
            router.push('/developments')
            setVisibleMenuMobile(false)
          }}>Desenvolvimentos</h2>
          <span>
            <ArrowLeft />
          </span>
        </div>
        <div className="textMenuMobile">
          <h2 onClick={()=>{
            router.push('/contacts')
            setVisibleMenuMobile(false)
          }}>Contatos</h2>
          <span>
            <ArrowLeft />
          </span>
        </div>
      </div>
    </Styles.Wrapper>
  );
}
