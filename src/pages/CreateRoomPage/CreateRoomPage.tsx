import React from 'react';
import GameCard from './GameCard';

import GomokuIcon from '../../assets/game-icons/gomoku-icon.jpg';
import Connect4Icon from '../../assets/game-icons/connect-4-icon.jpg';
import CheckersIcon from '../../assets/game-icons/checkers-icon.jpg';

import '../pages.css';
import './CreateRoomPage.css';


interface CreateRoomPageProps {
    gotoTitle: () => void;
    gotoWaiting: () => void;
}

const CreateRoomPage: React.FC<CreateRoomPageProps> = ({ gotoTitle, gotoWaiting }) => {
    const games = [
        ["Gomoku", "Make a line of 5 and win!", GomokuIcon],
        ["Connect 4", "Make a line of 4 by dropping coins in the frame!", Connect4Icon],
        ["Checkers", "The classic game played on a chessboard!", CheckersIcon]
    ];

    function createGameCards() {
        return (
            games.map((game) => <GameCard title={game[0]} description={game[1]} icon={game[2]} />)
        );
    }

    return (
        <div className="main-page">
            <h1>Game hub</h1>
            <h2>Select a game:</h2>
            <div className="game-cards">
                {createGameCards()}
            </div>
            <div className="menu-buttons">
                <button className="confirm-button" onClick={gotoWaiting}>Confirm</button>
                <button className="back-button" onClick={gotoTitle}>Back to title</button>
            </div>
        </div>
    );
}

export default CreateRoomPage;