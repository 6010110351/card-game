import React, { Component } from 'react';
import CharacterCard from './CharacterCard';
import _ from 'lodash';
import { thisTypeAnnotation } from '@babel/types';

const prepareStateFromWord = (given_word) => {
 let word = given_word.toUpperCase()
 let chars = _.shuffle(Array.from(word))
    return {
            word,
            chars,
            attempt: 1,
            guess: [],
            completed: false
    }
}


export default class WordCard extends
Component {

    constructor(props){
        super(props)
        this.state = prepareStateFromWord(this.props.value)
    }
    activationHandler = (c) => {
        let guess = [...this.state.guess, c.toUpperCase()]
        this.setState({guess})
        if(guess.length == this.state.chars.length){
            if(guess.join('').toString() == this.state.chars.join('').toString()){
                   this.setState({guess: [], completed: true})
                   document.getElementById('blink1').innerHTML = `Answer is ${guess.join('').toString()}`
                   document.getElementById('go').innerHTML = `You Win !!!!!!!!!!!! `
            }
            else{
                    
                    this.setState({guess: [], attempt: this.state.attempt + 1})
                    document.getElementById('blink1').innerHTML = `${guess.join('').toString()}`
                    document.getElementById('go').innerHTML = `You Lose !!!!!!!!!!!! ,Attempt: ${this.state.attempt} `
                    if(this.state.attempt == 3 ){
                        document.getElementById('blink').innerHTML = `Game Over`
                        document.getElementById('blink2').innerHTML = `Answer is ${this.state.chars.join('').toString()}`
                        setTimeout(() => window.location.reload(false),3000) 
                    }
                    
            }
            console.log("Wrong word :" + guess.join('').toString())
            console.log("Correct word :" + this.state.chars.join('').toString())
        }
    }
render() {
 return (
 <div>
        { Array.from(this.props.value).map((c, i) => <CharacterCard value={c} key={i} activationHandler={this.activationHandler} {...this.state}/>) }
 </div>
 );
 }
}
