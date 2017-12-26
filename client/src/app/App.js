import 'normalize.css';
import '../style.scss';

import React from 'react';
import {render} from 'react-dom';

import injectTapEventPlugin from 'react-tap-event-plugin';
import {MuiThemeProvider} from "material-ui";

import ContentPaper from "./components/ContentPaper";

injectTapEventPlugin();

class App extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <MuiThemeProvider>
                <div className="main">
                    <ContentPaper/>
                </div>
            </MuiThemeProvider>
        );
    }
}

render(<App/>, window.document.getElementById('app'));