import React from 'react';
import {Paper} from "material-ui";

export default class DataBubble extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Paper className='data-bubble' circle={true} zDepth={2}>
                <div>HELLO</div>
            </Paper>
        );
    }
}