"use strict";

import React from 'react';
import { Toolbar, Button } from 'react-md';
import { withRouter } from 'react-router-dom';
import styled from 'styled-components';
import UserSettings from './UserSettings';


const Title = styled.h1`
    display: inline-block;
    top: 14px;
    bottom: 0;
    left: 35%;
    right: 50%;
    width: 200px;
    position: absolute;
`;


class Header extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <Title>CampusCourseScheduler</Title>
            <Toolbar
                title={this.props.title}
                actions={<UserSettings id="toolbar-colored-kebab-menu" />}>

            </Toolbar>


            </div>
        );
    }
};


export default withRouter(Header);