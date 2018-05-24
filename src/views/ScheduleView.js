"use strict";

import React from 'react';
import $ from 'jquery';
import 'fullcalendar';
import './../../node_modules/fullcalendar/dist/fullcalendar.css';


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

    $('#calendar').fullCalendar({
        // put your options and callbacks here
        defaultView: 'agendaWeek',
        weekends: false,
        height: 500,
        contentHeight: 600
    })
    $('#calendar').fullCalendar('render');

});
