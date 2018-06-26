"use strict";

import React from 'react';
import { Button} from 'react-md';
import UserService from '../services/UserService';
import {CourseDetailView} from "../views/CourseDetailView";


export class CurriculumListRow extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            open: false
        };
        this.openDetail = this.openDetail.bind(this);
        this.closeDetail = this.closeDetail.bind(this);
    }


    openDetail(){
        this.setState({
            open: true
        });
    }

    closeDetail(){
        this.setState({
            open: false
        });
    }

    render() {

        return (
            <div style={styles.row}>

                <div style={styles.title}>
                    <div style={styles.p}>{this.props.course.title}</div>
                </div>

                <div style={styles.credits}>
                    <div style={styles.p}>Credits: {this.props.course.credits}</div>
                </div>

                <div style={styles.button}>
                    <Button style={styles} onClick={this.openDetail} icon>visibility</Button>
                    <CourseDetailView course={this.props.course} open={this.state.open} close={this.closeDetail}/>
                </div>

                <div style={styles.button}>
                    <Button style={styles} onClick={() => UserService.deSelectCourse(this.props.course._id)} icon>clear</Button>
                </div>
            </div>
        );
    }
}

let styles = {

    title: {
        alignItems: 'center !important',
        width : '50%',
        display : 'inline!important',
        float : 'left',
        lineHeight: '40px',
        paddingRight: '5px',
        paddingLeft : '10px',
    },
    credits:{
        alignItems: 'center !important',
        width : '20%!important',
        display : 'inline!important',
        float : 'right',
        lineHeight: '40px',
        paddingRight: '5px',

    },
    button : {
        alignItems: 'center !important',
        width: '15%!important',
        display : 'inline!important',
        float : 'right',

    },
    row : {
        height: '40px',
        float: 'right',
        width: '100%',
    },


};
