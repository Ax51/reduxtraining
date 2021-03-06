import React from 'react';
import './Counter.css';
import { NavLink } from 'react-router-dom'

class Counter extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            count: 0  /* needed only for no-redux functionality */
        }
    }

    // No-redux functionality:
    // 
    // add = () => {
    //     this.setState({ count: this.state.count + 1 })
    // }
    // 
    // remove = () => {
    //     this.setState({ count: this.state.count - 1 })
    // }
    // 
    // reset = () => {
    //     this.setState({ count: 0 })
    // }

    render() {
        return (
            <div className="app">
                <div className="app--nav-bar-2">
                    <NavLink to='/' className='nav-bar--button'>First page</NavLink>
                    <NavLink to='/secondpage' className='nav-bar--button'>second page</NavLink>
                </div>
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
                <div className="app--control-panel">
                    <button
                        className="app--control-panel--btn"
                        onClick={this.props.addMillionToCount}>Добавить 1 000 000</button>
                </div>
            </div>
        );
    }
}

export default Counter;