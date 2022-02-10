import React from 'react'
import FrontPage from './FrontPage/frontPage'
import styles from "./newCV.module.scss"



type NewCVProps = {

}

const NewCV: React.FC<NewCVProps> = () => {
  return (
    <div className={styles.cvContainer}>
      <FrontPage></FrontPage>
    </div>
  )
}

export default NewCV
