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
}

export default function ActivityDahboard({activities, selectedActivity, editMode, selectActivity, cancelActivity, openForm, closeForm}: Props) {
    return (
        <Grid>
            <Grid.Column width='10'>
                <ActivityList activities={activities} selectActivity={selectActivity}/>
            </Grid.Column>
            <GridColumn width='6'>
                {selectedActivity && !editMode &&
                <ActivityDetails 
                    activity={selectedActivity} 
                    cancelActivity={cancelActivity}
                    openForm={openForm}
                />}
                { editMode &&
                <ActivityForm closeForm={closeForm}/>}
            </GridColumn>
        </Grid>
    )
}