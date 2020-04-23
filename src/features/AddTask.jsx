import React, { Component } from 'react';
import { Segment, Form, Button } from 'semantic-ui-react';

class AddTask extends Component {

  state = {
    task: ''
  };

  handlerOnStateChange = ({target: {value}}) => {
    this.setState({
      task: value
    })
  }

  handlerOnSubmit = e => {
    e.preventDefault();
    console.log(this.state.task);
  }

  render() {
    const {task} = this.state;

    return (
      <Segment>
        <Form onSubmit={this.handlerOnSubmit}>
          <Form.Field>
            <input
              type='text'
              name='taskInput'
              placeholder='Add Task'
              value={task}
              onChange={this.handlerOnStateChange}
            />
          </Form.Field>
          <Button type='submit' content='Add Task'/>
        </Form>
      </Segment>
    );
  }
}

export default AddTask;
