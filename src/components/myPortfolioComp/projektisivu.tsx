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

export type ProjektisivuProps = {
   title:string
   description:string
   año:number
   language: string
   url: string

}

const Projektisivu: React.FC<ProjektisivuProps> = () => {


    const [currentItem, setItem] = useState<ProjektisivuProps|null>(null);
    
  
    const proyectos: ProjektisivuProps[]= [
      {
        title: "SantaSnow",
        description: "SantaSnow is game built with Unity/C# in 2022. The game has 2 game modes and 3 different enemies. The goal of the game is to kill the final boss without losing the initial 5 lives.",
        año: 2022,
        language: "C#",
        url: santa
      },
      {
        title: "Tech Web",
        description: "This is a technology web page, not yet completed, created in 2021 with HTML and CSS.",
        año: 2021,
        language: "HTML & CSS",
        url:techweb
      },
      {
        title: "The Wolf Adventure",
        description: "The Adventures of the Wolf it is a game created in group with Unity/C# in 2021.The game consists of overcoming 3 levels fighting with other animals and collecting mushrooms to gain special effects.",
        año: 2021,
        language: "C#",
        url: wolfgame
      },
      {
        title: "Dodge the Ball",
        description: "Dodge the Ball was my first game built with Unity/C#. It was made in 2021.The game consists of dodging balls as their speed and spawn rate increase.",
        año: 2021,
        language: "C#",
        url: dodgeball
      },
      {
        title: "Supervivientes",
        description: "Supervivientes was my first web page created with HTML and CSS. It was made in 2021. It is a fan page about the most popular programs in Spain.",
        año: 2021,
        language: "HTML & CSS",
        url: web
      },
      {
        title: "RPG Game",
        description: "RPG Game was my first programming project, created with Java in 2021. The game consists of overcoming tasks and challenges and completing an incredible story.",
        año: 2021,
        language: "Java",
        url: java
      }
    ];  




  return(
  <div>
    { currentItem && 
  <div className={styles.show}>
        <ShowProject title={currentItem.title} year={currentItem.año} url={currentItem.url} language={currentItem.language} description={currentItem.description} />
        <div className={styles.showButton}>
        <button onClick={ () => setItem(null)}>Hide Description</button>
        </div>
        <hr></hr>
  </div>
  }

  
      <div className={styles.nProjects}>
        {
          proyectos.map(x => {
            return (
              <div key={x.url}>
                <Projects urls={x.url} title={x.title}></Projects>
                <button onClick={() => setItem(x)}>See more</button>
              </div>
            )
          })
        }
     </div>
   </div>
  )
}

export default Projektisivu