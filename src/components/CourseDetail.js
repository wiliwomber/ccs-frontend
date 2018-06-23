import React from 'react';
import { Grid, Cell,  Button, DialogContainer} from 'react-md';
import {withRouter} from "react-router-dom";
import {MainPageView} from "./../views/MainPageView";


class AddCourse extends React.Component{


    constructor(props) {
        super(props);

        this.closeForm = this.closeForm.bind(this);
    }


    //closes the popup
    closeForm() {
        this.props.close();
    }



    render() {
        return (
            <div style={styles.container}>
                <DialogContainer
                    component={'MainPageView'}
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
                            <h4 style={styles.container.p}><b>Roomnumber</b></h4>
                            <p style={styles.container.p}>{this.props.course.roomnumber}</p>
                        </Cell>
                        <Cell size={6}>
                            <h4 style={styles.container.p}><b>Comments</b></h4>
                            <p style={styles.container.p}>{this.props.course.comment}</p>
                        </Cell>
                    </Grid>


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
    }

};

export default withRouter(AddCourse);