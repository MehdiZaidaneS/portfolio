import React, { useState } from 'react'
import styles from "./frontPage.module.scss"
import Contactme from '../../contactme/contactme'
import img from "../../media/20211027_153242.jpg"



type FrontPageProps = {

}

const FrontPage: React.FC<FrontPageProps> = () => {

  const [contactShow, setContactShow] = useState(false);

  document.onclick=function(){
        setContactShow(!contactShow);
    }  


  return (
    <div className={styles.header}>
      { contactShow=== true &&
        <Contactme></Contactme>
      }
      <div className= {styles.pic}>
        <img src={img} alt='' width={200}height={320}></img>
      </div>
      <div className={styles.info}>
        <div>
          <h3>Web developer</h3>
          <h2>Mehdi Zaidane</h2>
          <div className={styles.contact} id="id">
             <button onClick={() => setContactShow(!contactShow)}>Contact Me</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FrontPage
