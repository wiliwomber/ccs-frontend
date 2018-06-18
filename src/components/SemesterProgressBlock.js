"use strict";

import React from 'react';
import styled from 'styled-components';

const Semester = styled.div`
    width: 100px;
    margin: 5px;
    height: 100%;
    max-height: 50px;
    float: left;
    border: solid;
    border-width: 2px;
    border-color: grey;
`;


export class SemesterProgressBlock extends React.Component {

    constructor(props) {
        super(props);

    }



    render() {
        return(
            <div className="md-grid">
                <div className="md-cell md-cell--4 md-cell--8-tablet">
                    <Semester>
                        <table>
                            <tbody>
                                <tr>
                                    <td>
                                        <div>1</div>
                                    </td>
                                    <td>
                                        <div>28 CP</div>
                                        <div>Progres Bar</div>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </Semester>

                </div>
                <div className="md-cell md-cell--8 md-cell--8-tablet">

                </div>
            </div>

        )
    }

}






