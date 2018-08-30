import React, { Component } from 'react';
import Projects from './components/Projects';
import AddProject from './components/AddProject';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      projects: []
    }
  }

  componentWillMount() {
    this.setState({projects: [
      {
        company: "Idean",
        category: "Intern"
      },
      {
        company: "Capgemini",
        category: "UI Developer"
      },
      {
        company: "IBM",
        category: "Developer"
      }
    ]});
  }

  handleAddProject(project) {
    let projects = this.state.projects;
    projects.push(project);
    this.setState({projects: projects});
  }


  render() {
    return (
      <div className="App">
        <AddProject addProject={this.handleAddProject.bind(this)} />

        <Projects projects={this.state.projects} />
      </div>
    );
  }
}

export default App;
