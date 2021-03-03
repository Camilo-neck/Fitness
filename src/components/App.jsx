import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import  ExercisesContainer from "../pages/ExercisesContainer";
import  ExerciseNewContainer from "../pages/ExerciseNewContainer";
import Example from "../pages/Example";
import NotFound from "../pages/NotFound";

const App = () =>(
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={ExercisesContainer}/>
            <Route exact path="/new" component={ExerciseNewContainer}/>
            <Route exact path="/example" component={Example}/>
            <Route component={NotFound}/>
        </Switch>
    </BrowserRouter>
)

export default App