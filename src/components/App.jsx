import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Schedule from './Schedule';
import HomePage from './HomePage';
import Header from './Header';
import SeasonsList from './SeasonsList';

function App(){
  return(
    <div>
      <Header/>
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route exact path='/seasonslist' component={SeasonsList} />
        <Route exact path='/schedule' component={Schedule} />
      </Switch>
    </div>
  );
}

export default App;
