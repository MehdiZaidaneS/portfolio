import React from 'react'
import Projects from './projects';
import styles from "./projektisivu.module.scss";
import santa from "./media/santasnow.jpg"
import web from "./media/web.png"
import wolfgame from "./media/wolfgame.jpg"
import java from "./media/java.png"
import techweb from "./media/techweb.jpg"
import dodgeball from "./media/dodgeball.png"
import ShowProject from "./ShowProject"

type ProjektisivuProps = {
   title:string
   description:string
   año:number
   language: string
   url: string
}

const Projektisivu: React.FC<ProjektisivuProps> = () => {
    
    const showProject={
      title: "",
      description: "",
      año: 0,
      language: "",
      url: santa
    }
    
    const project1={
        title: "SantaSnow",
        description: "Game",
        año: 2022,
        language: "C#"
    }
    const project2={
      title: "Supervivientes",
      description: "Web page",
      año: 2020,
      language: "HTML & CSS"
    }
    const project3={
      title: "Wolf Adventure",
      description: "Game",
      año: 2021,
      language: "C#"
    }
    const project4={
      title: "RPG Game",
      description: "Game",
      año: 2020,
      language: "Java"
    }
    const project5={
      title: "Tech Page",
      description: "Web Page",
      año: 2021,
      language: "HTML & CSS"
    }
    const project7={
      title: "Dodge the Ball",
      description: "Game",
      año: 2021,
      language: "C#"
    }

  return (
    <div>
      <div className={styles.show}>
          <ShowProject title={showProject.title} year={showProject.año} url={showProject.url} />
         </div>
       <div className={styles.nProjects}>
         <div>
         <Projects urls={santa} description={project1.description} title={project1.title} year={project1.año} language={project1.language}></Projects>
         </div>
         <div>
         <Projects urls={web} description={project2.description} title={project2.title} year={project2.año}language={project2.language} ></Projects> 
         </div>
         <div>
         <Projects urls={wolfgame} description={project3.description} title={project3.title} year={project3.año} language={project3.language}></Projects>
         </div>
         <div>
         <Projects urls={java} description={project4.description} title={project4.title} year={project4.año} language={project4.language}></Projects>
         </div>
         <div>
         <Projects urls={techweb} description={project5.description} title={project5.title} year={project5.año} language={project5.language}></Projects>
         </div>
         <div>
         <Projects urls={dodgeball} description={project7.description} title={project7.title} year={project7.año} language={project7.language}></Projects>
         </div>
       
       
       
      
       
       
       
       </div>
    </div>
  )
}

export default Projektisivu
