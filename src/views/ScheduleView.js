"use strict";

import React from 'react';
import $ from 'jquery';
import 'fullcalendar';
// import './../components/Schedule';
// import './../components/Schedule.css';
import Popup from 'react-popup';
import './../components/Popup.css';
import {Snackbar} from 'react-md';





export class ScheduleView extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            popup : {
                title : 'test',
                credits : '',
                description : '',
                visible : false,
                xPosition : 0,
                yPosition : 0
            },
        };

        this.setPopUp = this.setPopUp.bind(this);
        this.closePopUp = this.closePopUp.bind(this);

        this.loadCalendar = this.loadCalendar.bind(this);
    }


    setPopUp(data,target,position){
        Popup.registerPlugin('popover', function (content, target) {
            this.create({
                title: data.title,
                content: data.test,
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


                            Popup.alert('You removed the course from your schedule.');

                            /** Close this popup. Close will always close the current visible one, if one is visible */
                            Popup.close();
                        }
                    }],
                    right: [{
                        text: 'View Details',
                        className: 'details',
                        action: function () {
                            Popup.alert('Now the detail view should open up');

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

    closePopUp(){
        this.setState({
            popup : {
                title : 'test',
                credits : '',
                description : '',
                visible : false,
                xPosition : 0,
                yPosition : 0
            }
        });
    }

    loadCalendar(){
        let _this = this;
        $(function() {

            // page is now ready, initialize the calendar...

            let height = ($(window).height())*0.53;


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
                events: [
                    {   title: 'EIDI',
                        start: '10:00', // a start time (10am in this example)
                        test: 'Das ist ein Test2',
                        end: '12:00', // an end time (2pm in this example)
                        dow: [1, 4] // Repeat monday and thursday
                    },
                    {
                        title: 'C4CIO',
                        test: 'Das ist ein Test',
                        start: '11:00', // a start time (10am in this example)
                        end: '14:00', // an end time (2pm in this example)
                        dow: [1] // Repeat monday and thursday
                    },
                    {
                        title: 'SEBA',
                        test: 'Das ist ein Test',
                        start: '09:00', // a start time (10am in this example)
                        end: '10:15', // an end time (2pm in this example)
                        dow: [3] // Repeat monday and thursday
                    }
                ]

            });
            $('#calendar').fullCalendar('render');
        });

    }
    render() {
        this.loadCalendar();
        return(
            <div>
                    <div id='calendar'></div>
            </div>

        )
    }





}