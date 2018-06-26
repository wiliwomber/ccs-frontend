"use strict";

import React from 'react';

import AddCourse from '../components/AddCourse';
import CourseService from "../services/CourseService";
import CourseDetail from "../components/CourseDetail";


export class CourseDetailView extends React.Component {

    constructor(props) {
        super(props);
    }




    render() {

        return (<div>
            <CourseDetail open={this.props.open} course={this.props.course} close={this.props.close}/>
        </div>);
    }
}
