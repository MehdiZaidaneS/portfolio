import React from 'react'
import Work from './work'
import {IoIosArrowDown} from "react-icons/io"
import styles from "./workExp.module.scss"

type WorkExpProps = {
     
}

const works = [
    {
        id: 0,
        company: "CompanyName",
        exercise: "Software Developer",
        date: "2001/11/05",
        place: "Myyrmäki, Vantaa"

    },   
];


const WorkExp: React.FC<WorkExpProps> = () => {
  return (
    <div className={styles.boxOfWork}>
      <h1>-- WORK EXPERIENCE --</h1>
      <h2>Latest Work</h2>
      {
      works.map(work => {
          return (
        <div className={styles.works} key={work.id}>
            <Work Company={work.company} Exercise={work.exercise} Date={work.date} Place={work.place}></Work>
        </div>
        )
      })
      }
      <button><IoIosArrowDown></IoIosArrowDown></button>

    </div>
  )
}

export default WorkExp
