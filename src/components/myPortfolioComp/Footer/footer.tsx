import React from 'react'
import {FaTwitter, FaFacebook, FaInstagram} from "react-icons/fa"
import styles from "./footer.module.scss";










type FooterProps = {

}
 

const Footer: React.FC<FooterProps> = () => {
  return (
    <div>
      <div className={styles.socialMedia}>
          <div className={styles.twitter}>
            <a href="https://twitter.com/BarackObama" target={'_blank'} rel='noreferrer' >
            <FaTwitter/>
            </a>
          </div>
          <div className={styles.instagram}>
            <a href="https://www.instagram.com/mehdi_zdn5" target={'_blank'} rel='noreferrer'>
              <FaInstagram />
            </a>
          </div>
          <div className={styles.facebook}>
            <a href="https://www.facebook.com/mehdi.zaidane.56/" target={'_blank'} rel='noreferrer'>
            <FaFacebook/>
           </a>
          </div>
          
      </div>
    </div>
  )
}

export default Footer
