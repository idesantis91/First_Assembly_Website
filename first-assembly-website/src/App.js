import React from 'react';
import { Switch, Route } from 'react-router-dom';
//Styles
import GlobalStyled from './components/GlobalStyled';
//Components
import Nav from './components/Nav';
//Pages
import Home from './pages/Home';
import About from './pages/About';
import Give from './pages/Give';

function App() {
  return (
    <div className="App">
      <GlobalStyled/>
      <Nav/>
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/about">
          <About/>
        </Route>
        <Route path="/give">
          <Give />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
