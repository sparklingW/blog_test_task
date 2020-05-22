import React from 'react';
import {
  Switch,
  Route,
} from "react-router-dom";
import Posts from './containers/Posts';
import SinglePost from './components/SinglePost';
import './App.css';

function App() {
  return (
    <div>
      <Switch>
        <Route exact path='/'>
          <Posts />
        </Route>
        <Route path={`/post:id`}>
          <SinglePost />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
