import styles from "./promo.module.scss"
import Cancha from "../../../public/cancha.png"
import Star from "../../../public/estrella.png"

import Image from "next/image"

const Promo = () => {
    return (
      <div className={`${styles.promo}`}>
        <div className={`${styles.info}`}>
            <div>
                <h2>Nombre de la cancha</h2> 
                <p>Direccion de la cancha</p>
            </div>
            <div className={`${styles.stars}`}>
                <h5>Calificacion:</h5>
                <Image src={Star} width={25} height={25} alt='shield'/>
                <Image src={Star} width={25} height={25} alt='shield'/>
                <Image src={Star} width={25} height={25} alt='shield'/>
                <Image src={Star} width={25} height={25} alt='shield'/>
                <Image src={Star} width={25} height={25} alt='shield'/>
            </div>
        </div>
        <div className={`${styles.image}`}>
            <Image src={Cancha} width={140} height={130} alt='shield'/>
        </div>
        <div className={`${styles.description}`}>
            <h3>Promo</h3>
            <p>Descripcion de la promo</p>
        </div>
      </div>
    )
  }
  
  export default Promo