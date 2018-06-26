"use strict";

import React from 'react';
import PropTypes from 'prop-types';
import { MenuButton, ListItem, Avatar, FontIcon } from 'react-md';
import { withRouter } from 'react-router-dom'
import UserService from  '../services/UserService';

var SnackMessage = "";

class UserSettings extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            user: UserService.isAuthenticated() ? UserService.getCurrentUser() : undefined
        }
    }

    logout() {
        UserService.logout();
        this.state = {
            user: UserService.isAuthenticated() ? UserService.getCurrentUser() : undefined
        };
        if(this.props.location.pathname != '/') {
            this.props.history.push('/');
        }
        else {
            window.location.reload();
        }
        SnackMessage = "User logged out";
        this.setState({snackbarIsOpen: !this.state.snackbarIsOpen})
    }

    render() {
        return (
            <div>
                <MenuButton
                    id={this.props.id}
                    icon
                    className={this.props.className}
                    menuItems={this.state.user ? [
                        <ListItem key={1} leftAvatar={<Avatar icon={<FontIcon>account_circle</FontIcon>}/>} primaryText={this.state.user.username}/>,
                        <ListItem key={4} primaryText="Hide Snacks" onClick={UserService.notifyListeners("Snack_Hide")}/>,
                        <ListItem key={3} primaryText="Logout" onClick={() => this.logout()}/>
                    ]: [<ListItem key={1} primaryText="Login" onClick={() => this.props.history.push('/login')}/>]}
                >
                    account_circle
                </MenuButton>
            </div>
        );
    }
}

UserSettings.propTypes = {
    id: PropTypes.string.isRequired,
    className: PropTypes.string,
    menuItems: PropTypes.array
};

export default withRouter(UserSettings);