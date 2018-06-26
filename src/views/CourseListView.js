"use strict";

import React from 'react';
import { CourseList } from '../components/CourseList';
import CourseService from '../services/CourseService';
import UserService from "../services/UserService";
import {AddCourseView}from "./AddCourseView"
import {DialogContainer, Grid, Cell, Button, SelectField,TextField, FontIcon, Slider} from 'react-md';
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
            searchTerm : '',
            searchCredits: '',
            searchSemester: '',
            searchDay: '',
            visible : false
        };

        //in case a new course is created, the component is updated so that the new course is displayed in the list
        UserService.registerListener("newCourse", this.componentWillMount.bind(this));
        this.handleChangeSelectedSemester = this.handleChangeSelectedSemester.bind(this);
        this.handleChangeSearchTerm = this.handleChangeSearchTerm.bind(this);
        this.handleChangeSearchCredits = this.handleChangeSearchCredits.bind(this);
        this.handleChangeSearchSemester = this.handleChangeSearchSemester.bind(this);
        this.handleChangeSearchDay = this.handleChangeSearchDay.bind(this);
        this.handleResetFilters = this.handleResetFilters.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.chooseCourse=this.chooseCourse.bind(this)
        this.closeForm = this.closeForm.bind(this);

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
    handleChangeSearchTerm(value){
        console.log(value);
        this.setState({searchTerm : value});
    }

    handleChangeSearchCredits(value){
        console.log(value);
        this.setState({searchCredits : value});
    }

    handleChangeSearchSemester(value){
        console.log(value);
        this.setState({searchSemester : value});
    }

    handleChangeSearchDay(value){
        console.log(value);
        this.setState({searchDay : value});
    }
    handleResetFilters(){
        this.setState({searchDay : ''});
        this.setState({searchSemester : ''});
        this.setState({searchCredits : ''});
    }

    handleSubmit(){
        this.state.course.selectedSemester = this.state.selectedSemester;
        CourseService.updateCourse(this.state.course).then(
            UserService.selectCourse(this.state.course._id)
            );
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
                {/* TODO grid Zellen anpassen, da nicht alle zentriert/lesbar*/}
                <Grid>
                    <StyledCell size={3}><AddCourseView/></StyledCell>
                    <StyledCell >
                        {/*TODO size anpassen, derzeit nicht sichtbar*/}
                        <StyledTestField
                            id="search_field"
                            label="Type your Search here"
                            placeholder="Search for ..."
                            resize={{min:40}}
                            value={this.state.searchTerm.toLocaleLowerCase()}
                            className="md-cell md-cell--right"
                            leftIcon={<FontIcon>search</FontIcon>}
                            onChange={this.handleChangeSearchTerm}
                        />
                    </StyledCell>
                    <StyledCell >
                        <StyledSlider
                            id="semester_slider"
                            label="Semester"
                            leftIcon={<FontIcon>hourglass_empty</FontIcon>}
                            onChange={this.handleChangeSearchSemester}
                            defaultValue={5}
                            max={10}
                            discrete
                        />
                    </StyledCell>
                    <StyledCell size={3}>
                        <Button flat onClick={this.handleResetFilters}>
                            Reset all filters
                        </Button>
                    </StyledCell>
                    <StyledCell>
                        <StyledSelectField
                            id="select-field-1"
                            lable="Day"
                            placeholder="Day"
                            className="md-cell"
                            menuItems={DAYS}
                            onChange={this.handleChangeSearchDay}
                            position={SelectField.Positions.TOP_RIGHT}
                            leftIcon={<FontIcon>calendar_today</FontIcon>}/>
                    </StyledCell>
                    <StyledCell>
                        <StyledSlider
                            id="credit_slider"
                            label="Credits"
                            leftIcon={<FontIcon>school</FontIcon>}
                            onChange={this.handleChangeSearchCredits}
                            defaultValue={5}
                            max={10}
                            discrete
                        />
                    </StyledCell>

                </Grid>
                <CourseList data={this.state.data} searchTerm={this.state.searchTerm} searchCredits={this.state.searchCredits} searchSemester={this.state.searchSemester} searchDay={this.state.searchDay} height={$(window).height()} onAdd={(id) => this.chooseCourse(id)}/>

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

