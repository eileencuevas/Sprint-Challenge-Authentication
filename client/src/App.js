import React, { Component } from 'react';
import axios from 'axios';
import { Route } from 'react-router-dom';

import Navigation from './components/Navigation';
import Form from './components/Form';
import Jokes from './components/Jokes';

class App extends Component {
  state = {
    jokes: [],
    loggedIn: false,
  }
  
  fetchJokes = () => {
    const token = localStorage.getItem('jwt');
    const requestOptions = {
      headers: {
        authorization: token,
      }
    }
    axios
      .get('http://localhost:3300/api/jokes/', requestOptions)
      .then(response => {
        this.setState({ jokes: response.data })
      })
      .catch(() =>{
        this.setState({ loggedIn: false });
        console.log('Please Log In to recieve jokes.');
      });
  }

  logOut = () => {
    localStorage.removeItem('jwt');
    window.location.reload(); 
	};

  componentDidMount() {
    this.fetchJokes();
  }


  render() {
    return (
      <div className="App">
        <Navigation jokes={this.state.jokes} logOut={this.logOut}/>
        <Route 
          exact path='/' 
          render={props => (
            <Jokes {...props} jokes={this.state.jokes} />
          )}
        />
        <Route 
          exact path='/login' 
          render={props => (
            <Form {...props} loggedIn={this.toggleLoggedIn} login/>
          )}
        />
         <Route 
          exact path='/register' 
          render={props => (
            <Form {...props} />
          )}
        />
      </div>
    );
  }
}

export default App;
