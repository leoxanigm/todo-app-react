import React, { Component } from 'react';
import { Segment, Grid, Icon } from 'semantic-ui-react';
import AddTask from './features/AddTask.jsx';
import TaskList from './features/TaskList.jsx';

import cuid from 'cuid';

const TaskCol = [];

class App extends Component {
  state = {
    tasks: TaskCol
  };

  handlerCreateTask = newTask => {
    newTask.id = cuid();
    this.setState(prevState => ({
      tasks: [...prevState.tasks, newTask]
    }));
  };

  render() {
    const {tasks} = this.state;
    return (
      <Grid
        textAlign='center'
        style={{ height: '100vh' }}
        verticalAlign='middle'
      >
        <Grid.Column style={{ maxWidth: 660 }}>
          <Segment raised>
            <Grid.Column>
              <Grid divided='vertically'>
                <Grid.Row>
                  <Grid.Column>
                    <h1>ToDo</h1>
                  </Grid.Column>
                </Grid.Row>
                <Grid.Row>
                  <Grid.Column>
                    <AddTask createTask={this.handlerCreateTask} />
                  </Grid.Column>
                </Grid.Row>
                <Grid.Row>
                  <Grid.Column>
                    <h2>Tasks</h2>
                    <TaskList tasks={tasks}/>
                  </Grid.Column>
                </Grid.Row>
                <Grid.Row>
                  <Grid.Column>
                    <p className='ui text grey left aligned grid'>
                      <Icon name='copyright outline' />
                      Zelalem Alemu
                    </p>
                  </Grid.Column>
                </Grid.Row>
              </Grid>
            </Grid.Column>
          </Segment>
        </Grid.Column>
      </Grid>
    );
  }
}

export default App;
