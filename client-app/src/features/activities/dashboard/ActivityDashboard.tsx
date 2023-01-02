import React from 'react'
import { Grid, GridColumn } from 'semantic-ui-react'
import { Activity } from '../../../models/activity'
import ActivityList from './ActivityList';
import ActivityDetails from '../detail/ActivityDetails';
import ActivityForm from '../form/ActivityFrom';

interface Props {
    activities: Activity[];
    selectedActivity: Activity | undefined;
    editMode: boolean;
    selectActivity: (id: string) => void;
    cancelActivity: () => void;
    openForm: (id: string) => void;
    closeForm: () => void;
    createOrEditActivity: (activity: Activity) => void
    deleteActivity: (id: string) => void
}

export default function ActivityDahboard({activities, selectedActivity, editMode, selectActivity, cancelActivity, openForm, closeForm, createOrEditActivity, deleteActivity}: Props) {
    return (
        <Grid>
            <Grid.Column width='10'>
                <ActivityList activities={activities} 
                    selectActivity={selectActivity}
                    deleteActivity={deleteActivity}
                />
            </Grid.Column>
            <GridColumn width='6'>
                {selectedActivity && !editMode &&
                <ActivityDetails 
                    activity={selectedActivity} 
                    cancelActivity={cancelActivity}
                    openForm={openForm}
                />}
                { editMode &&
                <ActivityForm 
                    closeForm={closeForm} 
                    activity={selectedActivity}
                    createOrEditActivity={createOrEditActivity}
                />}
            </GridColumn>
        </Grid>
    )
}