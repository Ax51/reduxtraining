import React from 'react';
import './App.css';

class Counter extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            count: 0
        }
    }

    add = () => {
        this.setState({ count: this.state.count + 1 })
    }

    remove = () => {
        this.setState({ count: this.state.count - 1 })
    }

    reset = () => {
        this.setState({ count: 0 })
    }

    render() {
        return (
            <div className="app">
                <div className="app--counter">
                    {this.props.countValue}
                </div>
                <div className="app--control-panel">
                    <button
                        className="app--control-panel--btn"
                        onClick={this.props.decreaseCount}>Вычесть</button>
                    <button
                        className="app--control-panel--btn"
                        onClick={this.props.resetCount}>Сбросить</button>
                    <button
                        className="app--control-panel--btn"
                        onClick={this.props.increaseCount}>Добавить</button>
                </div>
            </div>
        );
    }
}

export default Counter;