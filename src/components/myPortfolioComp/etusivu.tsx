import React, { useState } from 'react'
import styles from './etusivu.module.scss'
import img from "./media/20211027_153242.jpg"
import santa from "./media/santasnow.jpg"
import web from "./media/web.png"
import wolfgame from "./media/wolfgame.jpg"
import java from "./media/java.png"
import techweb from "./media/techweb.jpg"
import dodgeball from "./media/dodgeball.png"
import Cv from "./cv"
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

type EtusivuProps = {

}

const Etusivu: React.FC<EtusivuProps> = () => {

   const [visible, setVisible] = useState(false);


  return (
    <div>
    <Router>
      <Route exact path="/cv" component={Cv} />
    </Router>
    <div className= {styles.columns}>
      <div className={styles.firstColumn}>
          <h1>WHO AM I?</h1>
          <p>I'm Mehdi Zaidane, programming student at Vantaan Varia</p> 
          <p>Ammattiopisto.</p>
          <p>I like to program and I am interested in the development of web pages.</p>
          <Link to="cv" className={styles.boton}>Learn More</Link>
      </div>
      <div className={styles.secondColumn}>
          <img src={img} alt='' width={200}height={310}></img>
      </div>
    </div>
    
    <div className={styles.titulo}>
      <h3>Recent projects</h3>
    </div>
    <div className={styles.proyectos}>
         <div className={styles.firstImg}>
           <img src={santa} alt='' width={300}height={200}></img>
         </div>
         <div className={styles.secondImg}>
           <img src={web} alt='' width={300}height={200}></img>
         </div>
         <div className={styles.thirdImg}>
           <img src={wolfgame} alt='' width={300}height={200}></img>
         </div> 
    </div>
    { visible &&
    <div className={styles.proyectos2}>
         <div className={styles.fourthImg}>
           <img src={java} alt='' width={300}height={200}></img>
         </div>
         <div className={styles.fifthImg}>
           <img src={techweb} alt='' width={300}height={200}></img>
         </div>
         <div className={styles.sixImg}>
           <img src={dodgeball} alt='' width={300}height={200}></img>
         </div> 
    </div>
    }
    
    <div className={styles.imgbutton}>
      <button onClick={ () => setVisible(!visible)}>{visible ? "Hide" : "See more"}</button>
    </div>
    
    </div>
    
  )
}

export default Etusivu
