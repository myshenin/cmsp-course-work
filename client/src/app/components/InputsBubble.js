import React from 'react';
import {Paper, RaisedButton, TextField} from "material-ui";
import {brown500} from "material-ui/styles/colors";

const style = {
    paper: {
        backgroundColor: brown500
    },
    textFields: [
        {
            gridColumn: '1/3',
            gridRow: '1/2',
            width: '100%'
        },
        {
            gridColumn: '1/3',
            gridRow: '2/3',
            width: '100%'
        },
        {
            gridColumn: '1/3',
            gridRow: '3/4',
            width: '100%'
        }
    ],
    buttons: [
        {
            margin: '5px',
            gridColumn: '1/2',
            gridRow: '4/5',
        },
        {
            margin: '5px',
            gridColumn: '2/3',
            gridRow: '4/5',
        }
    ]
};

export default class InputsBubble extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Paper className='inputs-bubble' circle={true} zDepth={2} style={style.paper}>
                <div>
                    <TextField
                        hintText="N"
                        style={style.textFields[0]}
                        name='N'
                    />
                    <TextField
                        hintText="p"
                        style={style.textFields[1]}
                        name='p'
                    />
                    <TextField
                        hintText='Итерации'
                        style={style.textFields[2]}
                        name='iterations'
                    />
                    <RaisedButton label="СТАРТ" style={style.buttons[0]} />
                    <RaisedButton label="СТОП" style={style.buttons[1]} />
                </div>
            </Paper>
        );
    }
}