import React,{Component} from 'react';
import logo from './logo.svg';
import './App.css';
import CharacterCard from './CharacterCard';
import WordCard from './WordCard';

const word = ['Hello','Heart','Korea','Money','Japan']
var item = word[Math.floor(Math.random()*word.length)];


class App extends Component{

     constructor()
     {
      super();
      this.state = {requestAnswer : false} 
     }


    reword = () =>
      {
        window.location.reload(false)
      }
    close = () =>
      {
        window.close()
      }
      request = () =>
      {
        this.setState({requestAnswer: true})
      }
    getAnswer = (answer) =>
      {
          document.getElementById('blink2').innerHTML = `Answer is ${answer}`
      }  
    
  render() {
    return (
      <div className="App">
        <h1 id="title">Card Game(You can play 3 time)</h1>
        {  
          <WordCard value={item.toUpperCase()} 
                    getAnswer = {this.getAnswer}  
                    request = {this.state.requestAnswer}/>     
       
        }
        
        <h2 id="go">Let Go !!!</h2>
        <h2 id="blink"></h2>
        <h2 id="blink1"></h2>
        <h2 id="blink2"></h2>
        <button onClick= {this.reword}> Regame </button> <br></br>  <br></br> 
        <button onClick= {this.request}> Give up </button> <br></br>  <br></br>  
        <button onClick= {this.close}> Quit </button> <br></br>  <br></br>

      </div>
    );
  }
}

export default App;