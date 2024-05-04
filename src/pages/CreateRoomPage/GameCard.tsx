import React from "react";

import'./GameCard.css';


interface GameCardProps {
    title: string;
    description: string;
    icon: string;
    gotoGame: () => void;
}

const GameCard: React.FC<GameCardProps> = ({ title, description, icon, gotoGame }) => {
    return (
        <div className="game-card" onClick={gotoGame}>
            <img className="game-icon" src={icon} alt={title}></img>
            <div className="text">
                <p className="game-title">{title}</p>
                <p className="game-description">{description}</p>
            </div>
        </div>
    );
}

export default GameCard;