import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';




import "./App.css";

import Counter from "./counter.js";




class App extends Component {

    render() {
        return (
            <div className="App">
              
              
                <Counter></Counter>
            </div>
        );
    }
}

export default App;
