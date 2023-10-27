"use client"

import Image from 'next/image'
import Hero from '@/Components/Hero/Hero'
import { useState, useEffect } from 'react'

import PlayerCard from "@/Components/PlayerCard/Playercard"

/* import fs from 'fs'
import path from 'path' */



export default function Home() {  

  return (
    <>
      <div className="main-hero">
        <section className="hero">
          <span className='playerCard'>
            <PlayerCard />
          </span>
          <p className='playerDescription'>Registrate y obtene tu carta de jugador para poder entrar a un club! Cada jugador puede pertencer a varios equipos.</p>
          <span className='teamCard'>
            <PlayerCard />
          </span>
          <p className='teamDescription'>Despues de registarte podras registrar tu cuadro y unir a tus compañeros</p>
          <span className='fieldCard'>
            <PlayerCard />
          </span>
          <p className='fieldDescription'>Conoce las canchas, ubicaciones, precios, promociones y campeonatos</p>
        </section>
      </div>
    </>
  )
}
