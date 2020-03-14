import React, { Component } from "react";
import listOfWords from '../listOfWords';

class DisplayScrambledWord extends Component {

     state = {
        scrambledWord: "",
       };

    async componentDidMount() {

        this.loadWord();

    }

    loadWord = () => {

        var i = listOfWords.words.length;
        var j = Math.floor(Math.random() * (i + 1));

        let newScrambledWord = listOfWords.scrambleWord(listOfWords.words[j]);

        this.setState({
            scrambledWord: newScrambledWord
        })
    }

    // handleInputChange = event => {

    // }

    handleFormSubmit = event => {
        event.preventDefault();
    }

    render() {
       
        return (
            <div>
            {console.log(this.state.scrambledWord)}
                <span id="scrambledWord">
                    {this.state.scrambledWord}
                </span>
            </div>
        ) //return
    } //render
}

export default DisplayScrambledWord