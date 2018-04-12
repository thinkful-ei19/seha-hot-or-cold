import React from 'react';

import Header from './header';
import GuessSection from './guess-section';
import GuessCount  from './guess-count';

import GuessList from './guess-list';

export default class Game extends React.Component {
        constructor(props){
        super(props);
        this.state = {
            guesses:[],
            feedback:"Make your guess!",
            count:null,
            guess:null,
            randomNum:Math.round(Math.random() * 100) + 1,
            modal:false
        }
        }
      
        onSubmit(userGuess) {
        const num = Math.abs(this.state.randomNum - userGuess);
        const guesses = [...this.state.guesses, userGuess];
        this.setState({
            guesses: guesses,
            guess: userGuess,
            count: guesses.length
        })
        //console.log(this.state.randomNum, 'random', userGuess, 'user'  );
        if( this.state.randomNum.toString() === userGuess) {
        this.setState({
        feedback: 'winner winner chicken dinner'
        })
        } else if( num < 25) {
        this.setState({
        feedback: 'hot'
        })
        } else if( num > 25) {
         this.setState({
        feedback: 'cold'
       })
    }
}
        showModal(){
            this.setState({
                modal:!this.state.modal
            })
        }
        restartGame(){
            this.setState({
            guesses: [],
            feedback: "Make your guess!",
            count: null,
            guess: null,
            randomNum: Math.round(Math.random() * 100) + 1,
             modal: false
            })
        }
        
    
        render(){
        return (
        <div>
            <Header visibility={this.state.modal} toggleModal={()=>this.showModal()} newGame={
                ()=>this.restartGame()}/>
            <GuessSection feedback={this.state.feedback} onSubmit={(userGuess) => this.onSubmit(userGuess)}/>
            <GuessCount count={this.state.count} />
            <GuessList guesses={this.state.guesses} />
          
        </div>
    );
}
}

