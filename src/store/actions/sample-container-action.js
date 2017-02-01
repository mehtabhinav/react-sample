// Action Types
export const SAMPLE_CONTAINER_START = 'SAMPLE_CONTAINER_START';
export const SAMPLE_CONTAINER_COMPLETE = 'SAMPLE_CONTAINER_COMPLETE';
export const SAMPLE_CONTAINER_FAILURE = 'SAMPLE_CONTAINER_FAILURE';

export function getSampleContainerResponse(id) {
    return dispatch => {
        const response = {name: 'abhinav mehta'};
        dispatch({type: SAMPLE_CONTAINER_START});
        dispatch({type: SAMPLE_CONTAINER_COMPLETE, response});
    };
}