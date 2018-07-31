import React from 'react';


class Navbar extends React.Component {
    state = {
            color: "green",
            check: true
        }

    render() {
        let style;
        if (this.props.currentTime <= Math.min.apply(null, this.props.allTimes)) {
            style = { "backgroundColor": "green" }
        } else {
            style = { "backgroundColor": "red" }
        }
        return (
            <div style={{ "float": "right", "border": "1px solid black", "backgroundColor": "beige", "width": "10%", "paddingLeft": 40 }}>

                <ul>
                    {this.props.user.map((el) => {
                        return <li key={el}>{el}  {this.props.currentTime}</li>;
                    })}
                </ul>
                <p >Best Time:<span style={style}>{Math.min.apply(null, this.props.allTimes)}</span></p>
            </div>

        );
    }


}

export default Navbar;