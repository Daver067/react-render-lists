// App.js

import React, { Component } from "react";
import Overview from "./components/Overview";
import uniqid from "uniqid";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentTask: {
        text: "",
        id: uniqid(),
      },
      taskArray: [],
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(e) {
    this.setState({
      currentTask: {
        text: `${e.target.value}`,
        id: this.state.currentTask.id,
      },
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.setState({
      taskArray: this.state.taskArray.concat(this.state.currentTask),
      currentTask: {
        text: "",
        id: uniqid(),
      },
    });

    console.log(this.state.taskArray);
  }

  render() {
    return (
      <div>
        <form>
          <label>
            Add Task:
            <input
              type="text"
              name="name"
              id="name"
              onChange={this.handleChange}
            />
          </label>
          <button onClick={this.handleSubmit}>Submit</button>
        </form>
        <Overview tasks={this.state.taskArray} />
      </div>
    );
  }
}

export default App;
