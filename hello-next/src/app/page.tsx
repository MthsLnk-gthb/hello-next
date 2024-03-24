"use client"

import Image from "next/image";
import styles from "./page.module.css";
import Mensagem from "@/Components/mensagem";

const textoIntroducao = "Sou Desenvolvedor Front-End, implemento e crio aplicações tanto para a Web como para mobile"

export default function Home() {
  return (
    <main className={styles.main}>
      <h2>Hello World !</h2>
      <Mensagem meuNome="Matheus Link" minhaIntroducao={textoIntroducao}/>
    </main>
  );
}
