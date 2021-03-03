import React from 'react';
import ExerciseList from "../components/ExerciseList";
import Welcome from "../components/Welcome";
import AddButton from "../components/AddButton";

const Exercises = ({data}) => (
    <React.Fragment>
        <Welcome
            username="Camilo"
            description="Let´s workout to get someone gains!"
        />
        <ExerciseList
            exercises={data}
        />
        <AddButton/>
    </React.Fragment>
)

export default Exercises