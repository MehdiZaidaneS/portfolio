// App.tsx
import React, { useState } from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';
import Cv from './components/myPortfolioComp/cv';
import Etusivu from './components/myPortfolioComp/etusivu';
import styles from './App.module.scss';
import Footer from './components/myPortfolioComp/footer';
import Projektisivu from './components/myPortfolioComp/projektisivu';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';

const App: React.FC = () => {

   const [visible, setVisible] = useState(true);

  return (
    <Router basename='/portfolio'>
      
      {/* The navigation bar and other components you want to display on all pages come here */}
      

      <div className={visible === true ? styles.barra : styles.barra2}>
        {
         visible === true &&
        <div className={styles.navbar}>
        <h1>-Menu-</h1>
        <Link to='/'>-Home</Link>
        <Link to='projects'>-Projects</Link>
        <Link to= 'cv'>-CV</Link>
        <a href='https://github.com/MehdiZaidaneS' target={'_blank'} rel='noreferrer'>-GitHub</a>
        <div className={styles.socialMediaa}>
          <div className={styles.twitter}>
            <a href="https://twitter.com/BarackObama" target={'_blank'} rel='noreferrer' >
            <FontAwesomeIcon icon={faTwitter} size="1x" />
            </a>
          </div>
          <div className={styles.instagram}>
            <a href="https://www.instagram.com/mehdi_zdn5" target={'_blank'} rel='noreferrer'>
            <FontAwesomeIcon icon={faInstagram} size="1x" />
            </a>
          </div>
          <div className={styles.facebook}>
            <a href="https://www.facebook.com/mehdi.zaidane.56/" target={'_blank'} rel='noreferrer'>
            <FontAwesomeIcon icon={faFacebook} size="1x" />
            </a>
          </div>
          
      </div>
        </div>
        }
        <div className={styles.abrir}>
          <button onClick={() => setVisible(!visible)}>{visible === true ? "<<": ">>"}</button>
        </div>
        
      </div>
      <Switch>
        {/* Changing content comes here */}
        <Route exact path='/' component={Etusivu} />
        <Route exact path='/projects' component={Projektisivu}/>
        <Route exact path= '/cv' component={Cv} />
      </Switch>
  

      {/* The footer and other components you want to display on all pages come here */}
     
      <Footer />
      

    </Router>
  )
}

export default App