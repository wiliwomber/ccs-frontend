
import React, { PureComponent } from 'react';
import { TextField, Checkbox, DatePicker, Button, DialogContainer,SelectField, Grid, Cell} from 'react-md';
import { AlertMessage } from './AlertMessage';
import styled from 'styled-components';
import {withRouter} from "react-router-dom";
import TimePicker from 'react-md/lib/Pickers/TimePickerContainer';



class AddCourse extends React.Component{


    constructor(props) {
        super(props);
        /*if(this.props.course != undefined) {

            this.state = {
                title : props.course.title,
                credits : props.course.credits,
                description : props.course.description,
                titlelong: props.course.titlelong,
                semester : props.course.semester,
                lecturer : props.course.lecturer,
                chair : props.course.chair,
                registrationstart : props.course.registrationstart,
                registrationend: props.course.registrationend,
                exam : props.course.exam,
                repeatexam : props.course.repeatexam,
                practicecourse : props.course.practicecourse,
                semesterperiodsperweek: props.course.semesterperiodsperweek,
                start : props.course.start,
                end : props.course.end,
                dow : props.course.dow,
                roomnumber : props.course.roomnumber,
                comment : props.course.comment,
                tag : props.course.tag,
                open : false

            };
        } else {*/
            this.state = {
                title :'test',
                titlelong : undefined,
                credits :6,
                description : 'test',
                semester : undefined,
                lecturer : undefined,
                chair : undefined,
                registrationstart :undefined,
                registrationend : undefined,
                exam : undefined,
                repeatexam : undefined,
                practicecourse :undefined,
                semesterperiodsperweek:undefined,
                start: undefined,
                end: undefined,
                roomnumber:undefined,
                comment:undefined,
                public:undefined,
                open : false,
                dow : undefined,

            };
        //}




        this.handleChangeTitle = this.handleChangeTitle.bind(this);
        this.handleChangeCredits = this.handleChangeCredits.bind(this);
        this.handleChangeDescription = this.handleChangeDescription.bind(this);
        this.handleChangeTitlelong = this.handleChangeTitlelong.bind(this);
        this.handleChangeSemester = this.handleChangeSemester.bind(this);
        this.handleChangeLecturer = this.handleChangeLecturer.bind(this);
        this.handleChangeChair = this.handleChangeChair.bind(this);
        this.handleChangeRegistrationstart = this.handleChangeRegistrationstart.bind(this);
        this.handleChangeRegistrationend = this.handleChangeRegistrationend.bind(this);
        this.handleChangeExam = this.handleChangeExam.bind(this);
        this.handleChangeRepeatexam = this.handleChangeRepeatexam.bind(this);
        this.handleChangePracticecourse = this.handleChangePracticecourse.bind(this);
        this.handleChangeStart = this.handleChangeStart.bind(this);
        this.handleChangeEnd = this.handleChangeEnd.bind(this);
        this.handleChangeRoomnumber = this.handleChangeRoomnumber.bind(this);
        this.handleChangeSemesterperiodsperweek = this.handleChangeSemesterperiodsperweek.bind(this);
        this.handleChangeComment = this.handleChangeComment.bind(this);
        this.handleChangeTag = this.handleChangeTag.bind(this);
        this.handleChangeDow = this.handleChangeDow.bind(this);

        this.handleSubmit = this.handleSubmit.bind(this);

        this.openForm = this.openForm.bind(this);
        this.closeForm = this.closeForm.bind(this);

    }
    handleChangeTitle(value) {
        this.setState(Object.assign({}, this.state, {title: value}));
        console.log(this.state.title);
    }
    handleChangeCredits(value) {
        this.setState(Object.assign({}, this.state, {credits: value}));
    }
    handleChangeDescription(value) {
        this.setState(Object.assign({}, this.state, {description: value}));
    }
    handleChangeTitlelong(value) {
        this.setState(Object.assign({}, this.state, {titlelong: value}));
    }
    handleChangeSemester(value) {
        this.setState(Object.assign({}, this.state, {semester: value}));
    }
    handleChangeLecturer(value) {
        this.setState(Object.assign({}, this.state, {lecturer: value}));
    }
    handleChangeChair(value) {
        this.setState(Object.assign({}, this.state, {chair: value}));
    }
    handleChangeRegistrationstart(value) {
        this.setState(Object.assign({}, this.state, {registrationstart: value}));
    }
    handleChangeRegistrationend(value) {
        this.setState(Object.assign({}, this.state, {registrationend: value}));
    }
    handleChangeExam(value) {
        this.setState(Object.assign({}, this.state, {exam: value}));
    }
    handleChangeRepeatexam(value) {
        this.setState(Object.assign({}, this.state, {repeatexam: value}));
    }
    handleChangePracticecourse(value) {
        this.setState(Object.assign({}, this.state, {practicecourse: value}));
    }
    handleChangeSemesterperiodsperweek(value) {
        this.setState(Object.assign({}, this.state, {semesterperiodsperweek: value}));
    }
    handleChangeStart(value) {
        console.log(value);
        this.setState(Object.assign({}, this.state, {start: value}));
    }
    handleChangeEnd(value) {
        this.setState(Object.assign({}, this.state, {end: value}));
    }

