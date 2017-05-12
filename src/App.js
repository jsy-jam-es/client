import React, {Component} from 'react';
import './App.css';

// Components
import InitialScreen from './components/InitialScreen';
import WaitingScreen from './components/WaitingScreen';


class App extends Component {
    constructor(props) {
        super();
        this.state = {
            nameIsEntered: false,
            name: '',
            gameReady: false
        }
    }


    render() {
        let currentView = null;
        if (!this.state.nameIsEntered && !this.state.gameReady) {
            currentView = <InitialScreen submitName={(name) => this.submitName(name)} />
        } else if (this.state.nameIsEntered && !this.state.gameReady) {
            currentView = <WaitingScreen name={this.state.name}/>
        }


        return (
            <div className="App">
                {currentView}
            </div>
        );
    }

    submitName(name) {
        this.setState({
            nameIsEntered: true,
            name: name
        })
        setTimeout(() => this.gameIsReady() , 3000);
    }
    gameIsReady() {
        this.setState({
            gameReady: true
        })
    }
}

export default App;
