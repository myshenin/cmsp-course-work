import React from 'react';
import {Paper} from "material-ui";

export default class ContentPaper extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Paper className='content-sheet' zDepth={2}>
                <div>HELLO</div>
            </Paper>
        );
    }
}