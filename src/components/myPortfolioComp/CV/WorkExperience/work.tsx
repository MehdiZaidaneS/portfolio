import React from 'react'
import styles from "./work.module.scss"

type WorkProps = {
  Company: string
  Exercise: string
  Date: string
  Place: string
}

const Work: React.FC<WorkProps> = ({Company, Exercise, Date, Place}) => {
  return (
    <div className={styles.workInfo}>
      <p>Company: {Company}</p>
      <p>Exercise: {Exercise}</p>
      <p>Date: {Date}</p>
      <p>Place: {Place}</p>
    </div>
  )
}

export default Work
