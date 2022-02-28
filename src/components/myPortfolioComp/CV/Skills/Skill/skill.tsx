import React from 'react'
import styles from "./skill.module.scss"

type SkillProps = {
   language: string
   level: string
}

const Skill: React.FC<SkillProps> = ({language, level}) => {
  return (
    <div className={styles.listOfSkills}>
      <li>{language}: {level}.</li>
    </div>
  )
}

export default Skill
