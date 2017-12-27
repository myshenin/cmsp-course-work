import React from 'react';
import {Paper, Toggle} from "material-ui";

export default class ContentPaper extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Paper className='content-sheet' zDepth={2}>
                <div>
                    <div className="switch">
                        <Toggle
                            label="Переключение вида"
                        />
                    </div>
                </div>
            </Paper>
        );
    }
}