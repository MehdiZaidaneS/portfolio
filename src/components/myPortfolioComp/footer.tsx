import React from 'react'
import styles from "./footer.module.scss";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faFacebook,
  faTwitter,
  faInstagram
} from "@fortawesome/free-brands-svg-icons";

type FooterProps = {

}

const Footer: React.FC<FooterProps> = () => {
  return (
    <div>
      <div className={styles.socialMedia}>
          <div className={styles.twitter}>
            <a href="https://twitter.com/BarackObama" target={'_blank'} rel='noreferrer' >
            <FontAwesomeIcon icon={faTwitter} size="2x" />
            </a>
          </div>
          <div className={styles.instagram}>
            <a href="https://www.instagram.com/mehdi_zdn5" target={'_blank'} rel='noreferrer'>
            <FontAwesomeIcon icon={faInstagram} size="2x" />
            </a>
          </div>
          <div className={styles.facebook}>
            <a href="https://www.facebook.com/mehdi.zaidane.56/" target={'_blank'} rel='noreferrer'>
            <FontAwesomeIcon icon={faFacebook} size="2x" />
            </a>
          </div>
          
      </div>
    </div>
  )
}

export default Footer
