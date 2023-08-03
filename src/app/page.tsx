"use client"

import Image from 'next/image'
import Hero from '@/Components/Hero/Hero'
import { useState, useEffect } from 'react'
/* import fs from 'fs'
import path from 'path' */



export default function Home() {

  /* const [dataFromJson, setDataFromJson] = useState([])
  let file = 'home_data.json'

  useEffect(() => {
    const filePath = path.join(process.cwd(), file)
    const jsonData = fs.readFileSync(filePath, 'utf8')
    const data = JSON.parse(jsonData)
    setDataFromJson(data)
  }, []) */
  

  return (
    <>
      <section className="hero">
        <Hero bg={"ball_bg.jpg"} reverse={false} image={"hero_img.png"}/>
      </section>
      <section className="features">
        <Hero bg={"ball_bg.jpg"} reverse={true} image={"hero_two.png"}/>
      </section>
      <section className="contact">
        <Hero bg={"ball_bg.jpg"} reverse={false} image={"hero_three.png"}/>
      </section>
    </>
  )
}
