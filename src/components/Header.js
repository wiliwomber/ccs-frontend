"use strict";

import React from 'react';
import { Toolbar, Button} from 'react-md';
import { withRouter } from 'react-router-dom';
import styled from 'styled-components';
import UserSettings from './UserSettings';
import CCSLogo from "../img/CCSLogo.png";
import tumLogo from "../img/tumLogo.png";

const StyledHeader = styled.div`
    background: rgba(255,255,255,0.9);
    height: 66px;
`;


const StyledTumLogo = styled.img`
    height: 40px;
    padding-top: 10px;
    padding-left: 10px;
    position: absolute;
    margin-top: 7px;
    margin-left: 10px;
`;

const StyledCcsLogo = styled.img`
    padding-top: 10px;
    padding-left: 10px;
    position: absolute;
    height: 55px;
    left: 50%;
    margin-left: -220px;
    margin-top: -3px;
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
                    <StyledTumLogo src={tumLogo}/>
                    <StyledCcsLogo src={CCSLogo}/>
                </Toolbar>
            </StyledHeader>
        );
    }
};


export default withRouter(Header);