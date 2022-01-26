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
import { useState } from 'react';

type ProjektisivuProps = {
   title:string
   description:string
   año:number
   language: string
   url: string

}

const Projektisivu: React.FC<ProjektisivuProps> = () => {

    const [visible, setVisible] = useState(false)
  
    const proyectos= [
      {
        title: "a",
        description: "",
        año: 0,
        language: "",
        url: santa
      },
      {
        title: "SantaSnow",
        description: "Game",
        año: 2022,
        language: "C#",
        url: santa
      },
      {
        title: "Supervivientes",
        description: "Web page",
        año: 2020,
        language: "HTML & CSS",
        url: web
      },
      {
        title: "Wolf Adventure",
        description: "Game",
        año: 2021,
        language: "C#",
        url: wolfgame
      },
      {
        title: "RPG Game",
        description: "Game",
        año: 2020,
        language: "Java",
        url: java
      },
      {
        title: "Tech Page",
        description: "Web Page",
        año: 2021,
        language: "HTML & CSS",
        url:techweb
      },
      {
        title: "Dodge the Ball",
        description: "Game",
        año: 2021,
        language: "C#",
        url: dodgeball
      }
    ];  

  return (
    <div>
      { visible &&
       <div className={styles.show}>
          <ShowProject title={proyectos[0].title} year={proyectos[0].año} url={proyectos[0].url} />
          <button onClick={ () => setVisible(false)}>Hide Description</button>
       </div>
      }
      { visible === false &&
       <div className={styles.nProjects}>
         <div>
         <Projects urls={santa} title={proyectos[1].title}></Projects>
         <button onClick={() => setVisible(true)}>See more</button>
         </div>
         <div>
         <Projects urls={web} title={proyectos[2].title} ></Projects>
         <button onClick={() => setVisible(true)}>See more</button>
         </div>
         <div>
         <Projects urls={wolfgame} title={proyectos[3].title}></Projects>
         <button onClick={() => setVisible(true)}>See more</button>
         </div>
         <div>
         <Projects urls={java} title={proyectos[4].title}></Projects>
         <button onClick={() => setVisible(true)}>See more</button>
         </div>
         <div>
         <Projects urls={techweb} title={proyectos[5].title}></Projects>
         <button onClick={() => setVisible(true)}>See more</button>
         </div>
         <div>
         <Projects urls={dodgeball} title={proyectos[6].title}></Projects>
         <button onClick={() => setVisible(true)}>See more</button>
         </div>
       </div>
      }
    </div>
  )
}

export default Projektisivu