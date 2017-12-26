import React from 'react';
import {Paper} from "material-ui";

export default class InputsBubble extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Paper className='inputs-bubble' circle={true} zDepth={2}>
                <div>HELLO</div>
            </Paper>
        );
    }
}