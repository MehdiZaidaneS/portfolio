import React from 'react'
import styles from "./aboutMe.module.scss"

type AboutMeProps = {

}

const AboutMe: React.FC<AboutMeProps> = () => {
  return (
    <div className={styles.textAboutMe}>
      <h1>-- ABOUT ME--</h1>
      <p>Hi, I'm Mehdi Zaidane. Currently I am studying information and communication technologies at Vantaan Ammattiopisto Varia in Finland. <br></br>I am very interested in programming, especially in the development of web pages and applications.</p>
    </div>
  )
}

export default AboutMe
