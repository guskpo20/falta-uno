import styles from "./teamcard.module.scss"
import Shield from "../../../public/escudo.png"
import Shirt from "../../../public/camiseta.png"
import Trofeo from "../../../public/trofeo.png"
import Medalla from "../../../public/medalla.png"
import Image from 'next/image';
import HoverImage from "../../../public/escudo.png"

import { useState } from "react"

const Teamcard = () => {

  const [imgHover, setImgHover] = useState(false)

  function hoverImage(set: boolean = false){
    setImgHover(set);
  }

  return (
    <div className={`${styles.card}`}>
        <div className={`${styles.invisibleImg}`} onMouseEnter={() => hoverImage(true)} onMouseLeave={() => hoverImage(false)}>

        </div>
        <div className={`${styles.hoverImgOnly} ${imgHover ? styles.hovered : ""}`}>
          <Image src={HoverImage} width={300} height={400} alt='Player'/>
        </div>
      <section  className={`${styles.topGrid}`}>
        <div className={`${styles.teamInfo}`}>
          <div className={`${styles.shieldandShirt}`}>
            <div className={`${styles.absoluteImage }`}>
              <Image src={Shirt} width={30} height={30} alt='Shirt'/>
            </div>
            <Image src={Shield} width={120} height={120} alt='shield'/>
          </div>
          <div className={`${styles.nameLocation}`}>
            <h3>Nombre Equipo</h3>
            <p>Manga, Uruguay</p>
          </div>
        </div>
        <div className={`${styles.moreInfo}`} >
          <div>
            <p>Capitán: <span>Nombre Jugador</span></p>
            <p>Deporte: <span>Futbol 5</span></p>
            <p>Tamaño: <span>7 Jugadores</span></p>
          </div>
          
          <div>
          <Image src={Trofeo} width={30} height={30} alt='trophy'/>
          <Image src={Medalla} width={30} height={30} alt='medall'/>
          </div>
        </div>
        <div>
          <div className={`${styles.btn}`}>Buscando Jugadores</div>
        </div>
        
      </section>
      <section  className={`${styles.bottomGrid}`}>
        <div className={`${styles.age}`}>
          <p>Partidos</p>
          <p>22</p>
        </div>
        <div className={`${styles.games}`}>
          <p>Goles</p>
          <p>34</p>
        </div>
        <div className={`${styles.goals}`}>
          <p>Trofeos</p>
          <p>1</p>
        </div>
      </section>
      
    </div>
  )
}

export default Teamcard