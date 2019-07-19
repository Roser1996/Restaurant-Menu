import React, { Component } from 'react';
import Home from './Home';
import Category from './Category';
import './App.css';

class App extends Component {

  constructor() {
    super();
    this.state = {
      child: null
    }
  }

  handleContent = (childName) => {
    this.setState({ child: childName });
  }

  render() {
    const { child } = this.state;

    let childComponent = null;
    if (child === "Home") {
      childComponent = <Home />;
    }
    else if (child === "Category") {
      childComponent = <Category />;
    }

    return (
      <div>
        <h2 className="title" >1. Welcome to Chef Chu's Restaurant</h2>
        <div>
          <input 
            type="button" 
            value="Home" 
            className="button"
            onClick={() => this.handleContent('Home')}
          />
          <input 
            type="button" 
            value="Categroies" 
            className="button"
            onClick={() => this.handleContent('Category')} 
          />
        </div>
        { childComponent }
      </div>
    );
  }
}

export default App;
