import React from 'react';
import {Paper, RaisedButton, TextField} from "material-ui";
import {amber300, amber50, brown500} from "material-ui/styles/colors";
import Rx from 'rxjs/Rx';

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
            margin: '6px',
            gridColumn: '1/2',
            gridRow: '4/5',
        },
        {
            margin: '6px',
            gridColumn: '2/3',
            gridRow: '4/5',
        }
    ]
};


export default class InputsBubble extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            textFields: [
                {
                    name: 'N',
                    hint: 'N',
                    value: '',
                    valid: false
                },
                {
                    name: 'p',
                    hint: 'p',
                    value: '',
                    valid: false
                },
                {
                    name: 'iterations',
                    hint: 'Итерации',
                    value: '',
                    valid: false
                }
            ]
        };
        Rx.Observable.of(this.props.next.next).subscribe(value => {
            console.log(value);
        });
    }

    onChange(event) {
        const searchElement = this.state.textFields.find(item => item.name === event.target.name);
        const textFields = [...this.state.textFields];
        textFields.splice(
            this.state.textFields.indexOf(searchElement),
            1,
            Object.assign(searchElement, {
                value: event.target.value,
                valid: event.target.value.match(/^(-?\d+\.?\d*)$/ig)
            })
        );
        this.setState({
            textFields: textFields
        });
    }

    onStart() {
        const initialPayload = {
            n: Number.parseInt(this.state.textFields[0].value),
            p: Number.parseFloat(this.state.textFields[1].value),
            iteration: 0,
        };
        this.props.next.getNext(initialPayload);
    }

    render() {
        return (
            <Paper className='inputs-bubble' circle={true} zDepth={2} style={style.paper}>
                <div>
                    {this.state.textFields.map((item, index) => <TextField
                        key={index}
                        hintText={item.hint}
                        style={style.textFields.elements[index]}
                        underlineFocusStyle={style.textFields.underlineFocusStyle}
                        hintStyle={style.textFields.hintStyle}
                        inputStyle={style.textFields.inputStyle}
                        name={item.name}
                        value={item.value}
                        onChange={this.onChange.bind(this)}
                    />)}
                    <RaisedButton
                        label="СТАРТ"
                        style={style.buttons[0]}
                        disabled={!this.state.textFields.every(item => item.valid)}
                        onClick={this.onStart.bind(this)}
                    />
                    <RaisedButton
                        label="СТОП"
                        style={style.buttons[1]}
                        disabled={!this.state.textFields.every(item => item.valid)}
                    />
                </div>
            </Paper>
        );
    }
}