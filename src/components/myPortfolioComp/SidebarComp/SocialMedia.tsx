import React from 'react'
import styles from "./SocialMedia.module.scss"
import { AiOutlineGithub } from "react-icons/ai"
import {FaTwitter, FaFacebook, FaInstagram} from "react-icons/fa"



type SocialMediaProps = {

}

const SocialMedia: React.FC<SocialMediaProps> = () => {
  return (
    <div className={styles.socialMediaa}>
            
      <a href="https://twitter.com/BarackObama" target={'_blank'} rel='noreferrer' >
        <FaTwitter />
      </a>
    
      <a href="https://www.instagram.com/mehdi_zdn5" target={'_blank'} rel='noreferrer'>
        <FaInstagram></FaInstagram>
      </a>
    
    
      <a href="https://www.facebook.com/mehdi.zaidane.56/" target={'_blank'} rel='noreferrer'>
        <FaFacebook></FaFacebook>
      </a>

      <a href='https://github.com/MehdiZaidaneS' target={'_blank'} rel='noreferrer'>
        <AiOutlineGithub size={32}></AiOutlineGithub>
      </a>
            
    </div>
  )
}

export default SocialMedia
