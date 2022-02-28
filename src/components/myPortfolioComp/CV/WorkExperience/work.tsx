import React from 'react'
import styles from "./work.module.scss"
import { BsFillCalendarDayFill } from "react-icons/bs"
import { HiOfficeBuilding } from "react-icons/hi"
import { IoLocation } from "react-icons/io5"

type WorkProps = {
  Company: string
  Exercise: string
  Date: string
  Place: string
}

const Work: React.FC<WorkProps> = ({Company, Exercise, Date, Place}) => {
  return (
    <div>
      <div>
         <h2>{Exercise}</h2>
      </div>
      <div className={styles.workInfo}>
        <p><HiOfficeBuilding size={18}></HiOfficeBuilding> {Company}</p>
        <p><BsFillCalendarDayFill size={15}></BsFillCalendarDayFill> {Date}</p>
        <p><IoLocation size={18}></IoLocation> {Place}</p>
      </div>
    </div>
  )
}

export default Work
