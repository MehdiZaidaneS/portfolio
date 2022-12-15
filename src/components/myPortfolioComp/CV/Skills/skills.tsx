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
    level: "Intermediate"
  },
  {
    id: 1,
    name: "Java",
    level: "Intermediate"
  },
  {
    id: 2,
    name: "C#",
    level: "Intermediate"
  },
  {
    id: 3,
    name: "HTML & CSS",
    level: "Excellent"
  },
  {
    id: 4,
    name: "JavaScript",
    level: "Intermediate"
  },
  {
    id: 5,
    name: "TypeScript",
    level: "Intermediate"
  },
  {
    id: 6,
    name: "MongoDB",
    level: "Basic"
  },
  {
    id: 7,
    name: "NodeJS",
    level: "Basic"
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
