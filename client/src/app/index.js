import 'normalize.css';

import React from 'react';
import {render} from 'react-dom';

import {MuiThemeProvider} from "material-ui/styles/index";
import injectTapEventPlugin from 'react-tap-event-plugin';

import {ControlPanel} from "./components/ControlPanel";
import {ResultsPanel} from "./components/ResultsPanel";

injectTapEventPlugin();

class App extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <MuiThemeProvider>
                <div className='main'>
                    <ControlPanel/>
                    <ResultsPanel/>
                </div>
            </MuiThemeProvider>
        );
    }
}

render(<App/>, window.document.getElementById('app'));