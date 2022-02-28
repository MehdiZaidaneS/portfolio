import React, { useState } from 'react'
import EducationEntry from './EducationEntry/educationEntry'
import {IoIosArrowDown, IoIosArrowUp} from "react-icons/io"
import styles from "./education.module.scss"

type EducationProps = {

}

const educations = [
    {
        id: 0,
        school: "Vantaan Ammattiopisto Varia",
        title: "Tieto ja viestintä tekniikka",
        years: "2020-2023",
        location: "Vantaa, Finland"

    },
    {
       id: 1,
       school: "IES Ben Gabirol",
       title: "Lukio",
       years: "2017-2018",
       location: "Malaga, Spain"
    },
    {
       id: 2,
       school: "IES Mercedes Labrador",
       title: "Peruskoulu",
       years: "2013-2017",
       location: "Malaga, Spain"

    }
];

const Education: React.FC<EducationProps> = () => {

  const [numberOfEducation, setNumberOfEducation] = useState(1);

  const educationsToShow =
      educations.filter(education => education.id < numberOfEducation);

  return (
    <div className={styles.boxOfEducation}>
    <h1>-- EDUCATION --</h1>
    {
    educationsToShow.map(education => {
        return (
      <div className={styles.education} key={education.id}>
          <EducationEntry school={education.school} title={education.title} years={education.years} location={education.location}></EducationEntry>
      </div>
      )
    })
    }
    {
        numberOfEducation < 3 ?
      <button onClick={() => setNumberOfEducation(numberOfEducation+1) }><IoIosArrowDown></IoIosArrowDown></button> :
      <button onClick={() => setNumberOfEducation(1) }><IoIosArrowUp></IoIosArrowUp></button>
      }

  </div>
  )
}

export default Education
