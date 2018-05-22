import React, { PureComponent } from 'react';
import { TextField,  Button, DialogContainer } from 'react-md';
import { AlertMessage } from './AlertMessage';
import styled from 'styled-components';
import {withRouter} from "react-router-dom";



class AddModule extends React.Component{


    constructor(props) {
        super(props);
        if(this.props.module != undefined) {
            this.state = {
                title : props.module.title,
                credits : props.module.credits,
                description : props.module.description,
                open : false

            };
        } else {
            this.state = {
                title : '',
                credits : '',
                description : '',
                open : false

            };
        }




        this.handleChangeTitle = this.handleChangeTitle.bind(this);
        this.handleChangeCredits = this.handleChangeCredits.bind(this);
        this.handleChangeDescription = this.handleChangeDescription.bind(this);
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

    handleSubmit(event) {
        event.preventDefault();

        let module = this.props.module;
        if(module == undefined) {
            module = {};
        }

        module.title = this.state.title;
        module.credits = this.state.credits;
        module.description = this.state.description;


        this.props.onSubmit(module);
    }


    openForm() {
        this.setState({
            open: true
        });
    }
    closeForm() {
        this.setState({
            title : '',
            credits : '',
            description : '',
            open : false
        });
    }


    render() {

        return (
            <div>
                <Button raised onClick={this.openForm}>AddModule</Button>
                <DialogContainer
                    id="add-module"
                    visible={this.state.open}
                    title= {<span>Add custom module<Button style = {styles} icon primary onClick={this.closeForm}>close</Button></span>}
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
                            label="Credits"
                            id="CreditsField"
                            type="number"
                            className="md-row"
                            required={true}
                            value={this.state.credits}
                            onChange={this.handleChangeCredits}
                            errorText="Year is required"
                            maxLength={1}/>
                        <TextField
                            label="Description"
                            id="DescriptionField"
                            type="text"
                            className="md-row"
                            rows={10}
                            required={true}
                            value={this.state.description}
                            onChange={this.handleChangeDescription}
                            errorText="Synopsis is required"/>

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

export default withRouter(AddModule);