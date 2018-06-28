"use strict";

import React from 'react';
import { DataTable, TableHeader, TableBody, TableRow, TableColumn} from 'react-md';
import { CourseListRow } from './CourseListRow';




export const CourseList = ({data,filter, onAdd}) => (

        <div style={styles.list} id='courseList'>
            <DataTable plain>
                <TableHeader>
                    <TableRow>
                        <TableColumn>Name</TableColumn>
                        <TableColumn>Credits</TableColumn>
                        <TableColumn>Details</TableColumn>
                        <TableColumn>Add</TableColumn>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {data.filter(function (course) {
                        return (course.titlelong.toLocaleLowerCase().includes(filter.searchTerm));
                    }).filter(function (course) {
                        return (course.credits.toString().includes(filter.searchCredits));
                    }).filter(function (course) {
                        return (course.semester.includes(filter.searchSemester));
                    }).filter(function (course) {
                        return (course.day.includes(filter.searchDay));
                    }).map((course, i) => <CourseListRow key={i} course={course} onAdd={(id) => onAdd(id)} />)}
                </TableBody>
            </DataTable>
        </div>

);

const styles = {
  list : {

  }
};
