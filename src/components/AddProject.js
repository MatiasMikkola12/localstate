import React, { Component } from 'react';

class AddProject extends Component {

    static defaultProps = {
        titles: ['Front-End Developer', "Developer", "UI Developer", "CEO"]
    }

    handleSubmit(e) {
        console.log("Submit!");
        e.preventDefault();
    }

  render() {

    let titleOptions = this.props.titles.map(title => {
        return <option key={title} value={title}>{title}</option>
    })

    return (
      <div>
          <h3>Add Project</h3>
          <form onSubmit={this.handleSubmit}>
              <div>
                  <label>Company</label><br />
                  <input type="text" ref="company" />
              </div>
              <div>
                  <label>Title</label><br />
                  <select ref="title">{titleOptions}</select>
              </div>
            <input type="submit" value="Submit" />
          </form>
      </div>
    );
  }
}

export default AddProject;
