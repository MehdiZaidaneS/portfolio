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
        <img src={url} alt='' width={400} height={250}></img>
      </div>
      <div className={styles.info}>
        <h1>{title}</h1>
        <p>{description}</p>
      </div>
      
    </div>
  )
}

export default ShowProject
