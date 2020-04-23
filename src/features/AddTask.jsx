import React, { Component } from 'react';
import { Segment, Form, Button } from 'semantic-ui-react';

class AddTask extends Component {
  state = {
    id: 0,
    task: ''
  };

  handlerOnStateChange = ({ target: { value } }) => {
    this.setState({
      task: value
    });
  };

  handlerOnSubmit = e => {
    e.preventDefault();
    this.props.createTask(this.state);
    this.setState({
      task: ''
    });
  };

  render() {
    const { task } = this.state;

    return (
      <Segment className='form-segment'>
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
          <Button type='submit' content='Add Task' positive />
        </Form>
      </Segment>
    );
  }
}

export default AddTask;
