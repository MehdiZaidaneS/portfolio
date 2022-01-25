import React from 'react'
import styles from "./projects.module.scss";

type ProjectsProps = {
     description:string
     title:string
     year: number
     urls:string
     language: string
}

const Projects: React.FC<ProjectsProps> = (props) => {
  

  return (
    <div className={styles.project}>

      <div>   
          <h1>{props.title}</h1>
      </div>

      <div className={styles.pack}>
      <div>
          <img src={props.urls} alt='' width={300} height={200}></img>
      </div>
      
      </div>
    </div>
  )
}

export default Projects
