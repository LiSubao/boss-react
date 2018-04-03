import React from 'react';

class CI0101C extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "hello wumengchao"
        }
    }
    render(){
        return(
            <div>CM0101{this.props.ci0101Info.name}</div>
        )
    }
}

export default CI0101C;