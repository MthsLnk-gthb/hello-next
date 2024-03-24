"use client"
import { string } from 'prop-types'
import React from 'react'

interface BotaoProps{
    redeSocial: string
    link: string
    handleAcessarRede: (link: string) => void
}

const Botao = ({redeSocial, link, handleAcessarRede}: BotaoProps) => {

      const handleClick = () => {
        handleAcessarRede(link);
      };
      
  return (
    <button onClick={handleClick} style={{ backgroundColor: "#3453dc", width: "150px", height: "35px", margin: "0 2dvw" }}>
      {redeSocial}
    </button>
  );
}

export default Botao