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
        <div>
            <HiOfficeBuilding size={18}></HiOfficeBuilding>
            <p>{Company}</p>
        </div>
        <div>
            <BsFillCalendarDayFill size={15}></BsFillCalendarDayFill>
            <p>{Date}</p>
        </div>
        <div>
            <IoLocation size={18}></IoLocation>
            <p>{Place}</p>
        </div>
        
       
        
      </div>
    </div>
  )
}

export default Work
