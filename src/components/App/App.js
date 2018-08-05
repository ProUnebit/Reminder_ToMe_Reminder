import React from 'react';
import './App.scss';
import TestComponent from '../TestComponent/TestComponent';
import { helper } from '../../helper';

class App extends React.Component {

    componentDidMount() {
        console.log(helper(), 'number 1');
    }

    render () {
        return (
            <div className="app">
                <h1 className="app__title">Hello, <span>guys!</span></h1>
                <TestComponent />
            </div>
        )
    }
}

export default App;
