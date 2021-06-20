import { connect } from 'react-redux';
import ScoreTable from './Score-table';

function mapStateToProps(state) {
    return {
        countValue: state.count
    };
}

function mapDispatchToProps(dispatch) {
    return {
        increaseCount: () => dispatch({ type: "increase" }),
        decreaseCount: () => dispatch({ type: "decrease" }),
        resetCount: () => dispatch({ type: "reset" }),
        addMillionToCount: () => dispatch({ type: "addMillion" })
    };
}

const connectedComponent = connect(
    mapStateToProps,
    mapDispatchToProps
 ) (ScoreTable);

export default connectedComponent;