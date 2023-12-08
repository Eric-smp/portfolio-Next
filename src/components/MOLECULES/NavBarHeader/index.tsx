import { useRouter } from 'next/router'
import * as Styles from './styles'
export function NavBarHeader(){
    const router = useRouter()
    return(
        <Styles.Navegation>
            <h1 onClick={()=> router.push('/')}>Inicio</h1>
            <h1 onClick={()=> router.push('/aboutMe')}>Sobre mim</h1>
            <h1 onClick={()=> router.push('/developments')}>Desenvolvimentos</h1>
            <h1 onClick={()=> router.push('/contacts')}>Contatos</h1>
        </Styles.Navegation>
    )
}