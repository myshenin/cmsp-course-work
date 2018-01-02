import '../../../node_modules/normalize.css/normalize.css';
import '../../style.scss';

import React from 'react';


import injectTapEventPlugin from 'react-tap-event-plugin';
import {FloatingActionButton, MuiThemeProvider} from "material-ui";

import ContentPaper from "../components/ContentPaper";
import InputsBubble from "../components/InputsBubble";
import DataBubble from "../components/DataBubble";
import {connect} from "react-redux";


import getNext from "../redux/actions/getNext";
import setIterationAmount from "../redux/actions/setIterationAmount";
import {FileFileDownload, FileFileUpload} from "material-ui/svg-icons/index";
import {blueGrey500, brown500} from "material-ui/styles/colors";

injectTapEventPlugin();

const styles = {
    download: {
        backgroundColor: brown500
    },
    upload: {
        backgroundColor: blueGrey500
    }
};

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
                    <div className="download">
                        <FloatingActionButton backgroundColor={styles.download.backgroundColor}>
                            <FileFileDownload/>
                        </FloatingActionButton>
                    </div>
                    <div className="upload">
                        <FloatingActionButton backgroundColor={styles.upload.backgroundColor}>
                            <FileFileUpload/>
                        </FloatingActionButton>
                    </div>
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