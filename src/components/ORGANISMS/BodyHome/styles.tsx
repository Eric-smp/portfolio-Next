import styled from "styled-components";



export const Wrapper = styled.div`
@import url('https://fonts.googleapis.com/css2?family=Inconsolata:wght@200;300;500;700;900&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@100&display=swap');
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
        width: 60%;
        h2{
            font-weight: 300;
            color: #e4f3d8;
            font-size: 1.35rem;
        }
        h3{
            font-size: 2.4rem;
            /* color: #4B0082; */
            //#FF00FF
            background-image: linear-gradient( 40deg, 	#8A2BE2, #FF00FF);
            background-clip: text;
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            font-family: 'Inconsolata', monospace;
            font-weight: 900;
            margin: 0.5rem 0rem;
        }

        h2:nth-child(3){
            font-weight: 100;
            font-size: 1.15rem;
            font-style: italic;
            font-family: 'Inter', sans-serif;
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
        width: 80%;
        h2{
            font-weight: 300;
            color: #e4f3d8;
            font-size: 1.35rem;
        }
    }
}

`