import React, { Fragment, useEffect, useState } from 'react';
import axios from 'axios';
import { Container, Header, List } from 'semantic-ui-react';
import Button from 'semantic-ui-react/dist/commonjs/elements/Button';
import { Activity } from '../../models/activity';
import NavBar from './NavBar';
import ActivityDahboard from '../../features/activities/dashboard/ActivityDashboard';

function App() {
  const [activities, setActivities] = useState<Activity[]>([])
  const [selectedActivity, setSelectedActivity] = useState<Activity | undefined>(undefined);
  const [editMode, setEditMode] = useState(false);

  useEffect(() => {
    axios.get<Activity[]>('http://localhost:5000/api/activities').then(res => {
      console.log(res.data);
      setActivities(res.data);
    })
  }, [])

  function handleSelectedActivity(id: string){
    setSelectedActivity(activities.find(x => x.id === id));
  }

  function handleCancelActivity() {
    setSelectedActivity(undefined);
  }

  function handleFormOpen(id?: string) {
    id ? handleSelectedActivity(id) : handleCancelActivity();
    setEditMode(true)
  }

  function handleFormClose() {
    setEditMode(false);
  }

  return (
    <>
      <NavBar openForm ={handleFormOpen}/>
      <Container style={{marginTop: '7em'}}>
        <ActivityDahboard 
          activities={activities}
          selectedActivity={selectedActivity}
          selectActivity={handleSelectedActivity}
          cancelActivity={handleCancelActivity}
          editMode={editMode}
          openForm ={handleFormOpen}
          closeForm={handleFormClose}
        />
      </Container>
    </>
  );
}

export default App;
