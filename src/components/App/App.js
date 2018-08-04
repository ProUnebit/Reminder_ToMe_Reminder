import React from 'react';
import './App.scss';
import TestComponent from '../TestComponent/TestComponent';

class App extends React.Component {
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
