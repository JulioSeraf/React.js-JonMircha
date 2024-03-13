import React,{useState,useEffect} from "react";

export default function NavList(){
    let $Components  = document.querySelector(".componentes");

    useEffect(()=>{
       console.log($Components)
    })
}