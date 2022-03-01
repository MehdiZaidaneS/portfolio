import React from 'react'
import styles from "./SocialMedia.module.scss"
import {FaTwitter, FaFacebook, FaInstagram} from "react-icons/fa"



type SocialMediaProps = {

}

const SocialMedia: React.FC<SocialMediaProps> = () => {
  return (
    <div className={styles.socialMediaa}>
            
              <a href="https://twitter.com/BarackObama" target={'_blank'} rel='noreferrer' >
              <FaTwitter></FaTwitter>
              </a>
            
           
              <a href="https://www.instagram.com/mehdi_zdn5" target={'_blank'} rel='noreferrer'>
              <FaInstagram></FaInstagram>
              </a>
            
            
              <a href="https://www.facebook.com/mehdi.zaidane.56/" target={'_blank'} rel='noreferrer'>
              <FaFacebook></FaFacebook>
              </a>
            
    </div>
  )
}

export default SocialMedia
