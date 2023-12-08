import styled from "styled-components";

export const Content = styled.div`
  width: 100%;
  height: auto;
  padding: 1rem;
  display: flex;
  align-items: center;
  justify-content: space-around;
  background-color: #331d4a;
  gap: 1rem;
  .nameEndLogo {
    display: flex;
    h1 {
      color: #e4f3d8;
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
