import React, { PureComponent } from 'react';
import { TextField,  Button, DialogContainer } from 'react-md';
import { AlertMessage } from './AlertMessage';
import styled from 'styled-components';

const CloseButton = styled.span`
    float:right;
    
    `;

export class AddModule extends React.Component{


    constructor(props) {
        super(props);
        this.state = {
            open: false
        };
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
            open: false
        });
    }


    render() {

        return (
            <div>
                <Button raised onClick={this.openForm}>AddModule</Button>
                <DialogContainer
                    id="add-module"
                    visible={this.state.open}
                    title= {<span>Add custom module<CloseButton><Button icon primary onClick={this.closeForm}>close</Button></CloseButton></span>}
                    onHide={this.openForm}
                    width={1700}
                >

                    <form className="md-grid" onSubmit={this.handleSubmit} onReset={() => this.props.history.goBack()}>
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
                            rows={5}
                            required={true}
                            value={this.state.description}
                            onChange={this.handleChangeDescription}
                            errorText="Synopsis is required"/>

                        <Button id="submit" type="submit"
                                disabled={this.state.credits.toString().length != 4 || this.state.title == undefined || this.state.title == '' || this.state.year == undefined || this.state.year == '' || this.state.synopsis == undefined || this.state.synopsis == ''}
                                raised primary className="md-cell md-cell--2">Save</Button>
                        <Button id="reset" type="reset" raised secondary className="md-cell md-cell--2">Dismiss</Button>
                        <AlertMessage className="md-row md-full-width" >{this.props.error ? `${this.props.error}` : ''}</AlertMessage>
                    </form>
                </DialogContainer>
            </div>
        );
    }

}
