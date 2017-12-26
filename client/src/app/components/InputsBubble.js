import React from 'react';
import {Paper, RaisedButton, TextField} from "material-ui";
import {amber300, amber50, brown500} from "material-ui/styles/colors";

const style = {
    paper: {
        backgroundColor: brown500
    },
    textFields: {
        elements: [
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
        underlineFocusStyle: {
            borderColor: amber300
        },
        hintStyle: {
            color: amber50
        },
        inputStyle: {
            color: amber50
        }
    }

    ,
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
                        style={style.textFields.elements[0]}
                        underlineFocusStyle={style.textFields.underlineFocusStyle}
                        hintStyle={style.textFields.hintStyle}
                        inputStyle={style.textFields.inputStyle}
                        name='N'
                    />
                    <TextField
                        hintText="p"
                        style={style.textFields.elements[1]}
                        underlineFocusStyle={style.textFields.underlineFocusStyle}
                        hintStyle={style.textFields.hintStyle}
                        inputStyle={style.textFields.inputStyle}
                        name='p'
                    />
                    <TextField
                        hintText='Итерации'
                        style={style.textFields.elements[2]}
                        underlineFocusStyle={style.textFields.underlineFocusStyle}
                        hintStyle={style.textFields.hintStyle}
                        inputStyle={style.textFields.inputStyle}
                        name='iterations'
                    />
                    <RaisedButton label="СТАРТ" style={style.buttons[0]}/>
                    <RaisedButton label="СТОП" style={style.buttons[1]}/>
                </div>
            </Paper>
        );
    }
}