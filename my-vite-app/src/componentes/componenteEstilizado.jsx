import React from "react";
import styled,{css, keyframes, ThemeProvider, createGlobalStyle} from "styled-components";
// al llamar css del styled componenet podemos usar style component dentro de styled component podenso llamar las templat string para estilizar 

// para trabajar com animaciones devemos llamar la function KeyFrames de styled

// styled tbn tiene un funcionalidad llamada createGlobalStyle , que nos permite pasasr estilios a todos componente globalmente, lo idal seria llamar em la hoja principal como app.jsx o index.jsx


export default function ComponentesEstilizados(){
    // utilizamos un tag h3 para criar nustra variable de estilo, lembrando que esta es un tag de la libreria styled

    // Podemos criar variables para interpolar como los valores de la propriedades criadas en la variable del styled-component
    let mainColor = "#db7093",
        mainAlphaColor80 = "#db709380"

    // si vamos usar una proprieda para varias tag podemos simplicar usando una function
    const setTrasitionTime = (time) => `all ${time} ease-out`;

    const fadein = keyframes`
    0%{
        opacity:0;
        color:blue;
    } 
    100%{
        opacity:1;
        color:darkblue;
    }`

    const MyH3 = styled.h3`
    padding: 2rem;
    text-aling:center;
    background-color:${mainColor};
    color:${(props) => props.color};
    color:${({color}) => color};
    color:${({color}) => color||"#000"};
    transition:${setTrasitionTime("1s")};
    animation:${fadein} 5s ease-out;  
    ${({isButton}) => isButton && css`
        margin:auto;
        max-width:50%;
        border-radius:0.25rem;
        cursor:pointer; 
        `}

    &:hover{
        background-color:${mainAlphaColor80}
    }
    `;

    const light ={
        color:"#222",
        bgColor: "#DDD"
    };
    const dark ={
        color: "#DDD",
        bgColor: "#222"
    };

    const Box = styled.div`
        padding:1rem;
        margin:1rem;
        color:${({theme}) => theme.color};
        background-color: ${({theme}) => theme.bgColor};

    `;
    // styled Componente tbn tiene un funcionalidad que nos permite heredar los estilos de otro componente, al criar la variable de styled componenete al inves de llamr la tag al estilizar, lo criamos como function () y passamos como paramentro el componente a copiar los estilos, y asi podemos adicionar nuevos estilos sin combiar los del componentes a copiar
    const BoxRounded = styled(Box)`
            border-radius:1rem;
    `;   

    const GlobalStyle = createGlobalStyle`
        body{
            background-color:lightgray; 
        }
    `
    return (<>
            <GlobalStyle></GlobalStyle>
            <h2>Styled-Components</h2>
            <MyH3>Hola Soy un h3 estilizado con styled-components</MyH3>
            <MyH3 color="red">Hola Soy un h3 estilizado con styled-components usando props</MyH3>
            <MyH3 isButton>Soy un h3 estilizado como un botón</MyH3>
            <ThemeProvider theme={light}>
              <Box>Soy una caja light</Box>
              <BoxRounded>Soy un Componente com estilos heredados ligth</BoxRounded>
            </ThemeProvider>
            <ThemeProvider theme={dark}>
              <Box>Soy una caja dark</Box>
              <BoxRounded>Soy un Componente com estilos heredados dark</BoxRounded>
            </ThemeProvider>
            </>)
}