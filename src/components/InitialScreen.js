import React, {Component} from 'react';

class IntialScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: ''
        }
    }

    render() {
        return (
            <div className="IntialScreen">
                <h1>Please enter your name</h1>
                    <input type="text" value={this.state.name} onChange={(e) => this.updateName(e)} />
                    <input type="submit" value="Submit" onClick={() => this.props.submitName(this.state.name)}/>
            </div>
        );
    }
    updateName(e) {
        let name = e.target.value || null;
        this.setState({
            name: name
        })
    }
}

export default IntialScreen;
