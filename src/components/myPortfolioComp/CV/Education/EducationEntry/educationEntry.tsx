import React from 'react'
import styles from "./educationEntry.module.scss"

type EducationEntryProps = {
   school: string
   title: string
   years: string
   location: string
}

const EducationEntry: React.FC<EducationEntryProps> = ({school, title, years, location}) => {
  return (
    <div className={styles.educationInfo}>
      <p>School: {school}</p>
      <p>Title: {title}</p>
      <p>Year: {years}</p>
      <p>Location: {location}</p>
    </div>
  )
}

export default EducationEntry
