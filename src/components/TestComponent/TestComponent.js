import React from 'react';
import './TestComponent.scss';
import testPic from '../../assets/img/27NSh.jpg';

class TestComponent extends React.Component {
    render () {
        return (
            <div className="test-component">
                <p className="test-component__text">Some text...</p>
                <img src={testPic} className="test-component__pic"/>
            </div>
        )
    }
}

export default TestComponent;
