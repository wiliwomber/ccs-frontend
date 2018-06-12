"use strict";

import React from 'react';
import { DataTable, TableHeader, TableBody, TableRow, TableColumn, Button, TextField, SelectField } from 'react-md';

import { MovieListRow } from './MovieListRow';
import Page from './Page'

const NUMBER_ITEMS = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
const STRING_ITEMS = ['Zero', 'One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine', 'Ten'];
const OBJECT_ITEMS = [{
    label: 'Apples',
    value: 'A',
}, {
    label: 'Bananas',
    value: 'B',
}, {
    label: 'Cherries',
    value: 'C',
}, {
    label: 'Durian',
    value: 'D',
}, {
    label: 'Elderberry',
    value: 'E',
}];

export const MovieList = ({data, onDelete}) => (
    <Page>
        <div className="md-grid">
            <h4 className="md-cell md-cell--12">Normal SelectFields</h4>
            <SelectField
                id="select-field-1"
                label="Numbers"
                placeholder="Placeholder"
                className="md-cell"
                menuItems={NUMBER_ITEMS}
            />
            <SelectField
                id="select-field-2"
                label="Objects"
                placeholder="Placeholder"
                className="md-cell"
                menuItems={OBJECT_ITEMS}
            />
            <SelectField
                id="select-field-2"
                label="Strings"
                placeholder="Placeholder"
                className="md-cell"
                menuItems={STRING_ITEMS}
            />
            <SelectField
                id="select-field-2"
                label="Strings"
                placeholder="Placeholder"
                className="md-cell"
                menuItems={STRING_ITEMS}
            />
            <SelectField
                id="select-field-2"
                label="Strings"
                placeholder="Placeholder"
                className="md-cell"
                menuItems={STRING_ITEMS}
            />
            <SelectField
                id="select-field-2"
                label="Strings"
                placeholder="Placeholder"
                className="md-cell"
                menuItems={STRING_ITEMS}
            />
            <SelectField
                id="select-field-2"
                label="Strings"
                placeholder="Placeholder"
                className="md-cell"
                menuItems={STRING_ITEMS}
            />
        </div>

        <DataTable plain>
            <TableHeader>
                <TableRow>
                    <TableColumn></TableColumn>
                    <TableColumn>Name</TableColumn>
                    <TableColumn>Edit</TableColumn>
                    <TableColumn>Remove</TableColumn>
                </TableRow>
            </TableHeader>
            <TableBody>
                {data.map((movie, i) => <MovieListRow key={i} movie={movie} onDelete={(id) => onDelete(id)} />)}
            </TableBody>
        </DataTable>
    </Page>
);

