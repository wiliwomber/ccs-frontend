"use strict";

import React from 'react';
import { DataTable, TableHeader, TableBody, TableRow, TableColumn} from 'react-md';
import { CourseListRow } from './CourseListRow';
import Page from './Page'




export const CourseList = ({data, searchTerm, height, onAdd}) => (
    <div>
        <div style={styles.list} id='courseList'>
            <DataTable plain>
                <TableHeader>
                    <TableRow>
                        <TableColumn>Name</TableColumn>
                        <TableColumn>Details</TableColumn>
                        <TableColumn>Add</TableColumn>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {data.filter(function (course) {
                        return (course.title.toLocaleLowerCase().includes(searchTerm));
                    }).map((course, i) => <CourseListRow key={i} course={course} onAdd={(id) => onAdd(id)} />)}
                </TableBody>
            </DataTable>
        </div>
    </div>

);

const styles = {
  list : {

  }
};