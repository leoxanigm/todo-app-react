import React, { Component, Fragment } from 'react';
import { Segment, Grid, Button } from 'semantic-ui-react';

class TaskList extends Component {
  render() {
    const { tasks } = this.props;
    return (
      <Fragment>
        {tasks.map(task => {
          return (
            <Segment attached className='task'>
              <Grid columns={2}>
                <Grid.Column width={12} textAlign='middle'>
                  {task.task}
                </Grid.Column>
                <Grid.Column width={4}>
                  <Button.Group>
                    <Button icon='check' positive></Button>
                    <Button icon='trash alternate outline' negative></Button>
                  </Button.Group>
                </Grid.Column>
              </Grid>
            </Segment>
          );
        })}
      </Fragment>
    );
  }
}

export default TaskList;
