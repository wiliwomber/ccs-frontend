"use strict";
import React from 'react';
import PropTypes from 'prop-types';
import Page from '../components/Page';
import {AddCourseView} from './AddCourseView';
import {ScheduleView} from './ScheduleView';
import {Card, CardTitle, CardText,TabsContainer, Tabs, Tab} from 'react-md';
import {CourseListView} from "./CourseListView";
import {CurriculumView} from "./CurriculumView";
import Popup from 'react-popup';






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
                    <CardTitle title="Schedule"/>
                    <CardText>
                        <TabsContainer panelClassName="md-grid" colored>
                            <Tabs tabId="simple-tab" >
                                <Tab  md-tab-height = '10px' colored="false" label="Scheduler">
                                    <ScheduleView/>
                                </Tab>
                                <Tab label="Curriculum Overview">
                                    <CurriculumView/>
                                </Tab>
                            </Tabs>
                        </TabsContainer>



                    </CardText>

                </Card>
                <Card className="md-cell md-cell--6 md-cell--8-tablet">
                <CardTitle title="Modules"/>
                <CardText>
                    <AddCourseView/>
                    <CourseListView/>
                </CardText>
            </Card>
                </div>
                <Popup/>
            </Page>

        );
    }
}
