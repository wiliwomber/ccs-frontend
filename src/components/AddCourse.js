import React, { PureComponent } from 'react';
import { TextField,  Button, DialogContainer } from 'react-md';
import { AlertMessage } from './AlertMessage';
import styled from 'styled-components';
import {withRouter} from "react-router-dom";



class AddCourse extends React.Component{


    constructor(props) {
        super(props);
        if(this.props.course != undefined) {
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
                repeatexamatendofsemester : props.course.repeatexamatendofsemester,
                repeatexamatnextsemester : props.course.repeatexamatnextsemester,
                practicecourse : props.course.practicecourse,
                semesterperiodsperweek: props.course.semesterperiodsperweek,
                start : props.course.start,
                end : props.course.end,
                dow : props.course.dow,
                roomnumber : props.course.roomnumber,
                participatorrestriction: props.course.participatorrestriction,
                evaluation : props.course.evaluate,
                comment : props.course.comment,
                tag : props.course.tag,



                open : false

            };
        } else {
            this.state = {
                title :'',
                titlelong : '',
                credits : '',
                description : '',
                semester : '',
                lecturer : '',
                chair : '',
                registrationstart :'',
                registrationend : '',
                exam : '',
                repeatexamatendofsemester : '',
                repeatexamatnextsemester :'',
                practicecourse :'',
                semesterperiodsperweek:'',
                start:'',
                end:'',
                dow:'',
                roomnumber:'',
                participatorrestriction:'',
                evaluation:'',
                comment:'',
                tag:'',
                public:'',
                open : false

            };
        }




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
        this.handleChangeRepeatexamatendofsemester = this.handleChangeRepeatexamatendofsemester.bind(this);
        this.handleChangeRepeatexamatnextsemester = this.handleChangeRepeatexamatnextsemester.bind(this);
        this.handleChangePracticecourse = this.handleChangePracticecourse.bind(this);
        this.handleChangeStart = this.handleChangeStart.bind(this);
        this.handleChangeEnd = this.handleChangeEnd.bind(this);
        this.handleChangeDow = this.handleChangeDow.bind(this);
        this.handleChangeRoomnumber = this.handleChangeRoomnumber.bind(this);
        this.handleChangeParticipatorrestriction = this.handleChangeParticipatorrestriction.bind(this);
        this.handleChangeSemesterperiodsperweek = this.handleChangeSemesterperiodsperweek.bind(this);
        this.handleChangeEvaluation = this.handleChangeEvaluation.bind(this);
        this.handleChangeComment = this.handleChangeComment.bind(this);
        this.handleChangeTag = this.handleChangeTag.bind(this);
        this.handleChangePublic = this.handleChangePublic.bind(this);

        this.handleSubmit = this.handleSubmit.bind(this);

