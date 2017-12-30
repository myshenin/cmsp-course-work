import React from 'react';
import {Paper, Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn, Toggle} from "material-ui";
import {Bar, BarChart, CartesianGrid, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis} from "recharts";
import {blueGrey300, blueGrey600, brown300, brown600} from "material-ui/styles/colors";

const style = {
    thumbOff: {
        backgroundColor: brown600,
    },
    trackOff: {
        backgroundColor: brown300,
    },
    thumbSwitched: {
        backgroundColor: blueGrey600,
    },
    trackSwitched: {
        backgroundColor: blueGrey300,
    }
};

export default class ContentPaper extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            show: 'graph'
        }
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.next.next.data) {
            const data = nextProps.next.next.data.analitic
                .map(item => {
                    return {
                        name: item.value,
                        inverseTransformSampling: nextProps.next.next.data.inverseTransformSampling
                            .filter(_item => _item.value === item.value)
                            .reduce((accumulator, current) => accumulator + current.amount, 0) / nextProps.next.next.data.inverseTransformSampling
                            .reduce((accumulator, current) => accumulator + current.amount, 0),
                        metropolisMethod: nextProps.next.next.data.metropolisMethod
                            .filter(_item => _item.value === item.value)
                            .reduce((accumulator, current) => accumulator + current.amount, 0) / nextProps.next.next.data.metropolisMethod
                            .reduce((accumulator, current) => accumulator + current.amount, 0),
                        neumannMethod: nextProps.next.next.data.neumannMethod
                            .filter(_item => _item.value === item.value)
                            .reduce((accumulator, current) => accumulator + current.amount, 0) / nextProps.next.next.data.neumannMethod
                            .reduce((accumulator, current) => accumulator + current.amount, 0),
                        analitic: item.p
                    }
                });

            this.setState({data});
        }
    }

    onToggle(event, isInputChecked) {
        this.setState({
            show: !isInputChecked ? 'graph' : 'table'
        });
    }

    constructTable(data) {
        if (data) {
            return this.state.data.map(item => {
                return (
                    <TableRow key={item.name}>
                        <TableRowColumn>{item.name}</TableRowColumn>
                        <TableRowColumn>{item.analitic}</TableRowColumn>
                        <TableRowColumn>{item.inverseTransformSampling}</TableRowColumn>
                        <TableRowColumn>{item.metropolisMethod}</TableRowColumn>
                        <TableRowColumn>{item.neumannMethod}</TableRowColumn>
                    </TableRow>
                )
            });
        } else {
            return '';
        }
    }

    render() {
        return (
            <Paper className='content-sheet' zDepth={2}>
                <div>
                    <div className="switch">
                        <Toggle
                            label="Переключение вида"
                            thumbStyle={style.thumbOff}
                            trackStyle={style.trackOff}
                            thumbSwitchedStyle={style.thumbSwitched}
                            trackSwitchedStyle={style.trackSwitched}
                            onToggle={this.onToggle.bind(this)}
                        />
                    </div>
                    {this.state.show === 'graph' ?
                        <div className="chart">
                            <ResponsiveContainer height='90%'>
                                <BarChart data={this.state.data}>
                                    <XAxis dataKey="name"/>
                                    <YAxis/>
                                    <CartesianGrid strokeDasharray="3 3"/>
                                    <Tooltip/>
                                    <Legend/>
                                    <Bar dataKey="inverseTransformSampling" fill="#6C756B" name='Обратная функция'/>
                                    <Bar dataKey="metropolisMethod" fill="#93ACB5" name='Метод Метрополиса'/>
                                    <Bar dataKey="neumannMethod" fill="#96C5F7" name='Метод Неймана'/>
                                    <Bar dataKey="analitic" fill="#A9D3FF" name='Аналитический метод'/>
                                </BarChart>
                            </ResponsiveContainer>
                        </div> :
                        <div className='table'>
                            <Table>
                                <TableHeader
                                    displaySelectAll={false}
                                    adjustForCheckbox={false}
                                >
                                    <TableRow>
                                        <TableHeaderColumn>Величина</TableHeaderColumn>
                                        <TableHeaderColumn>Аналитический</TableHeaderColumn>
                                        <TableHeaderColumn>Обр. функц.</TableHeaderColumn>
                                        <TableHeaderColumn>м. Метрополиса</TableHeaderColumn>
                                        <TableHeaderColumn>м. Неймана</TableHeaderColumn>
                                    </TableRow>
                                </TableHeader>
                                <TableBody
                                    displayRowCheckbox={false}
                                >
                                    {this.constructTable(this.props.next.next)}
                                </TableBody>
                            </Table>
                        </div>}
                </div>
            </Paper>
        );
    }
}