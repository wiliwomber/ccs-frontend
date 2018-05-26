"use strict";

import React from 'react';
import { Toolbar, Button } from 'react-md';
import { withRouter } from 'react-router-dom';
import styled from 'styled-components';
import UserSettings from './UserSettings';
import logo from './../img/CCS_logo.png';


const Title = styled.h1`
    display: inline-block;
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    width: 200px;
    height: 50px;
    margin: auto;
    background-color: #f3f3f3;">Full Center ON Page
`;


class Header extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>


            <Toolbar
                nav={<Button onClick={() => this.props.history.push('/')} icon>home</Button>}
                //title={<img src={require('../img/CCS_logo.png')} />}
                title={<img src={logo} />}
                actions={<UserSettings id="toolbar-colored-kebab-menu" />}>

            </Toolbar>
                <Title>{/*CampusCourseScheduler*/}</Title>

            </div>
        );
    }
}

export default withRouter(Header);