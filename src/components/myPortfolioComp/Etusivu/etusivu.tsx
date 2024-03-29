import React from 'react'
import styles from './etusivu.module.scss'
import img from "../media/20211027_153242.jpg"
import santa from "../media/santasnow.jpg"
import techweb from "../media/techweb.jpg"
import wolfgame from "../media/wolfgame.jpg"
import NewCV from '../CV/newCV'
import Projektisivu from '../ProjektiSivu/projektisivu'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

type EtusivuProps = {

}

const Etusivu: React.FC<EtusivuProps> = () => {




  return (
    <div>
    <Router>
      <Route exact path="/cv" component={NewCV} />
      <Route exact path='/projects' component={Projektisivu}/>
    </Router>
    <div className= {styles.columns}>
      <div className={styles.firstColumn}>
          <h1>WHO AM I?</h1>
          <p>I'm <strong>Mehdi Zaidane</strong>, Junior Front-end Developer.<br></br>
           I love programming and I am studying to be a Full Stack developer.</p>
          <p className={styles.skills}>ReactJS / C# / HTML & CSS / Java / SQL / TypeScript</p>
          
          <Link to="cv" className={styles.boton}>Learn More</Link>
      </div>
      <div className={styles.secondColumn}>
          <img src={img} alt='' width={200}height={310}></img>
      </div>
    </div>
    
    <div className={styles.titulo}>
      <hr className={styles.hache}></hr>
      <h3>Recent projects</h3>
    </div>
    <div className={styles.proyectos}>
         <div className={styles.firstImg}>
         <Link to={{pathname:"/projects", state: 0}}>
           <img src={santa} alt='' width={350}height={210}></img>
           </Link>
         </div>
         <div className={styles.secondImg}>
         <Link to={{pathname:"/projects", state: 1}}>
           <img src={techweb} alt='' width={350}height={210}></img>
           </Link>
          </div>
         <div className={styles.thirdImg}>
         <Link to={{pathname:"/projects", state: 2}}>
           <img src={wolfgame} alt='' width={350}height={210}></img>
           </Link>
         </div> 
    </div>
    
    <div className={styles.imgbutton}>
    <Link to="projects" className={styles.boton2}>Learn More</Link>
    </div>
    
    </div>
    
  )
}

export default Etusivu
