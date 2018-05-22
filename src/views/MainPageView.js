"use strict";

import React from 'react';
import Page from '../components/Page';
import {AddCourseView} from './../views/AddCourseView';
import {MovieListView} from "./MovieListView";



export class MainPageView extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            loading: false,
            data: []
        };
    }





    render() {
        if (this.state.loading) {
            return (<h2>Loading...</h2>);
        }

        return (
            <Page>
                <h1>Success</h1>
                <AddCourseView/>
            </Page>
        );
    }
}
