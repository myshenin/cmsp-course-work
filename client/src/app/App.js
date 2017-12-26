import 'normalize.css';
import '../style.scss';

import React from 'react';
import {render} from 'react-dom';

import injectTapEventPlugin from 'react-tap-event-plugin';
import {MuiThemeProvider} from "material-ui";

import ContentPaper from "./components/ContentPaper";
import InputsBubble from "./components/InputsBubble";

injectTapEventPlugin();

class App extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <MuiThemeProvider>
                <div className="main">
                    <InputsBubble/>
                    <ContentPaper/>
                </div>
            </MuiThemeProvider>
        );
    }
}

render(<App/>, window.document.getElementById('app'));