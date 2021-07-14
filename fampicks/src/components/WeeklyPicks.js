import React from 'react';

class WeeklyPicks extends React.Component {
    render() {
        return (
            <div>
                {this.props.picks}
                {this.props.upset}
            </div>
        )
    }
}

export default WeeklyPicks;