    handleChangeRoomnumber(value) {
        this.setState(Object.assign({}, this.state, {roomnumber: value}));
    }
    handleChangeComment(value) {
        this.setState(Object.assign({}, this.state, {comment: value}));
    }
    handleChangeTag(value) {
        this.setState(Object.assign({}, this.state, {tag: value}));
    }
    handleChangePublic(value) {
        this.setState(Object.assign({}, this.state, {public: value}));
    }
    handleChangeDow(value) {
        this.setState({day: value});
        
        if(value === 'Monday') {
            this.setState(Object.assign({}, this.state, {dow: 1 }));
        }

        if(value === 'Tuesday'){
            this.setState(Object.assign({}, this.state, {dow: 2 }));
        }
        if(value === 'Wednesday'){
            this.setState(Object.assign({}, this.state, {dow: 3 }));
        }
        if(value === 'Thursday'){
            this.setState(Object.assign({}, this.state, {dow: 4 }));
        }
        if(value === 'Friday'){
            this.setState(Object.assign({}, this.state, {dow: 5 }));
        }
    }


    handleSubmit(event) {
        event.preventDefault();

        console.log(this.state.dow);

        let course = this.props.course;
        if(course == undefined) {
            course = {};
        }

        course.title = this.state.title;
        course.credits = this.state.credits;
        course.description = this.state.description;
        course.titlelong = this.state.titlelong;
        course.semester = this.state.semester;
        course.lecturer = this.state.lecturer;
        course.chair = this.state.chair;
        course.registrationstart = this.state.registrationstart;
        course.registrationend = this.state.registrationend;
        course.exam = this.state.exam;
        course.repeatexam = this.state.repeatexam;
        course.practicecourse = this.state.practicecourse;
        course.semesterperiodsperweek = this.state.semesterperiodsperweek;
        course.start = this.state.start;
        course.end = this.state.end;
        course.dow = this.state.dow;
        course.roomnumber= this.state.roomnumber;
        course.comment = this.state.comment;
        course.credits = this.state.credits;
        course.tag = this.state.tag;
        course.public = this.state.public;

        this.props.onSubmit(course);
    }


    openForm() {
        this.setState({
            open: true
        });
    }
    closeForm() {
        this.setState({
            title : undefined,
            titlelong : undefined,
            credits : undefined,
            description : undefined,
            semester : undefined,
            lecturer : undefined,
            chair : undefined,
            registrationstart :undefined,
            registrationend : undefined,
            exam : undefined,
            repeatexam : undefined,
            practicecourse :undefined,
            semesterperiodsperweek:undefined,
            start:undefined,
            end:undefined,
            dow:undefined,
            roomnumber:undefined,
            comment:undefined,
            tag:undefined,
            public:undefined,
            day: undefined,
            open : false
        });
    }


