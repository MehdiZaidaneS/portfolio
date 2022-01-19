import React from 'react'
import styles from './etusivu.module.scss'
import img from "./20211027_153242.jpg"
import santa from "./santasnow.jpg"
import web from "./web.png"
import wolfgame from "./wolfgame.jpg"


type EtusivuProps = {

}

const Etusivu: React.FC<EtusivuProps> = () => {
  return (
    <div>
    <div className= {styles.columns}>
      <div className={styles.firstColumn}>
          <h1>WHO AM I?</h1>
          <p>I'm Mehdi Zaidane, programming student at Vantaan Varia</p> 
          <p>Ammattiopisto.</p>
          <p>I like to program and I am interested in the development of web pages.</p>
          <button>Learn More</button>
      </div>
      <div className={styles.secondColumn}>
          <img src={img} width={200}height={310}></img>
      </div>
    </div>
    
    <div>
      <h3>Recent projects</h3>
    </div>
    <div className={styles.proyectos}>
         <div className={styles.firstImg}>
           <img src={santa} width={300}height={300}></img>
         </div>
         <div className={styles.secondImg}>
           <img src={web} width={300}height={300}></img>
         </div>
         <div className={styles.thirdImg}>
           <img src={wolfgame} width={300}height={300}></img>
         </div> 
    </div>
    <div className={styles.imgbutton}>
      <button>See more projects</button>
    </div>

    </div>
    
  )
}

export default Etusivu
