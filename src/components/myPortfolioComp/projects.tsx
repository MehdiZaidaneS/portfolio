import React from 'react'
import styles from "./projects.module.scss";

type ProjectsProps = {
     description:string
     title:string
     year: number
     urls:string
}

const Projects: React.FC<ProjectsProps> = (props) => {
  return (
    <div className={styles.project}>
      <div>
          <img src={props.urls} alt='' width={300} height={300}></img>
      </div>
      <div className={styles.cosas}>
         <p>Title: {props.title}.</p>
         <p>Description: {props.description}</p>
         <p>Year: {props.year}</p>
      </div>
      
    </div>
  )
}

export default Projects
