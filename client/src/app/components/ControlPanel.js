import React from 'react';
import {render} from 'react-dom';
import {
    LinearProgress, RaisedButton, Table, TableBody, TableHeader, TableHeaderColumn, TableRow,
    TextField
} from "material-ui";
import {amber600, amber50, amber900} from "material-ui/styles/colors";

const styles = {
    underlineFocusStyle: {
        borderColor: amber600,
    },
    floatingLabelStyle: {
        color: amber50,
        fontSize: '30px',
        fontWeight: 'bold'
    },
    underlineStyle: {
        borderColor: amber50,
    },
    inputStyle: {
        color: amber900,
        fontSize: '25px',
        fontWeight: 'bold'
    }
};

export class ControlPanel extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className='control-panel'>
                <div className='control-panel-text n'>
                    <TextField
                        floatingLabelText="N"
                        floatingLabelStyle={styles.floatingLabelStyle}
                        underlineFocusStyle={styles.underlineFocusStyle}
                        underlineStyle={styles.underlineStyle}
                        inputStyle={styles.inputStyle}
                    />
                </div>
                <div className='control-panel-text p'>
                    <TextField
                        floatingLabelText="p"
                        floatingLabelStyle={styles.floatingLabelStyle}
                        underlineFocusStyle={styles.underlineFocusStyle}
                        underlineStyle={styles.underlineStyle}
                        inputStyle={styles.inputStyle}
                    />
                </div>
                <div className='control-panel-text iterations'>
                    <TextField
                        floatingLabelText="Итерации"
                        floatingLabelStyle={styles.floatingLabelStyle}
                        underlineFocusStyle={styles.underlineFocusStyle}
                        underlineStyle={styles.underlineStyle}
                        inputStyle={styles.inputStyle}
                    />
                </div>
                <div className="start">
                    <RaisedButton label="СТАРТ"/>
                </div>
                <div className="stop">
                    <RaisedButton label="СТОП"/>
                </div>
                <div className="data">
                    <Table>
                        <TableHeader
                            displaySelectAll={false}
                            adjustForCheckbox={false}
                        >
                            <TableRow>
                                <TableHeaderColumn>Величина</TableHeaderColumn>
                                <TableHeaderColumn>Значение</TableHeaderColumn>
                            </TableRow>
                        </TableHeader>
                        <TableBody
                            displayRowCheckbox={false}
                            adjustForCheckbox={false}
                        ></TableBody>
                    </Table>
                </div>
                <div className="progress">
                    <LinearProgress
                        mode="determinate"
                        value={55}
                        color={amber900}
                    />
                </div>
            </div>
        );
    }
}