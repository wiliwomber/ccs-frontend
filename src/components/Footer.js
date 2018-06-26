"use strict";

import React from 'react';
import Styled from 'styled-components';
import {Link} from 'react-router-dom';
import {SimpleLink} from "./SimpleLink";
import { withRouter } from 'react-router-dom';
import {Button} from 'react-md';
import UserService from "../services/UserService";


const StyleFooter = Styled.div`
    list-style-type: none;
    margin: 0;
    background-color: grey;
    padding: 0;
`;

class PlainFooter extends React.Component {

    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className={this.props.className}>
                <StyleFooter>
                    <table>
                        <tbody>
                        <tr>
                            <td>© {new Date().getFullYear()} CampusCourseScheduler All rights reserved.</td>
                            <td><Button onClick={""} icon>Test</Button></td>

                            <td>Datenschutz</td>

                            <td>AGB</td>
                            <td>Kontakt</td>
                        </tr>
                        </tbody>

                    </table>
                </StyleFooter>
            </div>
        );
    }
}

export default withRouter(PlainFooter);
