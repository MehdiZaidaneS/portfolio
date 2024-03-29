import React, { useEffect } from 'react'
import Projects from './ProjektiSivuComp/projects';
import styles from "./projektisivu.module.scss";
import santa from "../media/santasnow.jpg"
import web from "../media/web.png"
import {AiOutlineCaretLeft, AiOutlineCaretRight } from "react-icons/ai";
import wolfgame from "../media/wolfgame.jpg"
import java from "../media/java.png"
import techweb from "../media/techweb.jpg"
import logreg from "../media/UserLogAndReg.jpg"
import dodgeball from "../media/dodgeball.png"
import ChatApp from "../media/ChatApp.png"
import GymApp from "../media/gymapp.jpg"
import ShowProject from './ProjektiSivuComp/ShowProject';
import { useState } from 'react';

export type ProjektisivuProps = {
   title:string
   description:string
   año:number
   language: string
   url: string
   id: number
   link: string
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
          id: 8,
          link: "https://github.com/MehdiZaidaneS/SantaSnowScripts.git"
        },
        {
          title: "Tech Web",
          description: "This is a technology web page, not yet completed, created in 2021 with HTML and CSS.",
          año: 2021,
          language: "HTML & CSS",
          url:techweb,
          id: 7,
          link: "https://github.com/MehdiZaidaneS"
        },
        {
          title: "The Wolf Adventure",
          description: "The Adventures of the Wolf it is a game created in group with Unity/C# in 2021.The game consists of overcoming 3 levels fighting with other animals and collecting mushrooms to gain special effects.",
          año: 2021,
          language: "C#",
          url: wolfgame,
          id: 6,
          link: "https://github.com/varia-ict/varia-agile-20C-ryhma-1.git"
        },
        {
          title: "Dodge the Ball",
          description: "Dodge the Ball was my first game built with Unity/C#. It was made in 2021.The game consists of dodging balls as their speed and spawn rate increase.",
          año: 2021,
          language: "C#",
          url: dodgeball,
          id: 5,
          link: "https://github.com/MehdiZaidaneS/DodgeBallGameScripts.git"
        },
        {
          title: "Supervivientes",
          description: "Supervivientes was my first web page created with HTML and CSS. It was made in 2021. It is a fan page about the most popular programs in Spain.",
          año: 2021,
          language: "HTML & CSS",
          url: web,
          id: 4,
          link: "https://github.com/MehdiZaidaneS/SupervivientesWeb.git"
        },
        {
          title: "RPG Game",
          description: "RPG Game was my first programming project, created with Java in 2021. The game consists of overcoming tasks and challenges and completing an incredible story.",
          año: 2021,
          language: "Java",
          url: java,
          id:3,
          link: "https://github.com/MehdiZaidaneS/RPG-Java.git"
        },
        {
          title: "Log In & Register",
          description: "Functional Login and Registration Form made with React and Firebase.",
          año: 2022,
          language: "React",
          url: logreg,
          id:2,
          link: "https://github.com/MehdiZaidaneS/UserLogAndRegister.git"
        },
        {
          title: "Chat App",
          description: "Functional Chat App made with React and Firebase.",
          año: 2023,
          language: "React",
          url: ChatApp,
          id:1,
          link: "https://github.com/MehdiZaidaneS/ChatApp"
        },
        {
          title: "Gym App",
          description: "Application made with react that facilitates your progress in the gym. Count the kilos that you will have to use in each set and the necessary rest.",
          año: 2023,
          language: "React",
          url: GymApp,
          id:0,
          link: "https://github.com/MehdiZaidaneS/gymapp"
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
        id: 8,
        link: "https://github.com/MehdiZaidaneS/SantaSnowScripts.git"
      },
      {
        title: "Tech Web",
        description: "This is a technology web page, not yet completed, created in 2021 with HTML and CSS.",
        año: 2021,
        language: "HTML & CSS",
        url:techweb,
        id: 7,
        link: "https://github.com/MehdiZaidaneS"
      },
      {
        title: "The Wolf Adventure",
        description: "The Adventures of the Wolf it is a game created in group with Unity/C# in 2021.The game consists of overcoming 3 levels fighting with other animals and collecting mushrooms to gain special effects.",
        año: 2021,
        language: "C#",
        url: wolfgame,
        id: 6,
        link: "https://github.com/varia-ict/varia-agile-20C-ryhma-1.git"
      },
      {
        title: "Dodge the Ball",
        description: "Dodge the Ball was my first game built with Unity/C#. It was made in 2021.The game consists of dodging balls as their speed and spawn rate increase.",
        año: 2021,
        language: "C#",
        url: dodgeball,
        id: 5,
        link: "https://github.com/MehdiZaidaneS/DodgeBallGameScripts.git"
      },
      {
        title: "Supervivientes",
        description: "Supervivientes was my first web page created with HTML and CSS. It was made in 2021. It is a fan page about the most popular programs in Spain.",
        año: 2021,
        language: "HTML & CSS",
        url: web,
        id: 4,
        link: "https://github.com/MehdiZaidaneS/SupervivientesWeb.git"
      },
      {
        title: "RPG Game",
        description: "RPG Game was my first programming project, created with Java in 2021. The game consists of overcoming tasks and challenges and completing an incredible story.",
        año: 2021,
        language: "Java",
        url: java,
        id:3,
        link: "https://github.com/MehdiZaidaneS/RPG-Java.git"
      },
      {
        title: "Log In & Register",
        description: "Functional Login and Registration Form made with React and Firebase.",
        año: 2022,
        language: "React",
        url: logreg,
        id:2,
        link: "https://github.com/MehdiZaidaneS/UserLogAndRegister.git"
      },
      {
        title: "Chat App",
        description: "Functional Chat App made with React and Firebase.",
        año: 2023,
        language: "React",
        url: ChatApp,
        id:1,
        link: "https://github.com/MehdiZaidaneS/ChatApp"
      },
      {
        title: "Gym App",
        description: "Application made with react that facilitates your progress in the gym. Count the kilos that you will have to use in each set and the necessary rest.",
        año: 2023,
        language: "React",
        url: GymApp,
        id:0,
        link: "https://github.com/MehdiZaidaneS/gymapp"
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
               <button onClick={ () => {setLanguageShow("React"); setYearShow(0);}}>React</button>
            </div>
        </li>
        <li>· Years
              <div className={styles.buttons}>
                <button onClick={ () => setYearShow(2023)}>2023</button>
                <button onClick={ () => setYearShow(2022)}>2022</button>
                <button onClick={ () => setYearShow(2021)}>2021</button>

              </div>
        </li>
      </ul>
    </div>
    
  
    { currentItem && 
  <div className={styles.show}>
        <div className={styles.block}>
          <button className={styles.buttonLeft} onClick={() => previousButtonHandler(currentItem)}> <AiOutlineCaretLeft size={30}/></button>

          <ShowProject title={currentItem.title} year={currentItem.año} url={currentItem.url} language={currentItem.language} description={currentItem.description} link={currentItem.link} />
          <div className={styles.middleButtons}>
            <button className={styles.buttonLeft2} onClick={() => previousButtonHandler(currentItem)}> <AiOutlineCaretLeft size={30}/></button>
            <button className={styles.buttonRight} onClick={() => nextButtonHandler(currentItem)}><AiOutlineCaretRight size={30}></AiOutlineCaretRight></button>
          </div>
          
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