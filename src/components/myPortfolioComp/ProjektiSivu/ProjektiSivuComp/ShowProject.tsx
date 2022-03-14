import React from 'react'
import styles from "./ShowProject.module.scss"



type ShowProjectProps = {
title: string
year: number
url: string
language: string
description: string
link: string

}

const ShowProject: React.FC<ShowProjectProps> = ({title, url, year, language, description, link}) => {
  return (
  
    
    <div className={styles.contenedor}>
      <div className={styles.picture}>
        <img src={url} alt='' width={400} height={250}></img>
      </div>
      <div className={styles.info}>
        <h1>{title}</h1>
        <p>{description}</p>
        <a href={link} target={'_blank'} rel='noreferrer'>Open in GitHub</a>
      </div>
      
    </div>
    
    
  )
}

export default ShowProject
