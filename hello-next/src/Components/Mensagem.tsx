"use client"

import React from 'react'
import Botao from './Botao'

interface MensagemProps{
  meuNome: string
  minhaIntroducao: string
}

const Mensagem = ({meuNome, minhaIntroducao}: MensagemProps) => {
    const handleAcessarRede = (link: string) => {
      window.open(link, "_blank");
    };

  return (
    <>
      <h2>Olá, sou {meuNome}</h2>
      <p>{minhaIntroducao}</p>

      <h4>Aqui você pode encontrar algumas de minhas redes sociais:</h4>
      <div>
        <Botao
          redeSocial="Linkedin"
          link="https://www.linkedin.com/in/matheus-link-21b3a4265/"
          handleAcessarRede={handleAcessarRede}
        />
        <Botao
          redeSocial="GitHub"
          link="https://github.com/MthsLnk-gthb?tab=repositories"
          handleAcessarRede={handleAcessarRede}
        />
      </div>
    </>
  );
}

export default Mensagem