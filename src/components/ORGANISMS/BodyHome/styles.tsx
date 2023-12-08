import styled from "styled-components";

export const Wrapper = styled.div`
height: 100%;
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    position: relative;
    padding: 0rem 10rem;

    .titleBody{
        width:auto;
        color: #e4f3d8;
        h1{
            width: 100%;
            display: flex;
            flex-wrap: nowrap;
        }
    }

    .diviser{
        margin:0rem 2rem;
        height: 30%;
        border-right: 2px solid #020001;
    }
    .contentBody{
        h2{
            font-weight: 300;
            color: #e4f3d8;
            font-size: 1.35rem;
        }
    }

@media only screen and (max-width:1024px){
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 2rem ;
    

.titleBody{
    width: auto;
    h1{
        color:#e4f3d8;
    }
}
    .diviser{
        border-right: none;
        margin: 2rem 0rem;
        height: 0%;
        width: 100%;
        border-bottom: 2px solid#020001 ;
    }
    
    .contentBody{
        h2{
            font-weight: 300;
            color: #e4f3d8;
            font-size: 1.35rem;
        }
    }
}

`