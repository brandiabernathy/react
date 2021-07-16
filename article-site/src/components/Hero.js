import React from 'react';
import './Hero.css';

class Hero extends React.Component {
    render() {
        return (
            <div className="hero">
                <div className="img-wrapper">
                    <img src="./images/freebritney.jpg" />
                </div>
                <div className="text">
                    <h2>Britney Spears Just Told A Judge She's Not “Crazy” &amp; Got Approval To Hire Her Own Lawyer</h2>
                    <p>Spears’ new attorney Mathew Rosengart has represented stars like Julia Louis-Dreyfus and Steven Spielberg.</p>
                </div>
            </div>
        )
    }
}

export default Hero;