"use strict";

import React from 'react';
import $ from 'jquery';
import 'fullcalendar';
import './../components/Schedule.css';
import Popup from 'react-popup';
import './../components/Popup.css';
import UserService from "../services/UserService";
import CourseService from "../services/CourseService";
import CourseDetail from "./../components/CourseDetail";


// this.state.selectedCourses,

export class ScheduleView extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            popup : '',
            course: '',
            open: false,
        };

        this.setPopUp = this.setPopUp.bind(this);
        this.closePopUp = this.closePopUp.bind(this);
        this.closeDetail = this.closeDetail.bind(this);

    }

    //adds listener so that the calender is updated when a new module is selected by the user
    componentDidMount () {
        UserService.registerListener("courseChanged", this.renderCalender.bind(this));
        this.loadCalendar();
        this.renderCalender();
    }

    //loads the selected courses into the calendar
    renderCalender(){
        $('#calendar').fullCalendar('removeEvents');
        UserService.getUser()
            .then(user => {
                for (let key in user.chosenCourses) {
                    if (user.chosenCourses.hasOwnProperty(key)) {
                        CourseService.getCourse(user.chosenCourses[key].course)
                            .then(course => {
                                //Print only courses from the users current semester
                                if(user.chosenCourses[key].semester == user.semester){
                                    $('#calendar').fullCalendar('renderEvent', course);
                                }
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

    //defines the popup when clicked on an event in the calendar
    setPopUp(data,target,position){
        let _this = this;
        Popup.registerPlugin('popover', function (content, target) {
            this.create({
                title: data.title,
                content: data.titlelong,
                className: 'popover',
                noOverlay: true,
                position: function (box) {
                    box.style.top  = (position.top - box.offsetHeight + 10) + 'px';
                    box.style.left = (position.left + target.offsetWidth - 10) + 'px';
                    box.style.margin = 0;
                    box.style.opacity = 1;
                },
                buttons: {
                    left: [{
                        text: 'Remove',
                        className: 'remove',
                        action: function () {
                            UserService.deSelectCourse(data._id);

                            // UserService.deSelectCourse(data._id);

                            /** Close this popup. Close will always close the current visible one, if one is visible */
                            Popup.close();
                        }
                    }],
                    right: [{
                        text: 'View Details',
                        className: 'details',
                        action: function () {
                            CourseService.getCourse(data._id)
                                .then(course => {
                                    _this.setState({
                                        course: course,
                                        open: true,
                                    });
                                }).catch(error => {
                                    console.log(error);
                            });

                            /** Close this popup. Close will always close the current visible one, if one is visible */
                            Popup.close();
                        }
                    }]
                }
            });
        });

        Popup.plugins().popover('Content to be defined.', target);
        this.setState({
            popup : {
                title : data.title,
                visible : true,
                xPosition : 0,
                yPosition : 0
            }
        });
    }



    //closes the popup
    closePopUp(){
        this.setState({
            popup : {
                visible : false,
            }
        });
    }

    //closes the course Detail View Modal
    closeDetail(){
        this.setState({
            open: false
        });
    }

    //Loads the calendar into the ScheduleView
    loadCalendar(){
        let _this = this;
        $(function() {

            // page is now ready, initialize the calendar...

            let height = Math.min(($(window).height())*0.55,439);

            $('#calendar').fullCalendar({
                // put your options and callbacks here
                defaultView: 'agendaWeek',
                weekends: false,
                height: 100,
                contentHeight: height,
                minTime: "08:00:00",
                maxTime: "20:00:00",
                header:   false,
                footer: false,
                columnHeaderFormat: 'dddd',
                allDaySlot: false,
                eventClick: function(data, event, view) {
                    var elm = $(this);
                    var xPos = event.pageX - elm.offset().left;
                    var yPos = event.pageY - elm.offset().top;
                    var button = elm.get(0);
                    var rect = button.getBoundingClientRect();
                    var position = {top: rect.top, left: rect.left};
                    let target = event.target;
                    _this.setPopUp(data,target,position);
                },
                events: _this.state.selectedCourses,

            });
            $('#calendar').fullCalendar('render');
        });

    }


    render() {

        return(
            <div>
                <div> <CourseDetail course={this.state.course} open={this.state.open} close={this.closeDetail}/></div>
                <div id='calendar'></div>
            </div>

        )
    }



}
