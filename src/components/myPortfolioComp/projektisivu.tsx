import React from 'react'
import Projects from './projects';
import styles from "./projektisivu.module.scss";
import santa from "./santasnow.jpg"

type ProjektisivuProps = {
   title:string
   description:string
   año:number
}

const Projektisivu: React.FC<ProjektisivuProps> = () => {
     
    const project1={
        title: "SantaSnow",
        description: "xxx",
        año: 2022
    }
    

  return (
    <div>
       <div className={styles.titulo}>
            <h1>Projects:</h1>
       </div>
       <Projects urls={santa} description={project1.description} title={project1.title} year={project1.año}></Projects>
    </div>
  )
}

export default Projektisivu
