
import React from 'react';
import { TextField, Checkbox, DatePicker, Button, DialogContainer,SelectField, Grid, Cell} from 'react-md';
import { AlertMessage } from './AlertMessage';
import TimePicker from 'react-md/lib/Pickers/TimePickerContainer';
import {withRouter} from "react-router-dom";

class AddCourse extends React.Component{
    constructor(props) {
        super(props);
            this.state = {
                title :'',
                titlelong : '',
                credits :'',
                description : '',
                semester : '',
                lecturer : '',
                chair : '',
                registrationstart :'',
                registrationend : '',
                exam : '',
                repeatexam : '',
                courseType :'',
                semesterperiodsperweek:'',
                start: '',
                end: '',
                roomnumber:'',
                comment: '',
                public: false,
                open : false,
                dow : '',
                type: '',
            };


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
        this.handleChangeCourseType = this.handleChangeCourseType.bind(this);
        this.handleChangeStart = this.handleChangeStart.bind(this);
        this.handleChangeEnd = this.handleChangeEnd.bind(this);
        this.handleChangeRoomnumber = this.handleChangeRoomnumber.bind(this);
        this.handleChangeSemesterperiodsperweek = this.handleChangeSemesterperiodsperweek.bind(this);
        this.handleChangeComment = this.handleChangeComment.bind(this);
        this.handleChangeTag = this.handleChangeTag.bind(this);
        this.handleChangeDow = this.handleChangeDow.bind(this);
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
    handleChangeRepeatexam(value) {
        this.setState(Object.assign({}, this.state, {repeatexam: value}));
    }
    handleChangeCourseType(value) {
        this.setState(Object.assign({}, this.state, {courseType: value}));
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
        this.setState({public: value});
    }
    handleChangeDow(value) {
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
        this.setState({day: value});
    }


    handleSubmit(event) {
        event.preventDefault();
                let course = this.props.course;
        if(course === undefined) {
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
        course.courseType = this.state.courseType;
        course.semesterperiodsperweek = this.state.semesterperiodsperweek;
        course.start = this.state.start;
        course.end = this.state.end;
        course.dow = this.state.dow;
        course.roomnumber= this.state.roomnumber;
        console.log(this.state.comment);
        course.comment = [];
        course.comment.push(this.state.comment);
        course.credits = this.state.credits;
        course.tag = this.state.tag;
        course.public = false;
        course.day = this.state.day;
        course.likes = 0;


        this.props.onSubmit(course);
        this.closeForm();
    }


    openForm() {
        this.setState({
            open: true
        });
    }

    closeForm() {
        this.setState({
            title : '',
            titlelong : '',
            credits : '',
            description : '',
            semester : '',
            lecturer : '',
            chair : '',
            registrationstart :'',
            registrationend : '',
            exam : '',
            repeatexam : '',
            courseType :'',
            semesterperiodsperweek:'',
            start:'',
            end:'',
            dow:'',
            roomnumber:'',
            comment:'',
            tag:'',
            public: false,
            day: '',
            open : false
        });
    }



    render() {
        return (
            <div>
                <Button raised id="createCourseButton" type="submit" secondary className="md-cell md-cell--3" onClick={this.openForm}>Create Course</Button>
                <DialogContainer
                    id="add-course"
                    visible={this.state.open}
                    title= {<span>Add custom course<Button style = {styles} icon primary onClick={this.closeForm}>close</Button></span>}
                    onHide={this.openForm}
                    width={1700}
                >
                    <form className="md-grid" onSubmit={this.handleSubmit} onReset={() => this.closeForm()}>


                            <Grid>
                                <Cell style={styles.cell} size={5}>
                                    <p style={styles.p}>Name of the course</p>
                                    <TextField
                                        style={styles.container}
                                        label="Title Long"
                                        id="TextField"
                                        type="text"
                                        className="md-row"
                                        required={true}
                                        value={this.state.titlelong}
                                        onChange={this.handleChangeTitlelong}
                                        errorText="Title long is required"/>
                                    <p style={styles.p}>Abbreviation of the course name</p>
                                    <TextField
                                        style={styles.container}
                                        label="Title Abbreviation"
                                        id="TextField"
                                        type="text"
                                        className="md-row"
                                        required={true}
                                        value={this.state.title}
                                        onChange={this.handleChangeTitle}
                                        errorText="Title is required"/>
                                </Cell>
                                <Cell style={styles.cell}  size={7}>
                                    <p style={styles.p}>Course description</p>
                                    <TextField
                                        style={styles.container}
                                        label="Course Description"
                                        id="TextField"
                                        type="text"
                                        className="md-row"
                                        rows={6}
                                        required={true}
                                        value={this.state.description}
                                        onChange={this.handleChangeDescription}
                                        errorText="Synopsis is required"/>
                                </Cell>
                                <Cell style={styles.cell} size={4}>
                                    <p style={styles.p}>Beginning of registration period</p>
                                    <DatePicker
                                        style={styles.container}
                                        label="Start registration period"
                                        id="Registration start"
                                        fullWidth={false}
                                        className="md-cell"
                                        displayMode="landscape"
                                        portal
                                        lastChild
                                        renderNode={null}
                                        disableScrollLocking
                                        required={false}
                                        onChange={this.handleChangeRegistrationstart}
                                        errorText="Registration start is required"/>
                                </Cell>
                                <Cell style={styles.cell} size={4}>
                                    <p style={styles.p}>End of registration period</p>
                                    <DatePicker
                                        style={styles.container}
                                        label="End registration period"
                                        id="Registration end"
                                        fullWidth={false}
                                        className="md-cell"
                                        displayMode="landscape"
                                        required={false}
                                        portal
                                        lastChild
                                        renderNode={null}
                                        disableScrollLocking
                                        onChange={this.handleChangeRegistrationend}
                                        errorText="Registration end is required"/>
                                </Cell>
                                <Cell style={styles.cell} size={4}>
                                    <p style={styles.p}>Date of the final exam</p>
                                    <DatePicker
                                        style={styles.container}
                                        id="Date of exam"
                                        label="Date of exam"
                                        fullWidth={false}
                                        portal
                                        lastChild
                                        renderNode={null}
                                        disableScrollLocking
                                        className="md-cell"
                                        displayMode="landscape"
                                        required={false}
                                        onChange={this.handleChangeExam}
                                        errorText="Exam is required"/>

                                </Cell>
                                <Cell style={styles.cell} size={4}>
                                    <p style={styles.p}>Credits</p>
                                    <SelectField
                                        style={styles.container}
                                        id="select-field-1"
                                        label="Credits"
                                        placeholder="Credits"
                                        className="md-cell"
                                        menuItems={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13,14,15]}
                                        required={true}
                                        value={this.state.credits}
                                        onChange={this.handleChangeCredits}
                                        simplifiedMenu = {true}
                                        errorText="Credits are required"
                                        position={SelectField.Positions.BELOW}/>
                                </Cell>
                                <Cell style={styles.cell} size={4}>
                                    <p style={styles.p}>Recommended Semester</p>
                                    <SelectField
                                        style={styles.container}
                                        id="Recommended semester"
                                        label="Semester"
                                        placeholder="Semester"
                                        className="md-cell"
                                        menuItems={[1, 2, 3, 4, 5, 6, 7, 8]}
                                        required={true}
                                        value={this.state.semester}
                                        onChange={this.handleChangeSemester}
                                        simplifiedMenu = {true}
                                        errorText="Semester is required"
                                        position={SelectField.Positions.BELOW}/>

                                </Cell>
                                <Cell style={styles.cell} size={4}>
                                    <p style={styles.p}>Repeat exam takes place in:</p>
                                    <SelectField
                                        style={styles.container}
                                        id="Repeat exam"
                                        label="Repeat Exam"
                                        placeholder="Repeat Exam"
                                        className="md-cell"
                                        menuItems={['Winterterm','Summerterm']}
                                        required={true}
                                        value={this.state.repeatexam}
                                        onChange={this.handleChangeRepeatexam}
                                        simplifiedMenu = {true}
                                        errorText="Please choose a term"
                                        position={SelectField.Positions.BELOW}/>
                                </Cell>
                                <Cell style={styles.cell} size={4}>
                                    <p style={styles.p}>Time the course starts</p>
                                    <TimePicker
                                        style={styles.container}
                                        id="start"
                                        label="Start of course"
                                        className="md-cell"
                                        portal
                                        lastChild
                                        renderNode={null}
                                        disableScrollLocking
                                        displayMode="landscape"
                                        required={true}
                                        onChange={this.handleChangeStart}
                                        errorText="Start is required" />
                                </Cell>
                                <Cell style={styles.cell} size={4}>
                                    <p style={styles.p}>Time the course ends</p>
                                    <TimePicker
                                        style={styles.container}
                                        id="end"
                                        label="End of course"
                                        displayMode="landscape"
                                        size="50px"
                                        className="md-cell"
                                        portal
                                        lastChild
                                        renderNode={null}
                                        disableScrollLocking
                                        required={true}
                                        onChange={this.handleChangeEnd}
                                    />
                                </Cell>
                                <Cell style={styles.cell} size={4}>
                                    <p style={styles.p}>Weekday of the course</p>
                                    <SelectField
                                        style={styles.container}
                                        id="Weekday of course"
                                        label="Weekday of course"
                                        placeholder="Day"
                                        className="md-cell"
                                        menuItems={['Monday','Tuesday','Wednesday','Thursday','Friday']}
                                        required={true}
                                        value={this.state.day}
                                        onChange={this.handleChangeDow}
                                        simplifiedMenu ={true}
                                        errorText="Please choose a term"
                                        position={SelectField.Positions.BELOW}/>
                                </Cell>

                                    <Cell style={styles.cell} size={4}>
                                        <p style={styles.p}>Lecturer</p>
                                        <TextField
                                            style={styles.container}
                                            label="Lecturer"
                                            id="TextField"
                                            type="text"
                                            className="md-row"
                                            required={true}
                                            value={this.state.lecturer}
                                            onChange={this.handleChangeLecturer}
                                            errorText="Lecturer is required"/>
                                    </Cell>
                                    <Cell style={styles.cell} size={4}>
                                        <p style={styles.p}>Chair</p>
                                        <TextField
                                            style={styles.container}
                                            label="Chair"
                                            id="TextField"
                                            type="text"
                                            className="md-row"
                                            required={true}
                                            value={this.state.chair}
                                            onChange={this.handleChangeChair}
                                            errorText="Chair is required"/>
                                    </Cell>
                                    <Cell style={styles.cell} size={4}>
                                        <p style={styles.p}>Type of module</p>
                                        <SelectField
                                            style={styles.container}
                                            id="BooleanField"
                                            label="Course type"
                                            placeholder="Course Type"
                                            className="md-row"
                                            menuItems={['Lecture','Exercise','Seminar']}
                                            required={true}
                                            value={this.state.courseType}
                                            onChange={this.handleChangeCourseType}
                                            simplifiedMenu = {true}
                                            position={SelectField.Positions.BELOW}/>
                                    </Cell>
                                <Cell style={styles.cell} size={4}>
                                    <p style={styles.p}>Semester per week</p>
                                    <TextField
                                        style={styles.container}
                                        label="SemesterPeriods per week"
                                        id="TextField"
                                        type="number"
                                        className="md-row"
                                        required={true}
                                        value={this.state.semesterperiodsperweek}
                                        onChange={this.handleChangeSemesterperiodsperweek}
                                        errorText="Semesterperiods per week is required"/>
                                </Cell>
                                <Cell style={styles.cell} size={4}>
                                    <p style={styles.p}>Room of the course</p>
                                    <TextField
                                        style={styles.container}
                                        label="Room"
                                        id="TextField"
                                        type="text"
                                        className="md-row"
                                        required={true}
                                        value={this.state.roomnumber}
                                        onChange={this.handleChangeRoomnumber}
                                        errorText="Room of the course is required"/>
                                </Cell>
                                <Cell style={styles.cell} size={4}>
                                    <p style={styles.p}>Comment</p>
                                    <TextField
                                        style={styles.container}
                                        label="Comment"
                                        id="TextField"
                                        type="text"
                                        className="md-row"
                                        required={false}
                                        value={this.state.comment}
                                        onChange={this.handleChangeComment}
                                        errorText="Comment is required"/>
                                </Cell>
                                <Cell style={styles.cell} size={4}>
                                    <p style={styles.p}>Mark for publication</p>
                                    <Checkbox
                                        id="checkbox-read-material-design-spec"
                                        name="simple-checkboxes[]"
                                        style={styles.container}
                                        label='Publication'
                                        className="md-row"
                                        required={false}
                                        onChange={this.handleChangePublic}/>
                                </Cell>
                            </Grid>

                        <Button id="submit" type="submit"
                                disabled={this.state.credits.toString().length > 2 || this.state.title === ''||
                                this.state.semester.toString().length > 2 || this.state.description === '' ||
                                this.state.start > this.state.end || this.state.registrationstart > this.state.registrationend}
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
        marginLeft: '1px',
    },
    p: {
        color: 'grey',
    },
    cell: {
        padding: '30px',
    },
};
