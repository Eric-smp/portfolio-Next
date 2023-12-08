import {BodyDevelopments, Header, LeftMenuMobile} from '@/components'
import * as Styles from'./styles'

export function PageDevelopments(){
    return(
        <Styles.Wrapper>

        <LeftMenuMobile/>
        <Header/>
        <BodyDevelopments/>
        </Styles.Wrapper>
    )
}