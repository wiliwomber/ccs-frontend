"use strict";

import React from 'react';
import { Toolbar, Button } from 'react-md';
import { withRouter } from 'react-router-dom';
import styled from 'styled-components';
import UserSettings from './UserSettings';
import logo from './../img/logo.png';



class Header extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
            <Toolbar
                nav={<Button onClick={() => this.props.history.push('/')} icon>home</Button>}
                title={<img src={logo} height={50} width={200} mode="fit"/>}
                actions={<UserSettings id="toolbar-colored-kebab-menu" />}>
            </Toolbar>
            </div>
        );
    }
}

export default withRouter(Header);