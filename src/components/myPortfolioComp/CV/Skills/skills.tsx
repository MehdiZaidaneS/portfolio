import Skill from './Skill/skill'
import styles from "./skills.module.scss"
import React from 'react'

type SkillsProps = {

}

const languages = [
  {
    id: 0,
    name: "Spanish",
    level: "Native"
  },
  {
    id: 1,
    name: "Finnish",
    level: "Intermediate"
  },
  {
    id: 2,
    name: "English",
    level: "Excellent"
  },
  {
    id: 3,
    name: "Arabic",
    level: "Excellent"
  },
]

const programmingskills = [
  {
    id: 0,
    name: "React",
    level: "Good"
  },
  {
    id: 1,
    name: "Java",
    level: "Good"
  },
  {
    id: 2,
    name: "SQL",
    level: "Basic"
  },
  {
    id: 3,
    name: "C#",
    level: "Good"
  },
]

const Skills: React.FC<SkillsProps> = () => {
  return (
    <div className={styles.skillsBar}>
      <h1>-- SKILLS --</h1>
      <h2>Programming Skills</h2>
      {
        programmingskills.map(x => {
          return(
            <Skill language={x.name} level={x.level}></Skill>
          )
        })
      }
      <div className={styles.listOfSkills}>
      <h2>Languages</h2>
      {
        languages.map(language => {
          return(
            <Skill language={language.name} level={language.level}></Skill>
          )
        })
      }
      </div>
    </div>
  )
}

export default Skills
