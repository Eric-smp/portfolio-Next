import styled from "styled-components";

export const Content = styled.div`
  width: 100%;
  height: auto;
  padding: 1rem;
  display: flex;
  align-items: center;
  justify-content: space-around;
  background-color: #af74e7a4;
  gap: 1rem;
  .nameEndLogo {
    display: flex;
    h1 {
      color: #e4f3d8;
    }
    
    :hover{
      background-image: linear-gradient( 40deg, 	#570b9f, #FF00FF);
            background-clip: text;
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
    }
  }
  .menuHeaderMobile{
    display: none;
  }

  @media only screen and (max-width:1024px){
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1rem 2rem;
    .contentNav{
      display: none;
    }

    .menuHeaderMobile{
      display: flex;
    }
  }
`;



export const VisibleMenu = styled.div`
position: absolute;
z-index: 10;
`