        this.openForm = this.openForm.bind(this);
        this.closeForm = this.closeForm.bind(this);

    }
    handleChangeTitle(value) {
        this.setState(Object.assign({}, this.state, {title: value}));
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
    handleChangeRepeatexamatendofsemester(value) {
        this.setState(Object.assign({}, this.state, {repeatexamatendofsemester: value}));
    }
    handleChangeRepeatexamatnextsemester(value) {
        this.setState(Object.assign({}, this.state, {repeatexamatnextsemester: value}));
    }
    handleChangePracticecourse(value) {
        this.setState(Object.assign({}, this.state, {practicecourse: value}));
    }
    handleChangeSemesterperiodsperweek(value) {
        this.setState(Object.assign({}, this.state, {semesterperiodsperweek: value}));
    }
    handleChangeStart(value) {
        this.setState(Object.assign({}, this.state, {start: value}));
    }
    handleChangeEnd(value) {
        this.setState(Object.assign({}, this.state, {end: value}));
    }
    handleChangeDow(value) {
        this.setState(Object.assign({}, this.state, {dow: value}));
    }
    handleChangeRoomnumber(value) {
        this.setState(Object.assign({}, this.state, {roomnumber: value}));
    }
    handleChangeParticipatorrestriction(value) {
        this.setState(Object.assign({}, this.state, {participatorrestriction: value}));
    }
    handleChangeEvaluation(value) {
        this.setState(Object.assign({}, this.state, {evaluation: value}));
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


    handleSubmit(event) {
        event.preventDefault();

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
        course.repeatexamatendofsemester = this.state.repeatexamatendofsemester;
        course.repeatexamatnextsemester = this.state.repeatexamatnextsemester;
        course.practicecourse = this.state.practicecourse;
        course.semesterperiodsperweek = this.state.semesterperiodsperweek;
        course.start = this.state.start;
        course.end = this.state.end;
        course.dow = this.state.dow;
        course.roomnumber= this.state.roomnumber;
        course.participatorrestriction = this.state.participatorrestriction;
        course.evaluation = this.state.evaluation;
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
            title :'',
            titlelong : '',
            credits : '',
            description : '',
            semester : '',
            lecturer : '',
            chair : '',
            registrationstart :'',
            registrationend : '',
            exam : '',
            repeatexamatendofsemester : '',
            repeatexamatnextsemester :'',
            practicecourse :'',
            semesterperiodsperweek:'',
            start:'',
            end:'',
            dow:'',
            roomnumber:'',
            participatorrestriction:'',
            evaluation:'',
            comment:'',
            tag:'',
            public:'',
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
                        <TextField
                        label="Title"
                        id="TitleField"
                        type="text"
                        className="md-row"
                        required={true}
                        value={this.state.title}
                        onChange={this.handleChangeTitle}
                        errorText="Title is required"/>
                        <TextField
                            label="Title Long"
                            id="TitlelongField"
                            type="text"
                            className="md-row"
                            required={true}
                            value={this.state.titlelong}
                            onChange={this.handleChangeTitlelong}
                            errorText="Title long is required"/>
                        <TextField
                            label="Credits"
                            id="CreditsField"
                            type="number"
                            className="md-row"
                            required={true}
                            value={this.state.credits}
                            onChange={this.handleChangeCredits}
                            errorText="Credits are required"
                            maxLength={1}/>
                        <TextField
                            label="Description"
                            id="DescriptionField"
                            type="text"
                            className="md-row"
                            rows={5}
                            required={true}
                            value={this.state.description}
                            onChange={this.handleChangeDescription}
                            errorText="Synopsis is required"/>
                        <TextField
                            label="Semester"
                            id="SemesterField"
                            type="text"
                            className="md-row"
                            required={true}
                            value={this.state.semester}
                            onChange={this.handleChangeSemester}
                            errorText="Semester is required"
                            maxLength={14}/>
                        <TextField
                            label="Lecturer"
                            id="LecturerField"
                            type="text"
                            className="md-row"
                            required={true}
                            value={this.state.lecturer}
                            onChange={this.handleChangeLecturer}
                            errorText="Lecturer is required"/>

                        <TextField
                            label="Chair"
                            id="ChairField"
                            type="text"
                            className="md-row"
                            required={true}
                            value={this.state.chair}
                            onChange={this.handleChangeChair}
                            errorText="Chair is required"/>
                        <TextField
                            label="Registrationstart"
                            id="RegistrationstartField"
                            type="Date"
                            className="md-row"
                            required={true}
                            value={this.state.registrationstart}
                            onChange={this.handleChangeRegistrationstart}
                            errorText="Registrationstart is required"/>
                        <TextField
                            label="Registrationend"
                            id="RegistrationendField"
                            type="Date"
                            className="md-row"
                            required={true}
                            value={this.state.registrationend}
                            onChange={this.handleChangeRegistrationend}
                            errorText="Registrationend is required"/>
                        <TextField
                            label="Exam"
                            id="ExamField"
                            type="Date"
                            className="md-row"
                                    required={true}
                                    value={this.state.exam}
                                    onChange={this.handleChangeExam}
                                    errorText="Exam is required"/>
                                        <TextField
                                            label="Repeatexamatendofsemester"
                                            id="RepeatexamatendofsemesterField"
                                            type="Boolean"
                                            className="md-row"
                                            required={true}
                                            value={this.state.repeatexamatendofsemester}
                                            onChange={this.handleChangeRepeatexamatendofsemester}
                                            errorText="Repeatexamatendofsemester is required"/>
                                                <TextField
                                                    label="Repeatexamatnextsemester"
                                                    id="RepeatexamatnextsemesterField"
                                                    type="Boolean"
                                                    className="md-row"
                                                    required={true}
                                                    value={this.state.repeatexamatnextsemester}
                                                    onChange={this.handleChangeRepeatexamatnextsemester}
                                                    errorText="Repeatexamatnextsemester is required"/>
                                                        <TextField
                                                            label="Practicecourse"
                                                            id="PracticecourseField"
                                                            type="Boolean"
                                                            className="md-row"
                                                            required={true}
                                                            value={this.state.practicecourse}
                                                            onChange={this.handleChangePracticecourse}
                                                            errorText="Practicecourse is required"/>
                                                                <TextField
                                                                    label="Semesterperiodsperweek"
                                                                    id="SemesterperiodsperweekField"
                                                                    type="Number"
                                                                    className="md-row"
                                                                    required={true}
                                                                    value={this.state.semesterperiodsperweek}
                                                                    onChange={this.handleChangeSemesterperiodsperweek}
                                                                    errorText="Semesterperiodsperweek is required"/>
                                                                        <TextField
                                                                            label="start"
                                                                            id="StartField"
                                                                            type="Date"
                                                                            className="md-row"
                                                                            required={true}
                                                                            value={this.state.start}
                                                                            onChange={this.handleChangeStart}
                                                                            errorText="Start is required"/>
                                                                            <TextField
                                                                            label="end"
                                                                            id="EndField"
                                                                            type="Date"
                                                                            className="md-row"
                                                                            required={true}
                                                                            value={this.state.end}
                                                                            onChange={this.handleChangeEnd}
                                                                            errorText="End is required"/>
                                                                            <TextField
                                                                            label="Day of Course"
                                                                            id="dowField"
                                                                            type="Date"
                                                                            className="md-row"
                                                                            required={true}
                                                                            value={this.state.dow}
                                                                            onChange={this.handleChangeDow}
                                                                            errorText="Day of course is required"/>
                                                                                <TextField
                                                                                    label="Room number"
                                                                                    id="RoomnumberField"
                                                                                    type="Number"
                                                                                    className="md-row"
                                                                                    required={true}
                                                                                    value={this.state.roomnumber}
                                                                                    onChange={this.handleChangeRoomnumber}
                                                                                    errorText="Roomnumber is required"/>
                                                                                        <TextField
                                                                                            label="Participator Restriction"
                                                                                            id="ParticipatorrestrictionField"
                                                                                            type="Number"
                                                                                            className="md-row"
                                                                                            required={true}
                                                                                            value={this.state.participatorrestriction}
                                                                                            onChange={this.handleChangeParticipatorrestriction}
                                                                                            errorText="Participator Restriction is required"/>
                        <TextField
                            label="Evaluation"
                            id="EvaluationField"
                            type="String"
                            className="md-row"
                            required={true}
                            value={this.state.evaluation}
                            onChange={this.handleChangeEvaluation}
                            errorText="Evaluation is required"/>
                        <TextField
                            label="Comment"
                            id="CommentField"
                            type="String"
                            className="md-row"
                            required={true}
                            value={this.state.comment}
                            onChange={this.handleChangeComment}
                            errorText="Comment is required"/>
                        <TextField
                            label="Tag"
                            id="TagField"
                            type="String"
                            className="md-row"
                            required={true}
                            value={this.state.tag}
                            onChange={this.handleChangeTag}
                            errorText="Tag is required"/>


                        <Button id="submit" type="submit"
                                disabled={this.state.credits.toString().length != 1 || this.state.title == undefined || this.state.title == '' || this.state.credits == undefined || this.state.credits == '' || this.state.description == undefined || this.state.description == ''}
                                raised primary className="md-cell md-cell--2">Save</Button>
                        <Button id="reset" type="reset" raised secondary className="md-cell md-cell--2">Dismiss</Button>
                        <AlertMessage className="md-row md-full-width" >{this.props.error ? `${this.props.error}` : ''}</AlertMessage>
                    </form>
                </DialogContainer>
            </div>
        );
    }

}
let styles = {
    float: 'right'
};

export default withRouter(AddCourse);
