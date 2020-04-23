import React, { Fragment } from 'react';
import { Segment, Grid, Message, Icon } from 'semantic-ui-react';
import AddTask from './features/AddTask.jsx';
import TaskList from './features/TaskList.jsx';

function App() {
  return (
    <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
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
                  <AddTask />
                </Grid.Column>
              </Grid.Row>
              <Grid.Row>
                <Grid.Column>
                  <TaskList />
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

export default App;
