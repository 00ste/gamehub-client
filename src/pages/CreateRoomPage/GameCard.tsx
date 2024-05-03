import React from "react";

import'./GameCard.css';


interface GameCardProps {
    title: string;
    description: string;
    icon: string;
}

const GameCard: React.FC<GameCardProps> = ({ title, description, icon }) => {
    return (
        <div className="game-card">
            <img className="game-icon" src={icon} alt={title}></img>
            <div className="text">
                <p className="game-title">{title}</p>
                <p className="game-description">{description}</p>
            </div>
        </div>
    );
}

export default GameCard;