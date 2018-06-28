import React from 'react';
import './../../node_modules/material-components-web/dist/material-components-web.min.css';
import { Snackbar } from 'rmwc/Snackbar';
import UserService from "../services/UserService";
import './../App.css';

export class SnackbarService extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            snackTimeout: 3000,
            snackMessage: 'Default message',
            snackbarIsOpen: false,
        };
    }

    componentDidMount(){
        UserService.registerListener("Snack_CourseRemoved", this.courseRemoved.bind(this));
        UserService.registerListener("Snack_CourseAdded", this.courseAdded.bind(this));
        UserService.registerListener("Snack_CourseCreated", this.courseCreated.bind(this));
        UserService.registerListener("Snack_LogIn", this.userLoggedIn.bind(this));
        UserService.registerListener("Snack_Hide", this.hideSnacks.bind(this));
    }

    courseRemoved(){
        this.setState({
            snackbarIsOpen: true,
            snackMessage: 'Course removed from calendar',
        });
    }

    courseAdded(){
        this.setState({
            snackbarIsOpen: true,
            snackMessage: 'Course added to calendar',
        });
    }

    courseCreated(){
        this.setState({
            snackbarIsOpen: true,
            snackMessage: 'Course successfully created',
        });
    }

    userLoggedIn(){
        this.setState({
            snackbarIsOpen: true,
            snackMessage: 'User logged in',
        });
    }

    hideSnacks() {
        this.setState({
            snackbarIsOpen: false
        });
    }

    render() {
        return (
                <Snackbar
                    id="snackBar"
                    show={this.state.snackbarIsOpen}
                    onHide={evt => this.setState({snackbarIsOpen: false})}
                    message={this.state.snackMessage}
                    timeout={this.state.snackTimeout}
                    actionText=""
                    actionHandler={() => alert('Action clicked')}
                />
        )
    }

}

export default SnackbarService;
