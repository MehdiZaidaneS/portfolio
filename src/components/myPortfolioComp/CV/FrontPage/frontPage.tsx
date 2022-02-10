import React from 'react'
import {
    BrowserRouter as Router,
    Route,
    Link
  } from 'react-router-dom';
import Etusivu from '../../Etusivu/etusivu';
import styles from "./frontPage.module.scss"
import img from "../../media/20211027_153242.jpg"

type FrontPageProps = {

}

const FrontPage: React.FC<FrontPageProps> = () => {
  return (
    <div className={styles.header}>
      <div className= {styles.pic}>
      <Router>
        <Route exact path='/' component={Etusivu} />
      </Router>
      <Link to="/"><img src={img} alt='' width={200}height={320}></img></Link>
      </div>
      <div className={styles.info}>
        <div>
          <h3>Web developer</h3>
          <h2>Mehdi Zaidane</h2>
        </div>
        
      </div>
    </div>
  )
}

export default FrontPage
