"use strict";

import React from 'react';
import { DataTable, TableHeader, TableBody, TableRow, TableColumn} from 'react-md';
import { CourseListRow } from './CourseListRow';




export const CourseList = ({data, searchTerm, searchCredits, searchSemester, searchDay, height, onAdd}) => (

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
                    {data.map((course, i) => <CourseListRow key={i} course={course} onAdd={(id) => onAdd(id)} />)}
                </TableBody>
            </DataTable>
        </div>

);

const styles = {
  list : {

  }
};
