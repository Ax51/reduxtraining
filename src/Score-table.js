import React from 'react';
import './Counter.css';
import { NavLink } from 'react-router-dom';

class ScoreTable extends React.Component {
    render () {
    return (
        <div className="app-2">
            <div className="app--nav-bar-2">
                <NavLink to ='/' className='nav-bar--button'>First page</NavLink>
                <NavLink to ='/secondpage' className='nav-bar--button'>second page</NavLink>
            </div>
            <div className="app--counter">
                {this.props.countValue}
            </div>
        </div>
    )
}
}

export default ScoreTable;