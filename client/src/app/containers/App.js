import '../../../node_modules/normalize.css/normalize.css';
import '../../style.scss';

import React from 'react';


import injectTapEventPlugin from 'react-tap-event-plugin';
import {MuiThemeProvider} from "material-ui";

import ContentPaper from "../components/ContentPaper";
import InputsBubble from "../components/InputsBubble";
import DataBubble from "../components/DataBubble";
import {connect} from "react-redux";


import getNext from "../redux/actions/getNext";
import setIterationAmount from "../redux/actions/setIterationAmount";
injectTapEventPlugin();


class App extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <MuiThemeProvider>
                <div className="main">
                    <InputsBubble next={this.props}/>
                    <ContentPaper next={this.props}/>
                    <DataBubble next={this.props}/>
                </div>
            </MuiThemeProvider>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        next: state.next,
        iterationAmount: state.iterationAmount
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        getNext: (payload) => {
            dispatch(getNext(payload));
        },
        setIterationAmount: (payload) => {
            dispatch(setIterationAmount(payload));
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);