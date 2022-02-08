// App.tsx
import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';
import Cv from './components/myPortfolioComp/CV/cv';
import Etusivu from './components/myPortfolioComp/Etusivu/etusivu';
import styles from './App.module.scss';
import Footer from './components/myPortfolioComp/Footer/footer';
import Projektisivu from './components/myPortfolioComp/ProjektiSivu/projektisivu';
import SocialMedia from './components/myPortfolioComp/SidebarComp/SocialMedia';
import Me from './components/myPortfolioComp/SidebarComp/Me';

const App: React.FC = () => {

  return (
    <Router basename='/portfolio'>

    <div className={styles.wrapper}>
      <div className={styles.content}>
         <Switch>
          <Route exact path='/' component={Etusivu} />
          <Route exact path='/projects' component={Projektisivu}/>
          <Route exact path= '/cv' component={Cv} />
        </Switch>
        <Footer />
      </div>
    </div>
    <div className={styles.sidebar}>
        <Me/>
        <div className={styles.thea}>
        <Link to='/'>Home</Link>
        <Link to='projects'>Projects</Link>
        <Link to= 'cv'>CV</Link>
        <a href='https://github.com/MehdiZaidaneS' target={'_blank'} rel='noreferrer'>GitHub</a>
        </div>
        <SocialMedia />
    </div>
  </Router>


  )
}

export default App