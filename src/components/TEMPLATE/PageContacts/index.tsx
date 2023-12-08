import {BodyContacts, Header, LeftMenuMobile} from '@/components'
import * as Styles from './styles'

export function PageContact(){
    return(
        <Styles.Wrapper>
            <LeftMenuMobile/>
            <Header/>
            <BodyContacts/>
        </Styles.Wrapper>
    )
}