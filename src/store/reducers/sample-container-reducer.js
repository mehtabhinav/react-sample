import * as Actions from '../actions/sample-container-action';

export default (state = {}, action) => {
    switch(action.type) {

        case Actions.SAMPLE_CONTAINER_COMPLETE:
            return {
                ...state,
                response: action.response
            };

        default:
            return state;

    }
};