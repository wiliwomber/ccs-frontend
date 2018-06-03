"use strict";

import React from 'react';
import Styled from 'styled-components';
import {Link} from 'react-router-dom';
import {SimpleLink} from "./SimpleLink";

const VertList = Styled.ul`
    list-style-type: none;
    margin: 0;
    padding: 0;
`;

class PlainFooter extends React.Component {

    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className={this.props.className}>
                <ul>
                    <li><p>© {new Date().getFullYear()} CampusCourseScheduler All rights reserved.</p></li>
                    <li><SimpleLink to="./views/ImprintView">Impressum</SimpleLink></li>
                    <li>Datenschutz</li>
                    <li>AGB</li>
                    <li>Kontakt</li>
                </ul>
            </div>
        );
    }
}


export const Footer = Styled(PlainFooter)`
    max-height: 35px;
    bottom: 0;
    left: 0;
    right: 0;
    position: fixed;
    > p {
        text-align: center;
        margin-top: 4px;
        margin-bottom: 4px;
    }
    ul {
       list-style-type: none;
       color: red
    }
`;