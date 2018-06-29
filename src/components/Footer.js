"use strict";

import React from 'react';
import Styled from 'styled-components';
import { withRouter } from 'react-router-dom';


const StyleFooter = Styled.div`
    list-style-type: none;
    background-color: rgba(245,245,245,0.9);
    height: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0px 300px;
    position:absolute;
    bottom:0;
    overflow:auto;
    width: 100%;
`;
const FooterElement = Styled.div`  
    padding-left: 20px;
    padding-right: 20px;
    line-height: 34px;
    display: inline;
    margin: 0 auto;
`;



class PlainFooter extends React.Component {

    constructor(props) {
        super(props);
    }
    render() {
        return (
                <StyleFooter>
                            <FooterElement>© {new Date().getFullYear()} CampusCourseScheduler All rights reserved.</FooterElement>
                            <FooterElement>Datenschutz</FooterElement>
                            <FooterElement>AGB</FooterElement>
                            <FooterElement>Kontakt</FooterElement>
                </StyleFooter>
        );
    }
}

export default withRouter(PlainFooter);
