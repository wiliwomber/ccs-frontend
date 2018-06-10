"use strict";

import React from 'react';
import { DataTable, TableHeader, TableBody, TableRow, TableColumn, Button } from 'react-md';

import { CourseListRow } from './CourseListRow';



export const CourseList = ({data, onAdd}) => (
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

);

