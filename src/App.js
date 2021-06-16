import React from 'react';
import './App.css';

class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            count: 0
        }
    }

    add = () => {
        this.setState({count: this.state.count + 1})
    }
    remove = () => {
        this.setState({count: this.state.count - 1})
    }
    render() {
        return (
            <div className="app">
                <div className="app--counter">
                    {this.state.count}
                </div>
                <div className="app--control-panel">
                    <button
                        className="app--control-panel--btn"
                        onClick={this.add}>Вычесть</button>
                    <button
                        className="app--control-panel--btn"
                        onClick={this.remove}>Добавить</button>
                </div>
            </div>
        );
    }
}

export default App;
