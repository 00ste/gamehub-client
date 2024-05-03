import React from "react";

import '../pages.css';
import './JoinRoomPage.css';


interface JoinRoomPageProps {
    gotoTitle: () => void;
    gotoWaiting: () => void;
}

const JoinRoomPage: React.FC<JoinRoomPageProps> = ({ gotoTitle, gotoWaiting }) => {
    return (
        <div className="main-page">
            <h1>Game hub</h1>
            <h2>Join room</h2>
            <label htmlFor="room-number">Insert room number:</label>
            <input type="text" name="room-number" />

            <div className="menu-buttons">
                <button className="confirm-button" onClick={gotoWaiting}>Confirm</button>
                <button className="back-button" onClick={gotoTitle}>Back to title</button>
            </div>
        </div>
    );
}

export default JoinRoomPage;