import React, { useState } from 'react'
import Work from './work'
import {IoIosArrowDown, IoIosArrowUp} from "react-icons/io"
import styles from "./workExp.module.scss"

type WorkExpProps = {
     
}



const works = [
    {
        id: 0,
        company: "Posti Group",
        exercise: "Packet sorter",
        date: "11/2021-01/2022",
        place: "Aviapolis, Vantaa"

    },
    {
      id: 1,
      company: "Mercados Coviran",
      exercise: "Helper",
      date: "03/2017-06/2017",
      place: "Fuengirola, Malaga"
    }     
];



const WorkExp: React.FC<WorkExpProps> = () => {

  const [numberOfWork, setNumberOfWork] = useState(1);

  const worksToShow =
      works.filter(work => work.id < numberOfWork);

  return (
    <div className={styles.boxOfWork}>
      <h1>-- WORK EXPERIENCE --</h1>
      {
      worksToShow.map(work => {
          return (
        <div className={styles.works} key={work.id}>
            <Work Company={work.company} Exercise={work.exercise} Date={work.date} Place={work.place}></Work>
        </div>
        )
      })
      }
      {
        numberOfWork < 2 ?
      <button onClick={() => setNumberOfWork(numberOfWork+1) }><IoIosArrowDown></IoIosArrowDown></button> :
      <button onClick={() => setNumberOfWork(1) }><IoIosArrowUp></IoIosArrowUp></button>
      }

    </div>
  )
}

export default WorkExp
