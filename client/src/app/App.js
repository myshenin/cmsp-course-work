import 'normalize.css';

import React from 'react';
import {render} from 'react-dom';

class App extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>HELLO</div>
        );
    }
}

render(<App/>, window.document.getElementById('app'));