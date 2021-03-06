import React from "react";


export default class GameComponent extends React.Component {
   state = {
            style: {
                backgroundColor: "green",
                borderRadius: Math.floor(Math.random() * 50),
                width: Math.floor(Math.random() * 30 + 30),
                height: Math.floor(Math.random() * 30 + 30),
                marginLeft: Math.floor(Math.random() * 230 + 230),
                marginTop: Math.floor(Math.random() * 230 + 230),
                position: "absolute"
            },
            timeToStartFrom: 0,
            count: true,
            clicks: 1
        }
      
    getColor = () => {
        let characters = "1234567890ABCDEF";
        let color = "#";
        for (let i = 0; i < 6; i++) {
            color += characters[Math.floor(Math.random() * 16)]
        }
       
        return color;
    }


    changeFigure = () => {
        let newDate = new Date();

        if (this.state.count) {
            this.props.setTime((newDate - this.props.date) / 1000);
            this.setState({ count: false });
        } else {
            this.props.setTime((newDate - this.state.timeToStartFrom) / 1000);
        }
        

        this.setState({
            style: {
                backgroundColor: this.getColor(),
                borderRadius: Math.floor(Math.random() * 50),
                width: Math.floor(Math.random() * 30 + 30),
                height: Math.floor(Math.random() * 30 + 30),
                marginLeft: Math.floor(Math.random() * 730 ),
                marginTop: Math.floor(Math.random() * 730),
                position: "absolute"
            },
            timeToStartFrom: newDate,
            clicks: this.state.clicks + 1
        });
        if (this.state.clicks === 5) {
            this.props.finishGame();
        }
    }

    render() {
        let date = new Date();
        return (
            <div style={this.state.style} onClick={this.changeFigure}></div>
        );
    }
}