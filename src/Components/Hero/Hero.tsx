"use client";

import React from 'react'
import styles from "./hero.module.scss"
import Image from 'next/image';

const Hero = ( { bg, image, reverse } : {bg: string, image: string, reverse:boolean}) => {
  return (
    <div className={`main_hero ${reverse ? "reverse" : ""}`}>
        <div className='main_hero_text'>
            <h1>FALTA UNO</h1>
            <h3>La aplicacion que reune buscar equipo, jugadores, canchas y hacer torneos en un solo lugar!</h3>
        </div>
        <div className='main_hero_img'>
            <Image src={`/${image}`} alt="Picture of the author" width={350} height={450} />
        </div>
    <style jsx>{`
        .main_hero {
            display: flex;
            flex-direction: row;
           /*  background: url(/${bg});
            min-height: 450px;
            border-radius: 50px; 
            background-size: cover;
            background-position: center; */
            max-width: 1440px;
            height: calc(100vh - 60px);
            align-items: center;
            justify-content: space-between;
            
        }

        .main_hero > div{
            width: 50%;
        }

        .main_hero_img{
            display: flex;
            flex-direction: column;
            align-items: center;
        }

        .main_hero_img img{
            max-width: 350px;
            width: 100%;
            height: auto;
        }
        
        .main_hero_text h1{
            font-size: 5rem;
        }

        .main_hero_text h3{
            text-wrap: balance;
        }

        .reverse{
            flex-direction: row-reverse;
        }

        @media (max-width: 889px){
            .main_hero{
                flex-direction: column;
                text-align: center;
                gap: 10px;
                min-height: calc(100vh - 60px)
            }

            .main_hero > div{
                width: 100%;
            }

            .reverse{
            flex-direction: column;
            }
        }
        
      `}</style>

    </div>
  )
}

export default Hero