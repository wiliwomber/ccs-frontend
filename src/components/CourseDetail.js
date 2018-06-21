import React, { PureComponent } from 'react';
import { TextField,  Button, DialogContainer, FontIcon } from 'react-md';
import { AlertMessage } from './AlertMessage';
import styled from 'styled-components';
import {withRouter} from "react-router-dom";


class AddCourse extends React.Component{


    constructor(props) {
        super(props);
        if (this.props.course != undefined) {
            this.state = {
                title: props.course.title,
                open: false

            };
        } else {
            this.state = {
                title: 'empty',
                open: false

            };
        }


        this.openForm = this.openForm.bind(this);
        this.closeForm = this.closeForm.bind(this);

    }




    openForm() {
        this.setState({
            open: true
        });
    }
    closeForm() {
        this.setState({
            title : undefined,
            open : false
        });
    }


    render() {

        return (
            <div>
                <Button raised onClick={this.openForm}><FontIcon>visibility</FontIcon></Button>
                <DialogContainer
                    id="add-course"
                    visible={this.state.open}
                    title= {<span>Information- {this.state.title} <Button style = {styles} icon primary onClick={this.closeForm}>close</Button></span>}
                    onHide={this.openForm}
                    width={1700}
                >


                </DialogContainer>
            </div>
        );
    }

}
let styles = {
    float: 'right'
};

export default withRouter(AddCourse);