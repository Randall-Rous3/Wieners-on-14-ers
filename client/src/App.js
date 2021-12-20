import './App.css';
import React, {useState} from 'react';
import { Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home'
import Mountain from './pages/Mountain'
import AddDog from './pages/Add_dog'
import MountainCard from './components/MountainCard';
import MountainDogs from './pages/Mountain_Dogs'
import DogCard from './components/DogCard';
import MountainDetails from './pages/mountainDetails'


function App() {
  return (
    <div className="App">
    <Header />
    <main>
        <Switch>
          <Route exact path="/" component ={Home} />
          <Route path="/addDog" component = {AddDog}/>
          <Route path="/mountains" component ={Mountain} />
          <Route path="/mountains/:mountainId" component = {MountainCard} />
          <Route path="/dogs" component = {MountainDogs} />
          <Route path="/mountains/details/:mountainId" component ={MountainDetails}/>
        </Switch>
      </main>
    </div>
  );
}

export default App;
