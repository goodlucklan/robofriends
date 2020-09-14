import React from 'react';

class Errorboundry extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            hasError: false
        }
    }

    componentDidCatch(error, info){
        this.setState({hasError: true})
    }

    render() {
        if (this.state.hasError) {
            return <h1>Opsss. No esta bien</h1>
        }
        return this.props.children
    }
};
export default Errorboundry