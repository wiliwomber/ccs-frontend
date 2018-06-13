"use strict";

import React from 'react';
import { Toolbar, Button } from 'react-md';
import { withRouter } from 'react-router-dom';
import styled from 'styled-components';
import UserSettings from './UserSettings';


const Title = styled.h1`
    display: inline-block;
    top: 10px;
    bottom: 0;
    left: 35%;
    right: 0;
    width: 200px;
    height: 100px;
`;


class Header extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>


            <Toolbar
                nav={<Button onClick={() => this.props.history.push('/test')} icon>home</Button>}
                title={this.props.title}
                actions={<UserSettings id="toolbar-colored-kebab-menu" />}>
                <Title>CampusCourseScheduler</Title>
            </Toolbar>


            </div>
        );
    }
};

export default withRouter(Header);