
import React from 'react';
import { TextField, Checkbox, DatePicker, Button, DialogContainer,SelectField, Grid, Cell} from 'react-md';
import { AlertMessage } from './AlertMessage';
import TimePicker from 'react-md/lib/Pickers/TimePickerContainer';
import {withRouter} from "react-router-dom";

class AddCourse extends React.Component{
    constructor(props) {
        super(props);
            this.state = {
                title :undefined,
                titlelong : undefined,
                credits :undefined,
                description : undefined,
                semester : undefined,
                lecturer : undefined,
                chair : undefined,
                registrationstart :undefined,
                registrationend : undefined,
                exam : undefined,
                repeatexam : undefined,
                courseType :undefined,
                semesterperiodsperweek:undefined,
                start: undefined,
                end: undefined,
                roomnumber:undefined,
                comment: undefined,
                public: false,
                open : false,
                dow : undefined,
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
        course.courseType = this.state.courseType;
        course.semesterperiodsperweek = this.state.semesterperiodsperweek;
        course.start = this.state.start;
        course.end = this.state.end;
        course.dow = this.state.dow;
        course.roomnumber= this.state.roomnumber;
        course.comment = this.state.comment;
        course.credits = this.state.credits;
        course.tag = this.state.tag;
        course.public = this.state.public;
        course.day = this.state.day;

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
            courseType :undefined,
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
//TODO schön machen
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


                            <Grid>
                                <Cell style={styles.cell} size={5}>
                                    <p style={styles.p}>Abbreviation of the course name</p>
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
                                    <p style={styles.p}>Name of the course</p>
                                    <TextField
                                        style={styles.container}
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
                                        id="TextField"
                                        type="text"
                                        className="md-row"
                                        rows={5}
                                        required={true}
                                        value={this.state.description}
                                        onChange={this.handleChangeDescription}
                                        errorText="Synopsis is required"/>
                                </Cell>
                                <Cell style={styles.cell} size={4}>
                                    <p style={styles.p}>Beginning of registration period</p>
                                    <DatePicker
                                        style={styles.container}
                                        id="appointment-date-landscape"
                                        fullWidth={false}
                                        className="md-cell"
                                        displayMode="portrait"
                                        portal
                                        lastChild
                                        renderNode={null}
                                        disableScrollLocking
                                        required={true}
                                        //value={this.state.registrationstart}
                                        onChange={this.handleChangeRegistrationstart}
                                        errorText="Registrationstart is required"/>
                                </Cell>
                                <Cell style={styles.cell} size={4}>
                                    <p style={styles.p}>End of registration period</p>
                                    <DatePicker
                                        style={styles.container}
                                        id="inline-date-picker-auto"
                                        fullWidth={false}
                                        className="md-cell"
                                        displayMode="landscape"
                                        required={true}
                                        portal
                                        lastChild
                                        renderNode={null}
                                        disableScrollLocking
                                        //  value={this.state.registrationend}
                                        onChange={this.handleChangeRegistrationend}
                                        errorText="Registrationend is required"/>
                                </Cell>
                                <Cell style={styles.cell} size={4}>
                                    <p style={styles.p}>Date of the final exam</p>
                                    <DatePicker
                                        style={styles.container}
                                        id="inline-date-picker-auto"
                                        fullWidth={false}
                                        portal
                                        lastChild
                                        renderNode={null}
                                        disableScrollLocking
                                        className="md-cell"
                                        displayMode="portrait"
                                        required={true}
                                        //value={this.state.exam}
                                        onChange={this.handleChangeExam}
                                        errorText="Exam is required"/>

                                </Cell>
                                <Cell style={styles.cell} size={4}>
                                    <p style={styles.p}>Credits</p>
                                    <SelectField
                                        style={styles.container}
                                        id="select-field-1"
                                        lable="Credits"
                                        placeholder="Credits"
                                        className="md-cell"
                                        menuItems={[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13,14,15]}
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
                                        id="select-field-1"
                                        lable="Semester"
                                        placeholder="Semester"
                                        className="md-cell"
                                        required={true}
                                        value={this.state.semester}
                                        onChange={this.handleChangeSemester}
                                        errorText="Semester is required"
                                        menuItems={[0, 1, 2, 3, 4, 5, 6, 7, 8]}
                                        simplifiedMenu = {true}
                                        position={SelectField.Positions.BELOW}/>

                                </Cell>
                                <Cell style={styles.cell} size={4}>
                                    <p style={styles.p}>Repeat exam takes place in:</p>
                                    <SelectField
                                        style={styles.container}
                                        id="select-field-1"
                                        lable="Repeat Exam"
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
                                        className="md-cell"
                                        portal
                                        lastChild
                                        renderNode={null}
                                        disableScrollLocking
                                        displayMode="portrait"
                                        required={true}
                                        //value={this.state.start}
                                        onChange={this.handleChangeStart}
                                        errorText="Start is required" />
                                </Cell>
                                <Cell style={styles.cell} size={4}>
                                    <p style={styles.p}>Time the course ends</p>
                                    <TimePicker
                                        style={styles.container}
                                        id="end"
                                        className="md-cell"
                                        portal
                                        lastChild
                                        renderNode={null}
                                        disableScrollLocking
                                        displayMode="portrait"
                                        required={true}
                                        //value={this.state.end}
                                        onChange={this.handleChangeEnd}/>
                                </Cell>
                                <Cell style={styles.cell} size={4}>
                                    <p style={styles.p}>Weekday of the course</p>
                                    <SelectField
                                        style={styles.container}
                                        id="select-field-1"
                                        placeholder="Day"
                                        className="md-cell"
                                        menuItems={['Monday','Tuesday','Wednesday','Thursday','Friday']}
                                        required={true}
                                        value={this.state.day}
                                        simplifiedMenu = {true}
                                        errorText="Please choose a term"
                                        position={SelectField.Positions.BELOW}
                                        onChange={this.handleChangeDow}/>

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
                                            name="CourseType"
                                            id="BooleanField"
                                            placeholder="Course Type"
                                            menuItems={['Lecture','Exercise','Seminar']}
                                            className="md-row"
                                            required={true}
                                            simplifiedMenu = {true}
                                            value={this.state.courseType}
                                            position={SelectField.Positions.BELOW}
                                            onChange={this.handleChangeCourseType}
                                        />
                                    </Cell>

                                <Cell style={styles.cell} size={4}>
                                    <p style={styles.p}>Semester per week</p>
                                    <TextField
                                        style={styles.container}
                                        label="Semesterperiodsperweek"
                                        id="TextField"
                                        type="number"
                                        className="md-row"
                                        required={true}
                                        value={this.state.semesterperiodsperweek}
                                        onChange={this.handleChangeSemesterperiodsperweek}
                                        errorText="Semesterperiodsperweek is required"/>
                                </Cell>
                                <Cell style={styles.cell} size={4}>
                                    <p style={styles.p}>Room number</p>
                                    <TextField
                                        style={styles.container}
                                        label="Room number"
                                        id="TextField"
                                        type="text"
                                        className="md-row"
                                        required={true}
                                        value={this.state.roomnumber}
                                        onChange={this.handleChangeRoomnumber}
                                        errorText="Roomnumber is required"/>
                                </Cell>
                                <Cell style={styles.cell} size={4}>
                                    <p style={styles.p}>Comment</p>
                                    <TextField
                                        style={styles.container}
                                        label="Comment"
                                        id="TextField"
                                        type="text"
                                        className="md-row"
                                        required={true}
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
                                        required={true}
                                        onChange={this.handleChangePublic}/>
                                </Cell>
                            </Grid>

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
        marginLeft: '1px',
    },
    p: {
        color: 'grey',
    }, cell : {
        padding: '30px',
    }
};
