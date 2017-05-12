import React, {Component} from 'react';
import './App.css';

// Components
import InitialScreen from './components/InitialScreen';
import WaitingScreen from './components/WaitingScreen';
import ChooseAdventureScreen from './components/ChooseAdventureScreen';


class App extends Component {
    constructor(props) {
        super();
        this.state = {
            nameIsEntered: false,
            name: '',
            sceneReady: false,
            sceneData: {
                text: "you wake up in a phone booth stark naked.  You dont know how you got there.  The phone starts to ring  What do you do?",
                questions: {
                    a: "run away quickly",
                    b: "answer the telephone",
                    c: "pray for a little",
                    d: "hang up on the person calling and call somebody you trust"
                }
            }
        }
    }


    render() {
        let currentView = null;
        if (!this.state.nameIsEntered && !this.state.sceneReady) {
            currentView = <InitialScreen submitName={(name) => this.submitName(name)} />
        } else if (this.state.nameIsEntered && !this.state.sceneReady) {
            currentView = <WaitingScreen name={this.state.name}/>
        } else if (this.state.nameIsEntered && this.state.sceneReady) {
            currentView = <ChooseAdventureScreen sceneData={this.state.sceneData}/>
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
        setTimeout(() => this.gameIsReady() , 100);
    }
    gameIsReady() {
        this.setState({
            sceneReady: true
        })
    }
}

export default App;
