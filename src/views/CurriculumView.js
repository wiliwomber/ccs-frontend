"use strict";

import React from 'react';
import {Grid, Cell, LinearProgress} from 'react-md';
import { CurriculumListRow } from './../components/CurriculumListRow';
import UserService from "../services/UserService";
import CourseService from "../services/CourseService";
import './../App.css';



export class CurriculumView extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
          courses : [],
          semesters : [1,2,3,4,5,6],
            credits : [],
            creditsAccumulated: [],
        };
    }



    componentWillMount () {
        this.getData();
        UserService.registerListener("courseChanged", this.getData.bind(this));
    }

    getData(){
        this.setState({courses: []});
        let courses = [];
        //initialize credits with zeros
        for(let i = 0; i<7; i++) {
            this.state.credits[i] = 0;
            this.state.creditsAccumulated[i] = 0;
        }
        UserService.getUser()
            .then(user => {
                for (let key in user.selectedCourses) {
                    if (user.selectedCourses.hasOwnProperty(key)) {
                        CourseService.getCourse(user.selectedCourses[key])
                            .then(course => {
                                //in case the user is above the 6th semester, a new semester is added to the list
                                courses.push(course);
                                this.state.credits[course.selectedSemester] += course.credits;
                                for (let i = course.selectedSemester; i<= this.state.semesters.length; i++) {
                                    this.state.creditsAccumulated[i] += course.credits;
                                }
                                if(!this.state.semesters.includes(course.selectedSemester)){
                                    this.state.semesters.push(course.selectedSemester);
                                }
                                this.setState({
                                    courses: courses
                                });
                            })
                            .catch(error => {
                                console.log(error);
                            });
                    }
                }
            })
            .catch(error => {
                console.log(error);
            });
    }


    render() {
        return (

            <Grid style={styles.grid} size={12}>

                <Cell id={'curriculum-progress'} size={4}>
                            {this.state.semesters.map((semester, i) =>
                                <div key={i} style={styles.progress}>
                                        <div style={styles.numberCircle}><b>{semester}</b></div>
                                        <div style={styles.ceditsHeadline}><h4>Credits: {this.state.creditsAccumulated[semester]}/180</h4> </div>
                                        <div style={styles.overviewContainer}>
                                           <LinearProgress color='green' style={styles.progressBar} id="query-indeterminate-progress" query value={this.state.creditsAccumulated[semester]/1.8}/>
                                         </div>
                                </div>
                            )}
                </Cell>


                <Cell id={'curriculum-semesters'} size={8}>
                            {this.state.semesters.filter(function (semester) {
                                return (semester != 0);
                            }).map((semester, i) =>
                                <div key={i}>
                                <Cell key={i} size={12}>
                                    <h4 ><b>{semester}. Semester - Credits: {this.state.credits[semester]}</b> </h4>
                                    {this.state.courses.filter(function (course) {
                                        return (course.selectedSemester === semester);
                                    }).map((course, i) => <CurriculumListRow key={i} course={course} />)}
                                    </Cell>
                                <Cell size={12} style={styles.margin}></Cell>
                                </div>
                                )}
                </Cell>
            </Grid>
        )
    }

}

let styles = {
    progress : {
        marginBottom: '14px',
        border : '1px solid grey',
        padding : '4px',
        paddingTop : '0px',
    },
    margin : {
        paddingBottom: '20px',
        float : 'right',
    },
    overview : {
        border : '1px',
        borderStyle: 'solid',
        borderColor: 'grey',
        padding: '10px',
    },
    overviewContainer : {
        margin : '0px !important',
        padding : '0 10px !important',
    },
    ceditsHeadline:{
        display: 'inline',
        width: '70%',
        float: 'right',
        paddingTop : '5px',
    },
    credits: {
        float: 'right',
    },
    grid:{
        margin: '0px !important',
        padding: '0px !important',
        width: '100%',
        height: '70vh',
    },
    numberCircle : {
        marginTop: '5px',
        marginLeft: '5px',
        borderRadius: '50%',
        width: '30px',
        height: '30px',
        background: '#fff',
        border: '2px solid #666',
        color: '#666',
        textAlign: 'center',
        paddingTop: '5px',
        font: '14px Arial, sans-serif',
        display: 'inline-block'
    },
    progressBar: {
        height: '19px',
        border: '1px solid grey',
        margin: 0,
        borderRadius: '5px',
        background: 'white',
        color : 'green',
    }
};





