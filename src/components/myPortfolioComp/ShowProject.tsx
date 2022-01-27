import React from 'react'
import styles from "./ShowProject.module.scss"

type ShowProjectProps = {
title: string
year: number
url: string
language: string
description: string

}

const ShowProject: React.FC<ShowProjectProps> = ({title, url, year, language, description}) => {
  return (
    <div className={styles.contenedor}>

      <div className={styles.picture}>
        <img src={url} alt='' width={300} height={200}></img>
      </div>
      <div className={styles.info}>
        <h2>-Title: {title}</h2>
        <h2>-Year: {year}</h2>
        <h2>-Language: {language}</h2>
        <h2>-Description: </h2>
        <p>{description}</p>
      </div>
      
    </div>
  )
}

export default ShowProject
