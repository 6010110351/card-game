import React,{Component} from 'react';
import logo from './logo.svg';
import './App.css';
import CharacterCard from './CharacterCard';
import WordCard from './WordCard';

const word = ['Hello','Supawit','Good']
var item = word[Math.floor(Math.random()*word.length)];


class App extends Component{
  

    reword = () =>
      {
        window.location.reload(false)
      }
    
  render() {
    return (
      <div className="App">
        <h1 id="title">Card Game(You can play 3 time)</h1>
        {  
          <WordCard value={item.toUpperCase()}/>     
        }
        
        <h2 id="go">Let Go !!!</h2>
        <h2 id="blink"></h2>
        <h2 id="blink1"></h2>
        <h2 id="blink2"></h2>
        <button onClick= {this.reword}> Regame </button> <br></br>  <br></br> 
        <button onClick= {this.changeword}> Change word </button> <br></br>  <br></br> 
      </div>
    );
  }
}

export default App;