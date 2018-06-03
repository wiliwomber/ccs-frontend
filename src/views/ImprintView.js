"use strikt";

import React from 'react';
import Page from '../components/Page';
import Imprint from '../components/Imprint'


export class ImprintView extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <Page>
                <div>
                    <Imprint/>
                </div>
            </Page>
        );
    }
}
