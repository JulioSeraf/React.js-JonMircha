import React from "react";
import styled,{css} from "styled-components";
// al llamar css del styled componenet podemos usar style component dentro de styled component podenso llamar las templat string para estilizar 

export default function ComponentesEstilizados(){
    // utilizamos un tag h3 para criar nustra variable de estilo, lembrando que esta es un tag de la libreria styled

    // Podemos criar variables para interpolar como los valores de la propriedades criadas en la variable del styled-component
    let mainColor = "#db7093",
        mainAlphaColor80 = "#db709380"

    // si vamos usar una proprieda para varias tag podemos simplicar usando una function
    const setTrasitionTime = (time) => `all ${time} ease-out`
    const MyH3 = styled.h3`
    padding: 2rem;
    text-aling:center;
    background-color:${mainColor};
    color:${(props) => props.color};
    color:${({color}) => color};
    color:${({color}) => color||"#000"};
    transition:${setTrasitionTime("1s")};

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
    return (<>
            <h2>Styled-Components</h2>
            <MyH3>Hola Soy un h3 estilizado con styled-components</MyH3>
            <MyH3 color="red">Hola Soy un h3 estilizado con styled-components usando props</MyH3>
            <MyH3 isButton>Soy un h3 estilizado como un botón</MyH3>

            </>)
}