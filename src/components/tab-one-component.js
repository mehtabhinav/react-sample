import React from 'react';

export default class TabOneComponent extends React.Component {
    constructor(props){
        super(props);
        this.state = {}
    }

    render () {
        return(
            <div className="tab-one-component">
                <p>Tab 1 Component</p>
            </div>
        );
    }
}

TabOneComponent.PropTypes = {

};