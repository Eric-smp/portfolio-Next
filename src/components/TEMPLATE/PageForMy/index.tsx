import {Header, LeftMenuMobile, BodyAboutMe} from '@/components'
import * as Styles from './styles'

export function PageForMy(){
    return(
        <Styles.Wrapper>
            <LeftMenuMobile /> 
            <Header/>
            <BodyAboutMe/>
        </Styles.Wrapper>
    )
}