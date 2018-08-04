import React from 'react';
import './TestComponent.scss';

class TestComponent extends React.Component {
    render () {
        return (
            <div className="test-component">
                <p className="test-component__text">Some text...</p>
            </div>
        )
    }
}

export default TestComponent;