    render() {

        return (
            <div>
                <Button raised onClick={this.openForm}>AddCourse</Button>
                <DialogContainer
                    id="add-course"
                    visible={this.state.open}
                    title= {<span>Add custom course<Button style = {styles} icon primary onClick={this.closeForm}>close</Button></span>}
                    onHide={this.openForm}
                    width={1700}
                >

                    <form className="md-grid" onSubmit={this.handleSubmit} onReset={() => this.closeForm()}>
                        <div style={styles.row}>
                            <Grid>
                                <Cell style={styles.element}>

                                    <TextField
                                        label="Title"
                                        id="TextField"
                                        type="text"
                                        className="md-row"
                                        required={false}
                                        value={this.state.title}
                                        onChange={this.handleChangeTitle}
                                        errorText="Title is required"/>

                                    <TextField
                                        label="Title Long"
                                        id="TextField"
                                        type="text"
                                        className="md-row"
                                        required={false}
                                        value={this.state.titlelong}
                                        onChange={this.handleChangeTitlelong}
                                        errorText="Title long is required"/>

                                </Cell>
                                <Cell style={styles.element}>

                                    <TextField
                                        label="Description"
                                        id="TextField"
                                        type="text"
                                        className="md-row"
                                        rows={5}
                                        required={false}
                                        value={this.state.description}
                                        onChange={this.handleChangeDescription}
                                        errorText="Synopsis is required"/>
                                </Cell>
                            </Grid>
                        </div>
                        <div style={styles.row}>
                            <Grid>


                                <Cell size={4}>
                                    <DatePicker
                                        label="Registration Start"
                                        id="appointment-date-landscape"
                                        fullWidth={false}
                                        className="md-cell"
                                        displayMode="portrait"
                                        portal
                                        lastChild
                                        renderNode={null}
                                        disableScrollLocking
                                        required={false}
                                        //value={this.state.registrationstart}
                                        onChange={this.handleChangeRegistrationstart}
                                        errorText="Registrationstart is required"/>
                                </Cell>
                                <Cell size={4}>
                                    <DatePicker
                                        label="Registration End"
                                        id="inline-date-picker-auto"
                                        fullWidth={false}
                                        className="md-cell"
                                        displayMode="landscape"
                                        required={false}
                                        portal
                                        lastChild
                                        renderNode={null}
                                        disableScrollLocking
                                        //  value={this.state.registrationend}
                                        onChange={this.handleChangeRegistrationend}
                                        errorText="Registrationend is required"/>
                                </Cell>
                                <Cell size={4}>
                                    <DatePicker
                                        label="Exam"
                                        id="inline-date-picker-auto"
                                        fullWidth={false}
                                        portal
                                        lastChild
                                        renderNode={null}
                                        disableScrollLocking
                                        className="md-cell"
                                        displayMode="portrait"
                                        required={false}
                                        //value={this.state.exam}
                                        onChange={this.handleChangeExam}
                                        errorText="Exam is required"/>

                                </Cell>
                                <Cell size={4}>
                                    <SelectField
                                        id="select-field-1"
                                        lable="Credits"
                                        placeholder="Credits"
                                        className="md-cell"
                                        menuItems={[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13,14,15]}
                                        required={false}
                                        value={this.state.credits}
                                        onChange={this.handleChangeCredits}
                                        simplifiedMenu = {true}
                                        errorText="Credits are required"
                                        position={SelectField.Positions.BELOW}/>
                                </Cell>
                                <Cell size={4}>
                                    <SelectField
                                        id="select-field-1"
                                        lable="Semester"
                                        placeholder="Semester"
                                        className="md-cell"
                                        required={false}
                                        value={this.state.semester}
                                        onChange={this.handleChangeSemester}
                                        errorText="Semester is required"
                                        menuItems={[0, 1, 2, 3, 4, 5, 6, 7, 8]}
                                        simplifiedMenu = {true}
                                        position={SelectField.Positions.BELOW}/>

                                </Cell>
                                <Cell size={4}>
                                    <SelectField
                                        id="select-field-1"
                                        lable="Repeat Exam"
                                        placeholder="Repeat Exam"
                                        className="md-cell"
                                        menuItems={['Winterterm','Summerterm']}
                                        required={false}
                                        value={this.state.repeatexam}
                                        onChange={this.handleChangeRepeatexam}
                                        simplifiedMenu = {true}
                                        errorText="Please choose a term"
                                        position={SelectField.Positions.BELOW}/>
                                </Cell>
                                <Cell size={4}>
                                    <TimePicker
                                        label="start"
                                        id="start"
                                        className="md-cell"
                                        portal
                                        lastChild
                                        renderNode={null}
                                        disableScrollLocking
                                        displayMode="portrait"
                                        required={false}
                                        //value={this.state.start}
                                        onChange={this.handleChangeStart}
                                        errorText="Start is required" />
                                </Cell>
                                <Cell size={4}>
                                    <TimePicker
                                        label="end"
                                        id="end"
                                        className="md-cell"
                                        portal
                                        lastChild
                                        renderNode={null}
                                        disableScrollLocking
                                        displayMode="portrait"
                                        required={false}
                                        //value={this.state.end}
                                        onChange={this.handleChangeEnd}/>
                                </Cell>
                                <Cell size={4}>

                                    <SelectField
                                        id="select-field-1"
                                        lable="Day of the Course"
                                        placeholder="Day"
                                        className="md-cell"
                                        menuItems={['Monday','Tuesday','Wednesday','Thursday','Friday']}
                                        required={false}
                                        value={this.state.day}
                                        simplifiedMenu = {true}
                                        errorText="Please choose a term"
                                        position={SelectField.Positions.BELOW}
                                        onChange={this.handleChangeDow}/>

                                </Cell>

                            </Grid>
                        </div>
















                        <TextField
                            label="Lecturer"
                            id="TextField"
                            type="text"
                            className="md-row"
                            required={false}
                            value={this.state.lecturer}
                            onChange={this.handleChangeLecturer}
                            errorText="Lecturer is required"/>
                        <TextField
                            label="Chair"
                            id="TextField"
                            type="text"
                            className="md-row"
                            required={false}
                            value={this.state.chair}
                            onChange={this.handleChangeChair}
                            errorText="Chair is required"/>


                        <Checkbox
                            label="Practicecourse"
                            name="Practicecourse"
                            id="BooleanField"
                            type="checkbox"
                            className="md-row"
                            required={false}
                            value={this.state.practicecourse}
                            onChange={this.handleChangePracticecourse}
                        />
                        <TextField
                            label="Semesterperiodsperweek"
                            id="TextField"
                            type="number"
                            className="md-row"
                            required={false}
                            value={this.state.semesterperiodsperweek}
                            onChange={this.handleChangeSemesterperiodsperweek}
                            errorText="Semesterperiodsperweek is required"/>

                        <TextField
                            label="Room number"
                            id="TextField"
                            type="number"
                            className="md-row"
                            required={false}
                            value={this.state.roomnumber}
                            onChange={this.handleChangeRoomnumber}
                            errorText="Roomnumber is required"/>
                        <TextField
                            label="Participator Restriction"
                            id="TextField"
                            type="number"
                            className="md-row"
                            required={false}
                            value={this.state.participatorrestriction}
                            onChange={this.handleChangeParticipatorrestriction}
                            errorText="Participator Restriction is required"/>
                        <TextField
                            label="Evaluation"
                            id="TextField"
                            type="text"
                            className="md-row"
                            required={false}
                            value={this.state.evaluation}
                            onChange={this.handleChangeEvaluation}
                            errorText="Evaluation is required"/>
                        <TextField
                            label="Comment"
                            id="TextField"
                            type="text"
                            className="md-row"
                            required={false}
                            value={this.state.comment}
                            onChange={this.handleChangeComment}
                            errorText="Comment is required"/>
                        <TextField
                            label="Tag"
                            id="TextField"
                            type="text"
                            className="md-row"
                            required={false}
                            value={this.state.tag}
                            onChange={this.handleChangeTag}
                            errorText="Tag is required"/>

                        <Button id="submit" type="submit"
                                raised primary className="md-cell md-cell--2">Save</Button>
                        <Button id="reset" type="reset" raised secondary className="md-cell md-cell--2">Dismiss</Button>
                        <AlertMessage className="md-row md-full-width">{this.props.error ? `${this.props.error}` : ''}</AlertMessage>
                    </form>
                </DialogContainer>
            </div>
        );
    }



}




export default withRouter(AddCourse);

let styles = {
    float: 'right',
    container: {
        flex: 1,
        marginTop: 20,
        flexDirection: 'row',
        backgroundColor: '#F5FCFF',
        flexWrap: 'noWrap',

    },
    element: {
        flex: 1,
        margin: 20,
        width: '90%'
    },
    row:{
        width: '100%',
        border: '2px',
    }
};
