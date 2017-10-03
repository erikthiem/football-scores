import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);

    const games = [
      {
        team1_name: 'Ohio State',
        team1_score: 40,
        team2_name: 'Michigan',
        team2_score: 20
      },
      {
        team1_name: 'Alabama',
        team1_score: 6,
        team2_name: 'Arkansas',
        team2_score: 2
      }
    ];

    const listGames = games.map((game) =>
      <ScoreBox game={game}/>
    );

    this.state = {listGames: listGames};
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">College Football Scores</h1>
        </header>
        {this.state.listGames}
			</div>
    );
  }
}


class ScoreBox extends Component {

  constructor(props) {
    super(props);

    this.state = {game: props.game};
  }

  render() {
    return (
      <div className="ScoreBox">
        <h3>
          {this.state.game.team1_name} vs. {this.state.game.team2_name}
        </h3>
        <p>{this.state.game.team1_name}: {this.state.game.team1_score}, {this.state.game.team2_name}: {this.state.game.team2_score}</p>
      </div>
    )
  }
}

export default App;
