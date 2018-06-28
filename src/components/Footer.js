"use strict";

import React from 'react';
import Styled from 'styled-components';
import {Link} from 'react-router-dom';
import {SimpleLink} from "./SimpleLink";
import { withRouter } from 'react-router-dom';
import {Button, Card} from 'react-md';
import UserService from "../services/UserService";


const StyleFooter = Styled.div`
    list-style-type: none;
    margin-top: 0;
    background-color: rgba(245,245,245,0.9);
    padding: 20px;
    height: 100%;
    display: flex;
`;

class PlainFooter extends React.Component {

    constructor(props) {
        super(props);
    }
    render() {
        return (
                <StyleFooter>
                    <table>
                        <tbody>
                        <tr>
                            <td>© {new Date().getFullYear()} CampusCourseScheduler All rights reserved.</td>
                            <td>Datenschutz</td>
                            <td>AGB</td>
                            <td>Kontakt</td>
                        </tr>
                        </tbody>
                    </table>
                </StyleFooter>
        );
    }
}

export default withRouter(PlainFooter);
