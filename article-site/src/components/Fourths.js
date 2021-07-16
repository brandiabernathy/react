import React from 'react';
import './Fourths.css';

class Fourths extends React.Component {
    render() {
        return (
            <div className="fourth">
                <div className="img-wrapper">
                    <img src={this.props.image} />
                </div>
                <div className="text">
                    <h3>{this.props.title}</h3>
                </div>
            </div>
        )
    }
}

export default Fourths;