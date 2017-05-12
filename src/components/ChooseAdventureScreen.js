import React, {Component} from 'react';

class ChooseAdventureScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            chosenAnswer: null
        }
    }

    render() {
        let {text, questions} = this.props.sceneData;

        let questionsDom = Object.keys(questions).map(letter => {
            return (
                <button key={letter}
                        onClick={(e)=> this.setChosenAnswer(letter)}>
                    {questions[letter]}
                </button>
            )
        })

        let chosenAnswer = this.state.chosenAnswer ? <h2>You have chosen {this.state.chosenAnswer}</h2> : null

        return (
            <div className="ChooseAdventureScreen">
                {chosenAnswer}
                <h3>{text}</h3>
                {questionsDom}
            </div>
        );
    }

    setChosenAnswer(letter) {
        this.setState({
            chosenAnswer: letter
        })
    }
}

export default ChooseAdventureScreen;
