"use strict";

import React, { PureComponent } from 'react';
import { DataTable, TableHeader, TableBody, TableRow, TableColumn, Button, FontIcon, SVGIcon, DialogContainer, Slider, TextField, SelectField } from 'react-md';

const NUMBER_ITEMS = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const STRING_ITEMS = ['Bachelor', 'Master', 'Staatsexamen'];
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



export default class Filter extends PureComponent {
    state = { visible: false };

    show = () => {
        this.setState({ visible: true });
    };

    hide = () => {
        this.setState({ visible: false });
    };

    render() {
        const { visible } = this.state;

        return (
            <div>
                <Button raised secondary onClick={this.show}>
                    Set Filters
                </Button>
                <DialogContainer
                    id="course-list-filter"
                    visible={visible}
                    onHide={this.hide}
                    title="Filters"
                >
                    <SelectField
                        id="select-field-1"
                        label="Degree"
                        placeholder="Bachelor"
                        className="md-cell"
                        menuItems={STRING_ITEMS}
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
                        label="Objects"
                        placeholder="Placeholder"
                        className="md-cell"
                        menuItems={OBJECT_ITEMS}
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
                        label="Objects"
                        placeholder="Placeholder"
                        className="md-cell"
                        menuItems={OBJECT_ITEMS}
                    />
                    <SelectField
                        id="select-field-2"
                        label="Objects"
                        placeholder="Placeholder"
                        className="md-cell"
                        menuItems={OBJECT_ITEMS}
                    />
                    <Slider
                        id="semester_slider"
                        label="Semester"
                        leftIcon={<FontIcon>favorite</FontIcon>}
                        defaultValue={5}
                        max={10}
                        discrete
                    />

                </DialogContainer>
            </div>

        );
    }
}