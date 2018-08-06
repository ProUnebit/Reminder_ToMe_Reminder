import React from 'react';
import './App.scss';
import TestComponent from '../TestComponent/TestComponent';
import { helper } from '../../helper';

class App extends React.Component {
    constructor(props)	{
        super(props)
        this.input = React.createRef()
    }

    componentDidMount() {
        console.log(helper(), 'number 1');
        this.input.current.focus()
    }

    render () {
        return (
            <div className="app">
                <h1 className="app__title">Reminder_ToMe_Reminder</h1>
                <form className="app__form">
                    <input
                        className="app__form-control"
                        placeholder="I have to..."
                    	defaultValue=''
                    	ref={this.input}
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
