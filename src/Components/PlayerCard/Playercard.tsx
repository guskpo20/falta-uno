import styles from "./playercard.module.scss"
import Player from "../../../public/player.png"
import Shield from "../../../public/escudo.png"
import Shirt from "../../../public/camiseta.png"
import Image from 'next/image';

const PlayerCard = () => {



  return (
    <div className={`${styles.card}`}>
      <section  className={`${styles.topGrid}`}>
        <div className={`${styles.information}`}>
          <div>
            <Image src={Shield} width={50} height={50} alt='Player'/>
            <h4 className={`${styles.teamName}`}>Nombre del equipo</h4>
          </div>
          <h3>Gustavo</h3>
          <div className={`${styles.attributes}`}>
            <p>Velocidad</p>
            <p>Pases</p>
            <p>Centro</p>
          </div>
          <div className={`${styles.position}`}>
            <Image src={Shirt} width={30} height={30} alt='Player'/>
            Delantero
          </div>
        </div>
        <Image src={Player} width={180} height={400} alt='Player' className={`${styles.player_img}`}/>
      </section>
      <section  className={`${styles.bottomGrid}`}>
        <div className={`${styles.age}`}>
          <p>Edad</p>
          <p>22</p>
        </div>
        <div className={`${styles.games}`}>
          <p>Partidos</p>
          <p>34</p>
        </div>
        <div className={`${styles.goals}`}>
          <p>Goles</p>
          <p>1</p>
        </div>
      </section>
      
    </div>
  )
}

export default PlayerCard