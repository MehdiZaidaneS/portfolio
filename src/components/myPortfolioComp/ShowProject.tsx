import React from 'react'
import styles from "./ShowProject.module.scss"

type ShowProjectProps = {
title: string
year: number
url: string

}

const ShowProject: React.FC<ShowProjectProps> = (props) => {
  return (
    <div className={styles.contenedor}>
      
      <img src={props.url} alt='' width={300} height={200}></img>
      <h1>-Title: {props.title}</h1>
      <h2>-Year: {props.year}</h2>
      <h2>-Description: </h2>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, quam consectetur dolor deserunt, optio eius sunt quis rem ex architecto, ipsa asperiores iure error temporibus aliquid. Quaerat accusamus, doloremque officiis eos voluptate, soluta minus molestiae facilis commodi vel mollitia nisi.</p>
      
    </div>
  )
}

export default ShowProject
