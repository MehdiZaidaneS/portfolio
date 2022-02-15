import React from 'react'
import styles from "./aboutMe.module.scss"

type AboutMeProps = {

}

const AboutMe: React.FC<AboutMeProps> = () => {
  return (
    <div className={styles.textAboutMe}>
      <h1>-- ABOUT ME--</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat assumenda similique aliquam ut nisi delectus, odit voluptates error magni eligendi vitae quis eos iure unde deserunt nihil mollitia doloremque. Beatae voluptatibus corporis nemo quas id eius sunt, eaque cum facere ex exercitationem sit maiores hic. Sunt alias consequatur, consequuntur iste maxime cum numquam veniam sit voluptatibus aliquam ab, veritatis dicta. Ipsa, in. Mollitia odio, eius soluta nemo ad rerum omnis labore ipsa, harum nulla saepe perspiciatis. Quos unde possimus officiis similique numquam est debitis commodi recusandae error. Unde, maiores exercitationem cupiditate explicabo ipsum reiciendis impedit, sunt harum nisi hic at.</p>
    </div>
  )
}

export default AboutMe
