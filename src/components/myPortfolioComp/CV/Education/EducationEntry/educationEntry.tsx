import React from 'react'
import { FaSchool } from "react-icons/fa"
import { BsFillCalendarDayFill } from "react-icons/bs"
import { IoLocation } from "react-icons/io5"
import styles from "./educationEntry.module.scss"

type EducationEntryProps = {
   school: string
   title: string
   years: string
   location: string
}

const EducationEntry: React.FC<EducationEntryProps> = ({school, title, years, location}) => {
  return (
    <div>
       <div>
         <h2>{title}</h2>
       </div>
       <div className={styles.educationInfo}>
         <div>
            <FaSchool size={20}></FaSchool>
            <p>{school}</p> 
         </div>
         <div>
            <BsFillCalendarDayFill size={15}></BsFillCalendarDayFill>
            <p>{years}</p>
         </div>
         <div>
            <IoLocation size={18}></IoLocation>
            <p>{location}</p>
         </div>
       </div>
    </div>
  )
}

export default EducationEntry
