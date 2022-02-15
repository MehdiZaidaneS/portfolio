import React from 'react'

type SkillProps = {
   language: string
   level: string
}

const Skill: React.FC<SkillProps> = ({language, level}) => {
  return (
    <div>
      <li>{language}: {level}.</li>
    </div>
  )
}

export default Skill
