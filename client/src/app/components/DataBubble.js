import React from 'react';
import {Paper} from "material-ui";
import {blueGrey500} from "material-ui/styles/colors";

const style = {
    backgroundColor: blueGrey500
};

export default class DataBubble extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Paper className='data-bubble' circle={true} zDepth={2} style={style}>
                <div>HELLO</div>
            </Paper>
        );
    }
}