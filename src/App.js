// import logo from './logo.svg';
import './App.css';
import React from 'react';
import Monsters from './pages/monsters/monsters.component';
import Posts from './pages/posts/posts.component';
import { Route, Switch } from 'react-router-dom';

const App = () => {
    return (
      <div className="App">
    
        <Switch>
          <Route exact path='/' component={Monsters}/>
          <Route path='/posts/:monsterId' component={Posts}/>
        </Switch>

      </div>
    );
}

export default App;
