"use strict";

import React from 'react';
import $ from 'jquery';
import './../components/Schedule'
import './../components/Schedule.css'

export class ScheduleView extends React.Component {

    constructor(props) {
        super(props);
    }


    render() {
        return(
            <div>
                    <div id='calendar'></div>
            </div>
        )
    }
}

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
        events: [
            {
                title: 'EIDI',
                start: '2018-05-22T15:00:00',
                end: '2018-05-22T17:30:00'
            },
            {
                title: 'C4CIO',
                start: '2018-05-22T14:00:00',
                end: '2018-05-22T15:30:00'
            },
            {
                title: 'SEBA',
                start: '2018-05-24T15:00:00',
                end: '2018-05-24T17:30:00'
            }
            ]

    })
    $('#calendar').fullCalendar('render');
});
