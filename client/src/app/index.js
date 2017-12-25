import React from 'react';
import {render} from 'react-dom';
import {ControlPanel} from "./conponents/ControlPanel";
import {ResultsPanel} from "./conponents/ResultsPanel";

class App extends React.Component {
    render() {
        return (
           <div className='main'>
               <ControlPanel/>
               <ResultsPanel/>
           </div>
        );
    }
}

render(<App/>, window.document.getElementById('app'));