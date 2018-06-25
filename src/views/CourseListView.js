"use strict";

import React from 'react';

import { CourseList } from '../components/CourseList';

import CourseService from '../services/CourseService';
import UserService from "../services/UserService";
import {DialogContainer, Grid, Cell, Button, SelectField,TextField, FontIcon} from 'react-md';
import './../App.css';
import $ from "jquery";
import Filter from './../components/Filter'
import { Snackbar } from 'rmwc/Snackbar';


var SnackMessage = "Test";

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
        };

        //in case a new course is created, the component is updated so that the new course is displayed in the list
        UserService.registerListener("newCourse", this.componentWillMount.bind(this));
        this.handleChangeSelectedSemester = this.handleChangeSelectedSemester.bind(this);
        this.handleChangeSearchTerm = this.handleChangeSearchTerm.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
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

        console.log($(window).height());

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

    render() {
        if (this.state.loading) {
            return (<h2>Loading...</h2>);
        }

        return (
        <div>
            <div><Filter/> </div>
            <div>
                <TextField
                    id="search_field"
                    label="Type your Search here"
                    placeholder="Search for ..."
                    maxLength={20}
                    value={this.state.searchTerm.toLocaleLowerCase()}
                    className="md-cell md-cell--right"
                    leftIcon={<FontIcon>search</FontIcon>}
                    onChange={this.handleChangeSearchTerm}
                />
            </div>
            <CourseList data={this.state.data} searchTerm={this.state.searchTerm} height={$(window).height()} onAdd={(id) => this.chooseCourse(id)}/>
            <DialogContainer
                component={'MainPageView'}
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

