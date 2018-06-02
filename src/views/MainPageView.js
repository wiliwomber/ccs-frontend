"use strict";
import Popup from 'react-popup';
import React from 'react';
import Page from '../components/Page';
import {AddCourseView} from './../views/AddCourseView';
import {ScheduleView} from './ScheduleView';
import { Card, CardTitle, CardText } from 'react-md';
import {CourseListView} from "./CourseListView";





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

                <div className="md-grid">

                <Card className="md-cell md-cell--6 md-cell--8-tablet">
                    <CardTitle title="Schedule" subtitle="With Calender" />
                    <CardText>
                        <ScheduleView/>


                    </CardText>

                </Card>
                <Card className="md-cell md-cell--6 md-cell--8-tablet">
                <CardTitle title="Modules" subtitle="With Courses" />
                <CardText>
                    <AddCourseView/>
                    <CourseListView/>
                </CardText>
            </Card>
                </div>

            </Page>
        );
    }
}
