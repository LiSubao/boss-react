import React, {PropTypes} from 'react';


class IndexPage extends React.Component{
    constructor(props){
        super(props);
        this.state={
            name:"hello wumengchao"
        }
    }
    render(){
        return(
            <div>
                {this.state.name}
                {this.props.indexPage.modelName}
            </div>
        )
    }
}

export default IndexPage;