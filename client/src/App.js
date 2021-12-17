import './App.css';
import React, {useState} from 'react';
import { Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home'
import Mountain from './pages/Mountain'
import AddDog from './pages/Add_dog'


function App() {
  return (
    <div className="App">
    <Header />
    <main>
        <Switch>
          <Route exact path="/" component ={Home} />
          <Route path="/addDog" component = {AddDog}/>
          <Route path="/mountains" component ={Mountain} />
        </Switch>
      </main>
    </div>
  );
}

export default App;
