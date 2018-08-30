import React, { Component } from 'react';
import Projects from './components/Projects';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      projects: [
        {
          company: "Idean",
          title: "Intern"
        },
        {
          company: "Idean",
          title: "UI Developer"
        },
        {
          company: "IBM",
          title: "Developer"
        }
      ]
    }
  }


  render() {
    return (
      <div className="App">
        Hello

        <Projects projects={this.state.projects} />
      </div>
    );
  }
}

export default App;
