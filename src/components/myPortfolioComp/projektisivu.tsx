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




  return currentItem ?  ( 
    <div className={styles.show}>
      <div>
        <ShowProject title={currentItem.title} year={currentItem.año} url={currentItem.url} />
        <button onClick={ () => setItem(null)}>Hide Description</button>
     </div>
  </div>
) :
(
  <div>
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