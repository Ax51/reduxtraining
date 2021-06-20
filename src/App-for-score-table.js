import { connect } from 'react-redux';
import ScoreTable from './Score-table';

function mapStateToProps(state) {
    return {
        countValue: state.count
    };
}

const connectedComponent = connect(
    mapStateToProps
 ) (ScoreTable);

export default connectedComponent;