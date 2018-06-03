"use strict";

import React from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';
import {SimpleLink} from "./SimpleLink";
import { withRouter } from 'react-router-dom';


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
                <hr/>
                <ul>
                    <li><p>© {new Date().getFullYear()} CampusCourseScheduler All rights reserved.</p></li>
                    <li><Link to={`/imprint`}>Impressum</Link> </li>
                </ul>
            </div>
        );
    }
}


export const Footer = styled(PlainFooter)`
    max-height: 35px;
    bottom: 50;
    left: 0;
    right: 0;
    position: relative;
    background: #ffffff;
    p {
        text-align: left;
        margin-top: 10px;
    }
    ul {
       list-style-type: none;
       margin: 0;
       padding 0;
    }
    li [
     display: block;
    }
`;