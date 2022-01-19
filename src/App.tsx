// App.tsx
import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';
import SomeExampleComponent from './components/example/someExampleComponent';
import MyFirstComponent from './components/myFirstComponent';
import ClickCount from './components/clickCount/clickCount';
import Etusivu from './components/myPortfolioComp/etusivu';
import styles from './App.module.scss';
import Footer from './components/myPortfolioComp/footer';

const App: React.FC = () => {
  return (
    <Router basename='/portfolio'>
      
      {/* The navigation bar and other components you want to display on all pages come here */}
      <div className={styles.navbar}>
        <Link to='/'>Home</Link>
        <Link to='projects'>Projects</Link>
        <Link to= 'cv'>CV</Link>
      </div>

      <Switch>
        {/* Changing content comes here */}
        <Route exact path='/' component={Etusivu} />
        <Route exact path='/projects' component={SomeExampleComponent}/>
        <Route exact path= '/cv' component={SomeExampleComponent} />
      </Switch>

      {/* The footer and other components you want to display on all pages come here */}
      <Footer />

    </Router>
  )
}

export default App