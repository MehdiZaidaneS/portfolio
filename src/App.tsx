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

const App: React.FC = () => {

   const [visible, setVisible] = useState(true);

  return (
    <Router basename='/portfolio'>
      
      {/* The navigation bar and other components you want to display on all pages come here */}
    
      <div className={styles.barra}>
        { visible === true &&
        <div className={styles.navbar}>
        <Link to='/'>-Home</Link>
        <Link to='projects'>-Projects</Link>
        <Link to= 'cv'>-CV</Link>
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