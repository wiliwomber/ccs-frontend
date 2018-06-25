"use strict";
import React from 'react';
import './../App.css';
import Page from '../components/Page';
import {AddCourseView} from './AddCourseView';
import {ScheduleView} from './ScheduleView';
import {Card, CardTitle, CardText,TabsContainer, Tabs, Tab} from 'react-md';
import {CourseListView} from "./CourseListView";
import {CurriculumView} from "./CurriculumView";
import Popup from 'react-popup';
import $ from "jquery";
import './../../node_modules/material-components-web/dist/material-components-web.min.css';
import SnackbarService from './../components/Snackbar';

let snack = {
    snackbarIsOpen: false,
    snackbarMessage: 'test',
};

export class MainPageView extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            loading: false,
            data: [],

        };
    }

    render() {
        if (this.state.loading) {
            return (<h2>Loading...</h2>);
        }

        return (
            <Page>
                <div className="md-grid">
                <Card id="schedule-card" className="md-cell md-cell--6 md-cell--8-tablet">
                    <CardTitle title="Schedule"/>
                    <CardText>
                        <TabsContainer  panelClassName="md-grid">
                            <Tabs tabId="simple-tab" >
                                <Tab md-tab-height ={'50px'} label="Scheduler">
                                    <ScheduleView/>
                                </Tab>
                                <Tab md-tab-height ={'49px'}  label="Curriculum Overview">
                                    <CurriculumView/>
                                </Tab>
                            </Tabs>
                        </TabsContainer>
                    </CardText>
                </Card>
                <Card id='module-card' className="md-cell md-cell--6 md-cell--8-tablet">
                  <CardTitle title="Modules"/>
                        <CardText>
                          <AddCourseView/>
                         <CourseListView/>
                        </CardText>
                </Card>
                </div>
                <Popup/>
                <SnackbarService/>
            </Page>

        );
    }


}
