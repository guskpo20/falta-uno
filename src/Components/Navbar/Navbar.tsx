"use client";
import React, { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation';
import Image from 'next/image';


import Logo from "../../../public/logo.png"
import styles from "./navbar.module.scss"

const Navbar = () => {
    const [navbarOpen, setNavbarOpen] = useState(false);
    const currentRoute = usePathname(); 

    const handleNavBtn = (e : any) => {
        setNavbarOpen(!navbarOpen)
    }

  return (
    <div className={`${styles.navbarcontainer}`}>
        {/* <div className={`${styles.logo}`}>
            <Image src={Logo} width={50} height={50} alt='Logo de la marca'/>
        </div> */}
        <div className={`${styles.navbar} ${navbarOpen ? styles.open : " "}`}>
            <div className={`${styles.mobileHide}`}>
                <Link className={`${styles.name}`} href="/">Falta Uno</Link>
            </div>
            <div>
                <Link className={currentRoute == "/" ? styles.active : ""} href="/">Publicaciones</Link>
            </div>
            <div>
                <Link className={currentRoute == "/search" ? styles.active : ""} href="/search">Equipos</Link>
            </div>
            <div>
                <Link className={currentRoute == "/fields" ? styles.active : ""} href="/fields">Jugadores</Link>
            </div>
            <div>
                <Link className={currentRoute == "/about" ? styles.active : ""} href="/about">Canchas</Link>
            </div>
            <div>
                <Link className={`${styles.btn}`} href="/">INICIAR SESIÓN</Link>
            </div>
            <div>
                <Link className={`${styles.btn}`} href="/">Registrarse</Link>
            </div>
        </div>
        <div className={`${styles.btnsContainers}`}>
            <div>
                <Link className={`${styles.btn}`} href="/">INICIAR SESIÓN</Link>
            </div>
            <div>
                <Link className={`${styles.btn}`} href="/">Registrarse</Link>
            </div>
        </div>
        <div>
            <Link className={`${styles.nameNavClose}`} href="/">Falta Uno</Link>
        </div>
        <div onClick={(e: any) => handleNavBtn(e)} className={`${styles.navbtn} ${ navbarOpen ? styles.open : "" }`}>
            <div className={`${styles.hamburguer}`}></div>
        </div>
        
    </div>
  )
}

export default Navbar
