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
                <h1 className="app__title">Reminder_ToMe_Reminder</h1>
                <form className="app__form">
                    <input
                        className="app__form-control"
                        placeholder="I have to..."
                        />
                    <button
                        className="app__form-button"
                        >Add Reminder
                    </button>
                </form>
            </div>
        )
    }
}

export default App;
