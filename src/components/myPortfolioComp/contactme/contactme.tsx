import React, { useState } from 'react'
import { SiGmail, SiMicrosoftoutlook } from "react-icons/si"
import { AiOutlineMail } from "react-icons/ai"
import { ImYahoo2 } from "react-icons/im"
import styles from "./contactme.module.scss"

type ContactmeProps = {

}

const Contactme: React.FC<ContactmeProps> = () => {
    const [copy , setCopy] = useState("Copy")

  return (
    <div className={styles.contact}>
      <h1>Contact Me</h1>

      <div className={styles.email}>
        <h4>Email: mehdicontacto@gmail.com</h4>
        <button onClick={() =>  {navigator.clipboard.writeText('mehdicontacto@gmail.com'); setCopy("Copied!");}}>{copy}</button>
      </div>

      <div className={styles.typeOfEmail}>
        <a href="mailto:mehdicontacto@gmail.com">
           <AiOutlineMail/>
        </a>
        <a href="https://www.google.com/gmail/" target={'_blank'} rel='noreferrer' >
          <SiGmail/>
        </a>
        <a href="https://outlook.live.com" target={'_blank'} rel='noreferrer'>
          <SiMicrosoftoutlook />
        </a>
        <a href="https://mail.yahoo.com/" target={'_blank'} rel='noreferrer'>
          <ImYahoo2/>
        </a>
  
      </div>
      
    </div>
  )
}

export default Contactme
