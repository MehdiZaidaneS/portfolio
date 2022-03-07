import React from 'react'
import { AiOutlineGithub } from 'react-icons/ai';
import {FaTwitter, FaFacebook, FaInstagram} from "react-icons/fa"
import styles from "./footer.module.scss";










type FooterProps = {

}
 

const Footer: React.FC<FooterProps> = () => {
  return (
    
      <div className={styles.socialMedia}>    
        <a href="https://twitter.com/BarackObama" target={'_blank'} rel='noreferrer' >
          <FaTwitter />
        </a>
      
        <a href="https://www.instagram.com/mehdi_zdn5" target={'_blank'} rel='noreferrer'>
          <FaInstagram/>
        </a>
      
      
        <a href="https://www.facebook.com/mehdi.zaidane.56/" target={'_blank'} rel='noreferrer'>
          <FaFacebook/>
        </a>
  
        <a href='https://github.com/MehdiZaidaneS' target={'_blank'} rel='noreferrer'>
          <AiOutlineGithub size={32}/>
        </a>
      </div>
  )
}

export default Footer
