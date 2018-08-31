import React, { Component } from 'react';

class AddProject extends Component {

    constructor() {
        super();
        this.state = {
            newProject: {}
        }
    }

    static defaultProps = {
        categories: ['Front-End Developer', "Developer", "UI Developer", "CEO"]
    }

    handleSubmit(e) {
        if (this.refs.company.value === '') {
            console.log("no empties");
        } else {
            this.setState({newProject: {
                company: this.refs.company.value,
                category: this.refs.category.value
            }}, function() {
                this.props.addProject(this.state.newProject);
            }
        );
        }
        e.preventDefault();
    }

  render() {

    let categoryOptions = this.props.categories.map(category => {
        return <option key={category} value={category}>{category}</option>
    });

    return (
      <div>
          <h3>Add Project</h3>
          <form onSubmit={this.handleSubmit.bind(this)}>
              <div>
                  <label>Company</label><br />
                  <input type="text" ref="company" />
              </div>
              <div>
                  <label>Title</label><br />
                  <select ref="category">{categoryOptions}</select>
              </div>
            <input type="submit" value="Submit" />
          </form>
      </div>
    );
  }
}

export default AddProject;
