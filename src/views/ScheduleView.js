"use strict";

import React from 'react';
import {
    DataTable,
    TableHeader,
    TableBody,
    TableRow,
    TableColumn,
} from 'react-md';



export class ScheduleView extends React.Component {

    constructor(props) {
        super(props);
    }



    render() {
        return(
            <div>
                <DataTable plain>
                    <TableHeader>
                        <TableRow>
                            <TableColumn>Lorem 1</TableColumn>
                            <TableColumn>Lorem 2</TableColumn>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                            <TableRow>
                                <TableColumn>hallo its me</TableColumn>
                                <TableColumn>still me here</TableColumn>
                            </TableRow>
                    </TableBody>
                </DataTable>

            </div>
        )
    }
}
