"use strict";

import React from 'react';
import { CourseList } from '../components/CourseList';
import CourseService from '../services/CourseService';
import UserService from "../services/UserService";
import {AddCourseView}from "./AddCourseView"
import {DialogContainer, Grid, Cell, Button, SelectField,TextField, FontIcon, Slider} from 'react-md';
import {Filter} from "../components/Filter";
import './../App.css';
import $ from "jquery";
import styled from "styled-components";
// list of icons that can be used: https://material.io/tools/icons/?icon=android&style=baseline

const NUMBER_ITEMS = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const DAYS = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];

const StyledCell = styled(Cell)`
    margin: 0px;
`;
const StyledTestField = styled(TextField)`
    font-size: 10px;
`;

const StyledSelectField = styled(SelectField)`
    font-size: 10px;
`;

const StyledSlider  = styled(Slider)`
    font-size: 10px;
`;

export class CourseListView extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            loading: false,
            data: [],
            open: false,
            selectedSemester: 'Current Semester',
            course: '',
            filter: {
                searchTerm : '',
                searchCredits: '',
                searchSemester: '',
                searchDay: '',
            },
            visible : false
        };

        //in case a new course is created, the component is updated so that the new course is displayed in the list
        UserService.registerListener("newCourse", this.componentWillMount.bind(this));
        this.handleChangeSelectedSemester = this.handleChangeSelectedSemester.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.chooseCourse=this.chooseCourse.bind(this)
        this.closeForm = this.closeForm.bind(this);
        this.updateFilter = this.updateFilter.bind(this);

    }

    componentWillMount() {
        this.setState({
            loading: true
        });

        CourseService.getCourses().then((data) => {
            this.setState({
                data: [...data],
                loading: false
            });
        }).catch((e) => {
            console.error(e);
        });
    }

    //adds course to schedule
    chooseCourse(id) {UserService.getUser().then(user => {
                this.setState({selectedSemester: user.semester});
                console.log(this.state.selectedSemester);
            }).catch(error => {
            console.log(error);
        });
        CourseService.getCourse(id).then(course => {
                this.setState({
                    open: true,
                    course: course,
                });
            }).catch(error => {
            console.log(error);
        });
    }

    handleChangeSelectedSemester(value){
            this.setState({selectedSemester: value});

    }
    updateFilter(filter){
        this.setState({filter:filter});
    }

    handleSubmit(){
        UserService.selectCourse(this.state.course._id, this.state.selectedSemester);
        this.closeForm();
    }

    closeForm(){
        this.setState({open: false});
    }

    show = () => {
        this.setState({ visible: true });
    };

    hide = () => {
        this.setState({ visible: false });
    };

    render() {
        const { visible } = this.state;

        if (this.state.loading) {
            return (<h2>Loading...</h2>);
        }

        return (
            <div>
                <Filter filter={this.state.filter} updateFilter={this.updateFilter}/>
                <CourseList data={this.state.data} filter={this.state.filter} onAdd={(id) => this.chooseCourse(id)}/>

                <DialogContainer
                id="detail-course"
                modal={true}
                portal={true}
                visible={this.state.open}
                title= {<span>Add course to schedule <Button style = {styles} icon primary onClick={this.closeForm}>close</Button></span>}
                onHide={this.closeForm}
                width={600}
                >
                    <form className="md-grid" onSubmit={this.handleSubmit} onReset={() => this.setState({open:false})}>
                        <Grid>
                            <Cell size={12}> <h4><b>Choose the semester in which you want to take {this.state.course.title}</b></h4></Cell>
                            <Cell size={12}> <p>Default is the current semester</p></Cell>
                            <Cell size={12}>
                            <SelectField
                                id="select-field-1"
                                lable="Choose Semester"
                                placeholder="Repeat Exam"
                                className="md-cell"
                                menuItems={['1','2','3','4','5','6']}
                                required={true}
                                value={this.state.selectedSemester}
                                onChange={this.handleChangeSelectedSemester}
                                simplifiedMenu = {true}
                                errorText="Please choose a semester"
                                position={SelectField.Positions.BELOW}/>
                            </Cell>
                            <Cell size={12}>
                                <Button id="submit" type="submit" raised primary className="md-cell md-cell--2">Save</Button>
                                <Button id="reset" type="reset" raised secondary className="md-cell md-cell--2">Dismiss</Button>
                            </Cell>
                        </Grid>
                    </form>
                </DialogContainer>
            </div>
        );
    }
}

let styles = {
    float: 'right',
};

