import React, { Component } from "react";
import ReactDOM from "react-dom";
import { User } from "./components/user"
import Navbar from "./components/navbar";
import GameComponent from "./components/GameComponent";
import GameOver from "./components/gameOver"


class Game extends Component {
    constructor(props) {
        super(props);
        this.state = {
            players: [],
            navbar: false,
            userInfo: true,
            userTime: [],
            gameover: false,
            game: false
        }
        this.getName = this.getName.bind(this);
        this.setTime = this.setTime.bind(this);
        this.finishGame = this.finishGame.bind(this);
        this.newGame = this.newGame.bind(this);
    }


    getName(player) {
        this.setState({
            players: [...this.state.players, player],
            navbar: true,
            userInfo: false,
            game: true
        });
    }

    setTime(time) {
        this.setState({ userTime: [...this.state.userTime, time] });
        //console.log(this.state.userTime);
    }
    finishGame() {
        this.setState({
            gameover: true,
            game: false
        });
    }
    newGame() {
        this.setState({
            gameover: false,
            navbar: true,
            userInfo: false,
            game: true
        });
}
    render() {
        return (

            <div>
                <div>
                    {this.state.navbar &&
                        <Navbar
                        user={this.state.players}
                        currentTime={this.state.userTime[this.state.userTime.length - 1]}
                        allTimes={this.state.userTime}
                        />}
                </div>
                <div>
                    {this.state.userInfo && <User getName={this.getName} />}
                    {this.state.game &&
                        <GameComponent
                        date={new Date()}
                        setTime={this.setTime}
                        finishGame={this.finishGame}
                        />
                    }
                    {this.state.gameover && <GameOver newGame={this.newGame}/>}
                </div>
            </div>
        );
    }
}



ReactDOM.render(<Game />, document.getElementById("app"));



