import * as Styles from './styles'

export function BodyHome(){
    return(
        <Styles.Wrapper>
            <div className='titleBody'>
                <h1>Inicio</h1>
            </div>
            <div className='diviser'>
                <span></span>
            </div>

            <div className='contentBody'>
                <h2>Olá, sou o Eric Sampaio</h2>
                <h3>Web Developer</h3>
                <h2> Criei esse portifolio para me apresentar e mostrar os meus trabalhos e meus projeto desenvolvidos que fiz tanto sozinho como com colegas de faculdade</h2>
            </div>
        </Styles.Wrapper>
    )
}