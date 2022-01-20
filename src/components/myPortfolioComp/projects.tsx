import React, { useState } from 'react'
import styles from "./projects.module.scss";

type ProjectsProps = {
     description:string
     title:string
     year: number
     urls:string
     language: string
}

const Projects: React.FC<ProjectsProps> = (props) => {
  
  const [visible, setVisible] = useState(false);

  return (
    <div className={styles.project}>

      <div>   
          <h1>{props.title}</h1>
      </div>

      <div className={styles.pack}>
      <div>
          <img src={props.urls} alt='' width={300} height={200}></img>
      </div>
      { visible &&
      <div className={styles.cosas}>
         <p>Type: {props.description}</p>
         <p>Year: {props.year}</p>
         <p>Language: {props.language}</p>
      </div>
      }
      </div>

      <div>
        <button onClick={() => setVisible(!visible)}>{visible ? ' Hide Description' : 'Show Description'}</button>
      </div>
      
     
    </div>
  )
}

export default Projects
