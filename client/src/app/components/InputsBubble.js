import React from 'react';
import {Paper} from "material-ui";
import {brown500} from "material-ui/styles/colors";

const style = {
    backgroundColor: brown500
};

export default class InputsBubble extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Paper className='inputs-bubble' circle={true} zDepth={2} style={style}>
                <div>HELLO</div>
            </Paper>
        );
    }
}