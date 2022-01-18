// App.tsx
import React from 'react'
import SomeExampleComponent from './components/example/someExampleComponent';
import MyFirstComponent from './components/myFirstComponent';
import ClickCount from './components/clickCount/clickCount';

const App: React.FC = () => {
  return (
    <div>
      <MyFirstComponent />
      <SomeExampleComponent />
      <ClickCount />
    </div>
  )
}

export default App