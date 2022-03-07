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
    
    
    const [languageShow, setLanguageShow] = useState("");
    const [yearShow, setYearShow] = useState(0);
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

    const nextButtonHandler = (project: ProjektisivuProps) => {
      let nextIndex:number = 0;
      if(yearShow === 0){
        const currentIndex = projectToShow.findIndex(x => project.id === x.id);
        nextIndex = currentIndex === projectToShow.length - 1 ?  0  : currentIndex + 1;
        setItem(projectToShow[nextIndex]);
      } else {
        const currentIndex = projectToShow2.findIndex(x => project.id === x.id);
        nextIndex = currentIndex === projectToShow2.length - 1 ?  0  : currentIndex + 1;
        setItem(projectToShow2[nextIndex]);
      }
      
    }    
    

  const previousButtonHandler = (project: ProjektisivuProps) => {
    let nextIndex:number = 0;
    if(yearShow === 0){
      const currentIndex = projectToShow.findIndex(x => project.id === x.id);
      nextIndex = currentIndex === 0 ? projectToShow.length - 1 : currentIndex - 1;
      setItem(projectToShow[nextIndex]);
    } else {
      const currentIndex = projectToShow2.findIndex(x => project.id === x.id);
      nextIndex = currentIndex === 0 ? projectToShow2.length - 1 : currentIndex - 1;
      setItem(projectToShow2[nextIndex]);
    }
    
  }
  

   const projectToShow = languageShow === "" ?
    proyectos.filter( project => project.id > -1)
   :
    proyectos.filter( project => project.language === languageShow)


   const projectToShow2 = yearShow === 0 ?
   proyectos.filter(project => project.año > 0)
   :
   proyectos.filter(project => project.año === yearShow)

  

   
   
   

  return(
    
  <div>
    <h1 className={styles.title}>PROJECTS</h1>
    <div className={styles.showType}>
      <ul>
        <li><button onClick={ () => {setLanguageShow(""); setYearShow(0);}}>· Show All</button></li>
        <li>· Languages
            <div className={styles.buttons}>
               <button onClick={ () => {setLanguageShow("C#"); setYearShow(0);}}>C#</button>
               <button onClick={ () => {setLanguageShow("Java"); setYearShow(0);}}>Java</button>
               <button onClick={ () => {setLanguageShow("HTML & CSS"); setYearShow(0);}}>HTML</button>
               <button onClick={ () => {setLanguageShow("Python"); setYearShow(0);}}>Python</button>
            </div>
        </li>
        <li>· Years
              <div className={styles.buttons}>
                <button onClick={ () => setYearShow(2022)}>2022</button>
                <button onClick={ () => setYearShow(2021)}>2021</button>
              </div>
        </li>
      </ul>
    </div>
    
  
    { currentItem && 
  <div className={styles.show}>
        <div className={styles.block}>

          <button className={styles.buttonLeft}
            onClick={() => previousButtonHandler(currentItem)}>
            <AiOutlineCaretLeft size={30}/>
          </button>

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
          yearShow === 0 ?
          projectToShow.map(x => {
            return (
              <div key={x.url}>
                <Projects urls={x.url} title={x.title}></Projects>
                <button onClick={() => setItem(x)}>See more</button>
              </div>
            )
          })
          :
          projectToShow2.map(x => {
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