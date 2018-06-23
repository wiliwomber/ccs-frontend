"use strict";

import React from 'react';
import { DataTable, TableHeader, TableBody, TableRow, TableColumn, TextField, FontIcon } from 'react-md';

import Filter from './Filter'

import { CourseListRow } from './CourseListRow';




export const CourseList = ({data, onAdd}) => (
    <div>
    <div><Filter/> </div>
    <div>
        <TextField
            id="search_field"
            label="Type your Search here"
            placeholder="Search for ..."
            maxLength={20}
            className="md-cell md-cell--right"
            leftIcon={<FontIcon>search</FontIcon>}
        />
    </div>
    <DataTable plain>
            <TableHeader>
                <TableRow>
                    <TableColumn>Name</TableColumn>
                    <TableColumn>Details</TableColumn>
                    <TableColumn>Add</TableColumn>
                </TableRow>
            </TableHeader>
            <TableBody>
                {data.map((course, i) => <CourseListRow key={i} course={course} onAdd={(id) => onAdd(id)} />)}
            </TableBody>
        </DataTable>
    </div>

);

