// App.tsx
import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';
import NewCV from './components/myPortfolioComp/CV/newCV';
import Etusivu from './components/myPortfolioComp/Etusivu/etusivu';
import styles from './App.module.scss';
import Footer from './components/myPortfolioComp/Footer/footer';
import Projektisivu from './components/myPortfolioComp/ProjektiSivu/projektisivu';
import SocialMedia from './components/myPortfolioComp/SidebarComp/SocialMedia';
import Me from './components/myPortfolioComp/SidebarComp/Me';

const App: React.FC = () => {

   
 


  return (
    <Router basename='/portfolio'>


    <div className={styles.sidebar}>
            <Me/>
            <div className={styles.thea}>
              <Link to='/' className={styles.current}>Home</Link>
              <Link to='projects'  className={styles.current}>Projects</Link>
              <Link to= 'cv'  className={styles.current}>CV</Link>
            </div>
            <SocialMedia />
    </div>
    
    <div className={styles.wrapper}>
      <div className={styles.content}>
         <Switch>
            <Route exact path='/' component={Etusivu} />
            <Route exact path='/projects' component={Projektisivu}/>
            <Route exact path= '/cv' component={NewCV} />
        </Switch>        
      </div>
    </div>
    <div className={styles.footer}>
      <Footer></Footer>
    </div>
  </Router>


  )
}

export default App