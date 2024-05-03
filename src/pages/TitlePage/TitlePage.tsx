import React from "react";

import '../pages.css';
import './TitlePage.css';


interface TitlePageProps {
    gotoCreateRoom: () => void;
    gotoJoinRoom: () => void;
}

const TitlePage: React.FC<TitlePageProps> = ({ gotoCreateRoom, gotoJoinRoom }) => {
    return (
        <div className="main-page">
            <h1>Game hub</h1>
            <div className="menu-buttons">
                <button className="create-room" onClick={gotoCreateRoom}>Create room</button>
                <button className="join-room" onClick={gotoJoinRoom}>Join room</button>
            </div>
        </div>
    );
}

export default TitlePage;