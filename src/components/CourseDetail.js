import React from 'react';
import { Grid, Cell,  Button, DialogContainer, TextField} from 'react-md';
import {withRouter} from "react-router-dom";
import { updateCourse } from "../services/CourseService"
import CourseService from "../services/CourseService";

class CourseDetail extends React.Component{


    constructor(props) {
        super(props);
        this.state = {
            likesGiven : false,
            likes: this.props.course.likes,
            comment: '',
            test: '',
        };
        this.closeForm = this.closeForm.bind(this);
        this.handleChangeComment = this.handleChangeComment.bind(this);
        this.handleChangeLikes = this.handleChangeLikes.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentWillMount(){
        if(this.props.course.comment!=undefined){
            this.setState({existingComments: this.props.course.comment});
        } else {
            this.setState({existingComments: ['']});
        }
    }

    //closes the popup
    closeForm() {
        this.props.close();
    }

    handleChangeComment(value){
        console.log(value);
        this.setState({comment: value});
    }

    handleChangeLikes (){
        console.log('handle');
        if(this.state.likesGiven == false){
            this.setState({
                likesGiven:true,
                likes:(this.state.likes+1)});
        } else{
            this.setState({
                likesGiven:false,
                likes:(this.state.likes-1)});
        }
    }

    handleSubmit(){
        console.log('submit');
        let course = this.props.course;
        course.likes = this.state.likes;
        if(this.state.comment.length > 1){
            course.comment.push(this.state.comment);
            this.setState({
                existingComments:course.comment,
                comment: '',
            });
        }
        CourseService.updateCourse(course)
            .then(course=>{
                console.log(course.comment);
            })
            .catch(error => {
                console.log(error);
            });
    }

    render() {
        return (
            <div style={styles.container}>
                <DialogContainer
                    id="detail-course"
                    modal={true}
                    portal={true}
                    visible={this.props.open}
                    title= {<span>Details - {this.props.course.titlelong} <Button style = {styles.button} icon primary onClick={this.closeForm}>close</Button></span>}
                    onHide={this.closeForm}
                    width={600}
                >

                    <Grid>
                        <Cell size={12}>
                            <h4 style={styles.container.p}><b>Description</b></h4>
                            <p style={styles.container.p}>{this.props.course.description}</p>
                        </Cell>
                    </Grid>

                    <Grid>
                        <Cell size={6}>
                            <h4 style={styles.container.p}><b>Lecturer</b></h4>
                            <p style={styles.container.p}>{this.props.course.lecturer}</p>
                        </Cell>
                        <Cell size={6}>
                            <h4 style={styles.container.p}><b>Chair</b></h4>
                            <p style={styles.container.p}>{this.props.course.chair}</p>
                        </Cell>
                    </Grid>

                    <Grid>
                        <Cell size={6}>
                            <h4 style={styles.container.p}><b>Credits</b></h4>
                            <p style={styles.container.p}>{this.props.course.credits}</p>
                        </Cell>
                        <Cell size={6}>
                            <h4 style={styles.container.p}><b>Recommended Semester</b></h4>
                            <p style={styles.container.p}>{this.props.course.semester}</p>
                        </Cell>
                    </Grid>

                    <Grid>
                        <Cell size={6}>
                            <h4 style={styles.container.p}><b>Registration Period</b></h4>
                            <p style={styles.container.p}>From {this.props.course.registrationstart} until {this.props.course.registrationend}</p>
                        </Cell>
                        <Cell size={6}>
                            <h4 style={styles.container.p}><b>Takes place on</b></h4>
                            <p style={styles.container.p}>{this.props.course.day}'s</p>
                        </Cell>
                    </Grid>

                    <Grid>
                        <Cell size={6}>
                            <h4 style={styles.container.p}><b>Exam Date</b></h4>
                            <p style={styles.container.p}>{this.props.course.exam}</p>
                        </Cell>
                        <Cell size={6}>
                            <h4 style={styles.container.p}><b>Repeat Exam takes place in</b></h4>
                            <p style={styles.container.p}>{this.props.course.repeatexam}</p>
                        </Cell>
                    </Grid>

                    <Grid>
                        <Cell size={6}>
                            <h4 style={styles.container.p}><b>Time of Lecture</b></h4>
                            <p style={styles.container.p}>From: {this.props.course.start} till {this.props.course.end}</p>
                        </Cell>
                        <Cell size={6}>
                            <h4 style={styles.container.p}><b>This module is a</b></h4>
                            <p style={styles.container.p}>{this.props.course.courseType}</p>
                        </Cell>
                    </Grid>

                    <Grid>
                        <Cell size={6}>
                            <h4 style={styles.container.p}><b>Room number</b></h4>
                            <p style={styles.container.p}>{this.props.course.roomnumber}</p>
                        </Cell>

                        <Cell size={6}>
                            <h4 style={styles.container.p}><b>Like this course? Give it a heart! </b></h4>
                            <Grid>
                            <Cell size={3}>
                            <Button icon primary onClick = {this.handleChangeLikes}>favorite</Button>
                            </Cell>
                            <Cell size={2}>
                                <p style={styles.likes}>{this.state.likes}</p>
                            </Cell>
                            </Grid>
                        </Cell>
                        <Cell size={12}>
                            <h4 style={styles.container.p}><b>Comments</b></h4>
                            {this.state.existingComments.map(comment => {
                                return (<p key={comment}>{comment}</p>);})
                            }
                        </Cell>
                        <Cell size={12}>
                            <h4 style={styles.container.p}><b>Leave your own comment</b></h4>
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


                    </Grid>
                    <Button id="submit" type="submit" disabled={this.state.comment.length<2} raised primary className="md-cell md-cell--4" onClick = {this.handleSubmit}>Leave feedback</Button>

                </DialogContainer>
            </div>
        );
    }

}
let styles = {
    button : {
    float: 'right'
    },
    container: {
        margin: '10px',
        p : {
            float: 'button',
        },
        h4 : {
            float: 'top',
        }
    },
    likes : {
        lineHeight: '40px',
    }

};

export default withRouter(CourseDetail);