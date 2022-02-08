import React from 'react'
import Etusivu from '../Etusivu/etusivu';
import styles from "./Me.module.scss"
import img from "./20211027_153242.jpg"
import {
    BrowserRouter as Router,
    Route,
    Link
  } from 'react-router-dom';


type MeProps = {

}

const Me: React.FC<MeProps> = () => {
  return (
      
    <div className={styles.fotos}>
      <Router>
        <Route exact path='/' component={Etusivu} />
      </Router>
      <Link to="/"><img src={img} alt='' width={59}height={59}></img></Link>
      <div className={styles.nombres}>
        <h2>Mehdi Zaidane</h2>
        <h3>Web developer</h3>
      </div>
    </div>
  )
}

export default Me
