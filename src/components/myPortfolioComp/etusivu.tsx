import React from 'react'
import styles from './etusivu.module.scss'
import img from "./20211027_153242.jpg"


type EtusivuProps = {

}

const Etusivu: React.FC<EtusivuProps> = () => {
  return (
    <div className= {styles.columns}>

      <div className={styles.firstColumn}>
          <h1>WHO AM I?</h1>
          <p>I'm Mehdi Zaidane, programming student at Vantaan Varia</p> 
          <p>Ammattiopisto.</p>
          <p>I love programming and I am focused on the development of web pages.</p>
      </div>

      <div className={styles.secondColumn}>
          <img src={img} width={200}height={310}></img>
      </div>
    
    </div>
  )
}

export default Etusivu
