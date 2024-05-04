import React from "react";

import '../pages.css';
import './WaitingPage.css';


interface WaitingPageProps {
    gotoTitle: () => void;
    gotoGame: () => void;
}

const WaitingPage: React.FC<WaitingPageProps> = ({ gotoTitle, gotoGame }) => {
    return (
        <div className="main-page">
            <h1>Game hub</h1>
            <h2>Waiting for players...</h2>
            <div className="menu-buttons">
                <button className="back-button" onClick={gotoTitle}>Back to title</button>
                <button className="start-game-button" onClick={gotoGame}>Start game</button>
            </div>
        </div>
    );
}

export default WaitingPage;