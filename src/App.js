import React,{Component} from 'react';
import logo from './logo.svg';
import './App.css';
import CharacterCard from './CharacterCard';
import WordCard from './WordCard';

const word = ['Hello','Supawit']
var item = word[Math.floor(Math.random()*word.length)];

class App extends Component{
  render() {
    return (
      <div className="App">
        {  
          <WordCard value={item.toUpperCase()}/>     
        }
        
        <h2 id="nod">Let Go !!!</h2>
      </div>
    );
  }
}

export default App;