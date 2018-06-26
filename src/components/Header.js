"use strict";

import React from 'react';
import { Toolbar, Button} from 'react-md';
import { withRouter } from 'react-router-dom';
import styled from 'styled-components';
import UserSettings from './UserSettings';
import img from "../img/logo.png";

const StyledHeader = styled.div`
    background: rgba(255,255,255,0.9);
    height: 70px;
`;

const Title = styled.h1`
    display: inline-block;
    top: 14px;
    bottom: 0;
    left: 35%;
    right: 50%;
    width: 200px;
    position: absolute;
`;

const StyledLogo = styled.img`
    height: 60px;
    width: auto;
    margin: 5px;
    padding: 0px;
`;

class Header extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <StyledHeader>
                <Toolbar
                    actions={<UserSettings id="toolbar-colored-kebab-menu" />}>
                    <StyledLogo src={img}/>
                    <Title>CampusCourseScheduler</Title>
                </Toolbar>
            </StyledHeader>
        );
    }
};


export default withRouter(Header);