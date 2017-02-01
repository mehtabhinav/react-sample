import React from 'react';
import { Route, IndexRedirect } from 'react-router';
import SampleContainer from '../containers/sample-container';
import TabOneComponent from '../components/tab-one-component';

export default (
    <Route path="/" component={SampleContainer} >
        <Route path="/tabOne" component={TabOneComponent} />
    </Route>
);