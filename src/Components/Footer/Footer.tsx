import React from 'react'

import styles from "./footer.module.scss"

const Footer = () => {

  return (
    <div className={`${styles.footer}`}>
      <div className={`${styles.mainfooter}`}>
       <div className={`${styles.column}`}>
        <ul>
          <li><h3>Primer Columna</h3></li>
          <li><p>Texto</p></li>
          <li><p>Texto</p></li>
          <li><p>Texto</p></li>
        </ul>
       </div>
       <div className={`${styles.column}`}>
        <ul>
          <li><h3>Segund Columna</h3></li>
          <li><p>Texto</p></li>
          <li><p>Texto</p></li>
          <li><p>Texto</p></li>
        </ul>
       </div>
       <div className={`${styles.column}`}>
        <ul>
          <li><h3>Tercer Columna</h3></li>
          <li><p>Texto</p></li>
          <li><p>Texto</p></li>
          <li><p>Texto</p></li>
        </ul>
       </div>
      </div>
      <p>&copy; Gustavo Keymetlian All right reserved 2023</p>
    </div>
  )
}

export default Footer