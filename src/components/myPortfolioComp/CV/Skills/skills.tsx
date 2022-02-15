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
    level: "Undefined"
  },
  {
    id: 1,
    name: "Java",
    level: "Undefined"
  },
  {
    id: 2,
    name: "SQL",
    level: "Undefined"
  },
  {
    id: 3,
    name: "C#",
    level: "Undefined"
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

      <h2>Languages</h2>
      {
        languages.map(language => {
          return(
            <Skill language={language.name} level={language.level}></Skill>
          )
        })
      }
    </div>
  )
}

export default Skills
