import React from 'react'
import FrontPage from './FrontPage/frontPage'
import AboutMe from './AboutMe/aboutMe'
import Skills from './Skills/skills'
import Education from './Education/education'
import WorkExp from './WorkExperience/workExp'
import styles from "./newCV.module.scss"



type NewCVProps = {

}

const NewCV: React.FC<NewCVProps> = () => {
  return (
    <div className={styles.cvContainer}>
      <FrontPage></FrontPage>
      <div className={styles.columnsCv}>
         <div className={styles.firstColumn}>
           <AboutMe></AboutMe>
           <Skills></Skills>
         </div>
         <div className={styles.secondColumn}>
           <WorkExp></WorkExp> 
           <Education></Education>
         </div>
      </div>
    </div>
  )
}

export default NewCV
