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
import uploadNext from "../redux/actions/uploadNext";

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

    downloadObjectAsJson(exportObj, exportName) {
        const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(exportObj));
        const downloadAnchorNode = document.createElement('a');
        downloadAnchorNode.setAttribute("href", dataStr);
        downloadAnchorNode.setAttribute("download", exportName + ".json");
        downloadAnchorNode.click();
        downloadAnchorNode.remove();
    };

    openFileUploadDialog() {
        document.getElementById('file').click();
    }

    fileUpload(event) {
        const reader = new FileReader();
        reader.readAsText(event.target.files[0], 'UTF-8');
        reader.onload = (e) => {
            this.props.uploadNext(JSON.parse(e.target.result));
        };
    }

    render() {
        return (
            <MuiThemeProvider>
                <div className="main">
                    <InputsBubble next={this.props}/>
                    <ContentPaper next={this.props}/>
                    <DataBubble next={this.props}/>
                    <div className="download"
                         onClick={this.downloadObjectAsJson.bind(this, this.props.next, 'data' + (new Date()).getTime())}>
                        <FloatingActionButton
                            backgroundColor={styles.download.backgroundColor}
                            disabled={Object.keys(this.props.next).length === 0}
                        >
                            <FileFileDownload/>
                        </FloatingActionButton>
                    </div>
                    <div className="upload">
                        <FloatingActionButton
                            backgroundColor={styles.upload.backgroundColor}
                            onClick={this.openFileUploadDialog.bind(this)}
                        >
                            <FileFileUpload/>
                        </FloatingActionButton>
                        <input
                            type='file'
                            id='file'
                            style={{display: 'none'}}
                            onChange={this.fileUpload.bind(this)}
                        />
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
        },
        uploadNext: (payload) => {
            dispatch(uploadNext(payload))
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);