import { connect } from 'react-redux';
import Counter from './Counter';

function mapStateToProps(state) {
    return {
        countValue: state.count
    };
}

const increaseAction = { type: "increase" };
const decreaseAction = { type: "decrease" };
const resetAction = { type: "reset" };

function mapDispatchToProps(dispatch) {
    return {
        increaseCount: () => dispatch(increaseAction),
        decreaseCount: () => dispatch(decreaseAction),
        resetCount: () => dispatch(resetAction)
    };
}

const connectedComponent = connect(
    mapStateToProps,
    mapDispatchToProps
) (Counter);

export default connectedComponent;