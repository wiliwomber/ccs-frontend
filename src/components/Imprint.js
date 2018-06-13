"use strict";

import React from 'react';
import { withRouter } from 'react-router-dom';
import styled from 'styled-components';

class Imprint extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                    Impressum
            </div>
        );
    }
}

export default withRouter(Imprint);