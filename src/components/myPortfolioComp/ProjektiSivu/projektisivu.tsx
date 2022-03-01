import React, { useEffect } from 'react'
import Projects from './ProjektiSivuComp/projects';
import styles from "./projektisivu.module.scss";
import santa from "../media/santasnow.jpg"
import web from "../media/web.png"
import {AiOutlineCaretLeft, AiOutlineCaretRight } from "react-icons/ai";
import wolfgame from "../media/wolfgame.jpg"
import java from "../media/java.png"
import techweb from "../media/techweb.jpg"
import dodgeball from "../media/dodgeball.png"
import ShowProject from './ProjektiSivuComp/ShowProject';
import { useState } from 'react';

export type ProjektisivuProps = {
   title:string
   description:string
   año:number
   language: string
   url: string
   id: number

}

const Projektisivu: React.FC<any> = (props) => {


    const [currentItem, setItem] = useState<ProjektisivuProps|null>(null);
    
    useEffect(() =>{
      const proyectos: ProjektisivuProps[]= [
        {
          title: "SantaSnow",
          description: "SantaSnow is game built with Unity/C# in 2022. The game has 2 game modes and 3 different enemies. The goal of the game is to kill the final boss without losing the initial 5 lives.",
          año: 2022,
          language: "C#",
          url: santa,
          id: 0
        },
        {
          title: "Tech Web",
          description: "This is a technology web page, not yet completed, created in 2021 with HTML and CSS.",
          año: 2021,
          language: "HTML & CSS",
          url:techweb,
          id: 1
        },
        {
          title: "The Wolf Adventure",
          description: "The Adventures of the Wolf it is a game created in group with Unity/C# in 2021.The game consists of overcoming 3 levels fighting with other animals and collecting mushrooms to gain special effects.",
          año: 2021,
          language: "C#",
          url: wolfgame,
          id: 2
        },
        {
          title: "Dodge the Ball",
          description: "Dodge the Ball was my first game built with Unity/C#. It was made in 2021.The game consists of dodging balls as their speed and spawn rate increase.",
          año: 2021,
          language: "C#",
          url: dodgeball,
          id: 3
        },
        {
          title: "Supervivientes",
          description: "Supervivientes was my first web page created with HTML and CSS. It was made in 2021. It is a fan page about the most popular programs in Spain.",
          año: 2021,
          language: "HTML & CSS",
          url: web,
          id: 4
        },
        {
          title: "RPG Game",
          description: "RPG Game was my first programming project, created with Java in 2021. The game consists of overcoming tasks and challenges and completing an incredible story.",
          año: 2021,
          language: "Java",
          url: java,
          id:5
        }
      ];
      if(props.location.state !== null){
           setItem(proyectos[props.location.state]) 
      }
    },[props.location.state])




    const proyectos: ProjektisivuProps[]= [
      {
        title: "SantaSnow",
        description: "SantaSnow is game built with Unity/C# in 2022. The game has 2 game modes and 3 different enemies. The goal of the game is to kill the final boss without losing the initial 5 lives.",
        año: 2022,
        language: "C#",
        url: santa,
        id: 0
      },
      {
        title: "Tech Web",
        description: "This is a technology web page, not yet completed, created in 2021 with HTML and CSS.",
        año: 2021,
        language: "HTML & CSS",
        url:techweb,
        id: 1
      },
      {
        title: "The Wolf Adventure",
        description: "The Adventures of the Wolf it is a game created in group with Unity/C# in 2021.The game consists of overcoming 3 levels fighting with other animals and collecting mushrooms to gain special effects.",
        año: 2021,
        language: "C#",
        url: wolfgame,
        id: 2
      },
      {
        title: "Dodge the Ball",
        description: "Dodge the Ball was my first game built with Unity/C#. It was made in 2021.The game consists of dodging balls as their speed and spawn rate increase.",
        año: 2021,
        language: "C#",
        url: dodgeball,
        id: 3
      },
      {
        title: "Supervivientes",
        description: "Supervivientes was my first web page created with HTML and CSS. It was made in 2021. It is a fan page about the most popular programs in Spain.",
        año: 2021,
        language: "HTML & CSS",
        url: web,
        id: 4
      },
      {
        title: "RPG Game",
        description: "RPG Game was my first programming project, created with Java in 2021. The game consists of overcoming tasks and challenges and completing an incredible story.",
        año: 2021,
        language: "Java",
        url: java,
        id:5
      }
    ];  

    
    function nextButtonHandler(project:ProjektisivuProps){
       if (proyectos.some(e => e.id === project.id+1)) {
        setItem(proyectos[project.id+1])
      }else{
        setItem(proyectos[0])
      }
    }

    function previousButtonHandler(project:ProjektisivuProps){
      if (proyectos.some(e => e.id === project.id-1)) {
       setItem(proyectos[project.id-1])
     }else{
       setItem(proyectos[5])
     }
   }
     

  return(
  <div>
    <h1 className={styles.title}>PROJECTS</h1>
    { currentItem && 
  <div className={styles.show}>
        <div className={styles.block}>
          <button className={styles.buttonLeft}onClick={() => previousButtonHandler(currentItem)}><AiOutlineCaretLeft size={30}></AiOutlineCaretLeft></button>
          <ShowProject title={currentItem.title} year={currentItem.año} url={currentItem.url} language={currentItem.language} description={currentItem.description} />
          <button className={styles.buttonRight} onClick={() => nextButtonHandler(currentItem)}><AiOutlineCaretRight size={30}></AiOutlineCaretRight></button>
        </div>
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