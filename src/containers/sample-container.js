//Libraries
import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router';

//Redux
import * as sampleContainerActions from '../store/actions/sample-container-action';

export class SampleContainer extends React.Component {

    constructor(props) {
        super(props);
        this.state = {};
    }

    onTabOneClick() {
        this.props.getSampleContainerResponse('123');
    }

    onTabTwoClick() {
        debugger;
    }

    render() {
        return (
            <div className="sample-container">
                <button><Link to="/tabOne">Tab 1</Link></button>
                <button onClick={this.onTabTwoClick.bind(this)}>Tab 2</button>
                {
                    this.props.children && React.cloneElement(this.props.children, {...this.props})
                }
            </div>
        )
    }
}

SampleContainer.propTypes = {
    getSampleContainerResponse: React.PropTypes.func
};

export default connect (
    state => ({
        response: state.sampleContainerReducer.response
    }),
    dispatch => bindActionCreators(Object.assign({}, sampleContainerActions), dispatch)
)(SampleContainer);