import React from 'react';
import './App.css';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import RecommendedVideos from './components/RecommendedVideos';
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import SearchPage from './components/SearchPage';

function App() {
  return (
    <div className="App">

      <Router>

        <Header />

        <div className="app__page">
          <Sidebar />

          <Switch>
            
            <Route path="/search/:searchTerm">
              <SearchPage />
            </Route>
            <Route path="/">
              <RecommendedVideos />
            </Route>
            
          </Switch>
        
        </div>  
      </Router>
      
      
    </div>
  );
}

export default App;
