"use strict";

import React from 'react';
import $ from 'jquery';
import './../components/Schedule';
import './../components/Schedule.css';
import {CalendarPopUp} from './../components/CalendarPopUp';


export class ScheduleView extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            popup : {
                title : 'test',
                credits : '',
                description : '',
                visible : false,
                xPosition : '',
                yPosition : ''
            }
        }

        this.setPopUp = this.setPopUp.bind(this);
        this.loadCalendar = this.loadCalendar.bind(this);
    }

    setPopUp(data){
        this.setState({
            popup : {
                title : data.title,
                visible: true,
                xPosition : '',
                yPosition : ''
            }
        });
        console.log(this.state.popup.visible);
    }

    loadCalendar(){
        let _this = this;
        $(function() {

            // page is now ready, initialize the calendar...
            let height = ($(window).height())*0.6
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
                eventMouseover: function(data, event, view) {
                    _this.setPopUp(data);
                },
                events: [
                    {   title: 'EIDI',
                        start: '10:00', // a start time (10am in this example)
                        end: '12:00', // an end time (2pm in this example)
                        dow: [1, 4] // Repeat monday and thursday
                    },
                    {
                        title: 'C4CIO',
                        start: '11:00', // a start time (10am in this example)
                        end: '14:00', // an end time (2pm in this example)
                        dow: [1] // Repeat monday and thursday
                    },
                    {
                        title: 'SEBA',
                        start: '09:00', // a start time (10am in this example)
                        end: '10:15', // an end time (2pm in this example)
                        dow: [3] // Repeat monday and thursday
                    }
                ]

            })
            $('#calendar').fullCalendar('render');
        });

    }
    render() {
        this.loadCalendar();
        return(
            <div>
                    <div id='calendar'></div>
                    <CalendarPopUp popup={this.state.popup}/>
            </div>
        )
    }





}