import React from 'react'

import styles from "./footer.module.scss"

const Footer = () => {

  const date = new Date()
  const year = date.getFullYear()

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
          <li><h3>Segunda Columna</h3></li>
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
      <div className={`${styles.copy}`}>
        <p>&copy; Gustavo Keymetlian All right reserved {year} </p>
      </div>
    </div>
  )
}

export default Footer