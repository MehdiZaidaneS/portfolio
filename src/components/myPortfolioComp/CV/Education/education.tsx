import React from 'react'
import EducationEntry from './EducationEntry/educationEntry'
import {IoIosArrowDown} from "react-icons/io"
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
];

const Education: React.FC<EducationProps> = () => {
  return (
    <div className={styles.boxOfEducation}>
    <h1>-- EDUCATION --</h1>
    <h2>Latest Education</h2>
    {
    educations.map(education => {
        return (
      <div className={styles.education} key={education.id}>
          <EducationEntry school={education.school} title={education.title} years={education.years} location={education.location}></EducationEntry>
      </div>
      )
    })
    }
    <button><IoIosArrowDown></IoIosArrowDown></button>

  </div>
  )
}

export default Education
