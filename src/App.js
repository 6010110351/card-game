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
        {  
          <WordCard value={item.toUpperCase()}/>     
        }
        
        <h2 id="go">Let Go !!!</h2>
        <h2 id="blink"></h2>
        <button onClick= {this.reword}> Regame </button> <br></br>  <br></br> 

      </div>
    );
  }
}

export default App;