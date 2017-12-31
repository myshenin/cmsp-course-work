import React from 'react';
import {LinearProgress, Paper} from "material-ui";
import {amber300, blueGrey500} from "material-ui/styles/colors";
import {Carousel} from "react-responsive-carousel";

const style = {
    backgroundColor: blueGrey500
};

export default class DataBubble extends React.Component {
    constructor(props) {
        super(props);
    }

    getSlides() {
        return (<Carousel showThumbs={false} showStatus={false}>
            <div className="value">
                <div className="method">Аналитический метод</div>
                <div className="m">M = {Math.round(this.props.next.next.values.analitic.M * 100) / 100}</div>
                <div className="d">D = {Math.round(this.props.next.next.values.analitic.D * 100) / 100}</div>
            </div>
            <div className="value">
                <div className="method">Метод обратных функций</div>
                <div className="m">M = {Math.round(this.props.next.next.values.inverseTransformSampling.M * 100) / 100}</div>
                <div className="d">D = {Math.round(this.props.next.next.values.inverseTransformSampling.D * 100) / 100}</div>
            </div>
            <div className="value">
                <div className="method">Метод метрополиса</div>
                <div className="m">M = {Math.round(this.props.next.next.values.metropolisMethod.M * 100) / 100}</div>
                <div className="d">D = {Math.round(this.props.next.next.values.metropolisMethod.D * 100) / 100}</div>
            </div>
            <div className="value">
                <div className="method">Метод Неймана</div>
                <div className="m">M = {Math.round(this.props.next.next.values.neumannMethod.M * 100) / 100}</div>
                <div className="d">D = {Math.round(this.props.next.next.values.neumannMethod.D * 100) / 100}</div>
            </div>
        </Carousel>);
    }

    render() {
        return (
            <Paper className='data-bubble' circle={true} zDepth={2} style={style}>
                <div>
                    <div className="value-slider">
                        {Object.keys(this.props.next.next).length !== 0 ? this.getSlides() : ''}
                    </div>
                    <LinearProgress mode="determinate"
                                    value={this.props.next.next.iteration}
                                    max={this.props.next.iterationAmount}
                                    color={amber300}
                    />
                </div>
            </Paper>
        );
    }
}