import React from 'react';

class Fourths extends React.Component {
    render() {
        return (
            <div className="fourths">
                <img src={this.props.image} />
                <div className="text">
                    <h3>{this.props.title}</h3>
                </div>
            </div>
        )
    }
}

export default Fourths;