"use strict";

import React from 'react';
import Styled from 'styled-components';
import {Link} from 'react-router-dom';
import {SimpleLink} from "./SimpleLink";
import { withRouter } from 'react-router-dom';
import {Button} from 'react-md';
import {ImprintView} from "../views/ImprintView";
import Route from 'react-router-dom';

const StyleFooter = Styled.div`
    list-style-type: none;
    margin: 0;
    background-color: white;
    padding: 0;
`;

// const VertList = styled.ul`
//     list-style-type: none;
//     margin: 0;
//     padding: 0;
// `;
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
                            <td><Link to="/imprint">Impressum</Link></td>
                            <td>Datenschutz</td>
                            <td>AGB</td>
                            <td> <Route path='/imprint' component={ImprintView}/></td>

                        </tr>
                        </tbody>

                    </table>
                </StyleFooter>
            </div>
        );
    }
}

export default withRouter(PlainFooter);
