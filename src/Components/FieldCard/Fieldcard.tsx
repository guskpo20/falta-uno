import styles from "./fieldcard.module.scss"
import Cancha from "../../../public/cancha.png"
import Image from 'next/image';
import HoverImage from "../../../public/team.jpg"
import Star from "../../../public/estrella.png"
import { useState, useEffect } from "react"

const Teamcard = () => {

  /* const [imgHover, setImgHover] = useState(false) */
  const [stars, setStars] = useState(0)

  useEffect(() => {
    setStars(5)
    if(stars > 5){
      setStars(5)
    }
  }, [])

 /*  function hoverImage(set: boolean = false){
    setImgHover(set);
  } */

  return (
    <div className={`${styles.card}`}>
        {/* <div className={`${styles.invisibleImg}`} onMouseEnter={() => hoverImage(true)} onMouseLeave={() => hoverImage(false)}>

        </div> */}
        {/* <div className={`${styles.hoverImgOnly} ${imgHover ? styles.hovered : ""}`}>
          <Image src={HoverImage} width={300} height={20} alt='Player'/>
        </div> */}
      <section  className={`${styles.topGrid}`}>
        <div className={`${styles.fieldInfo}`}>
          <div className={`${styles.fieldImg}`}>
            <Image src={Cancha} width={120} height={120} alt='shield'/>
          </div>
          <div className={`${styles.nameLocation}`}>
            <h3>Nombre Cancha</h3>
            <p>Manga, Uruguay</p>
          </div>
        </div>
        <div className={`${styles.moreInfo}`} >
          <div>
            <p>Tamaño: <span>Futbol 5</span></p>
            <p>Cesped: <span>Artificial</span></p>
            <p>Torneos Abiertos: <span>3</span></p>
          </div>
        </div>
        <div>
          <div className={`${styles.btn}`}>Promociones Activas</div>
        </div>
        <div className={`${styles.starsandcomments}`} >
          <div className={`${styles.stars}`}>
            <div>
              Calificacion:
            </div>
            <div className={`${styles.starsGroup}`} >
            {Array.from({length: stars}, (item, index) => 
              <Image src={Star} width={25} height={25} alt='shield' key={index}/>
            )}
              {/* <Image src={Star} width={25} height={25} alt='shield'/> */}
            </div>
          </div>
          <div className={`${styles.carrousel}`}>
            Comentarios carrousel que tiene<br /> <span>Autor</span>
          </div>
        </div>
      </section>      
    </div>
  )
}

export default Teamcard