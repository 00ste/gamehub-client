import { useState } from 'react'

import TitlePage from './pages/TitlePage/TitlePage'
import CreateRoomPage from './pages/CreateRoomPage/CreateRoomPage'
import JoinRoomPage from './pages/JoinRoomPage/JoinRoomPage'
import WaitingPage from './pages/WaitingPage/WaitingPage'

import './App.css'

enum Page {
  TITLE, CREATE, JOIN, WAIT, GAME
}

function App() {
   const [currentPage, setCurrentPage] = useState(Page.TITLE);

   function changePage(page: Page) {
      setCurrentPage(page);
   }

   switch(currentPage) {
      case Page.TITLE:
         return <TitlePage gotoCreateRoom={() => changePage(Page.CREATE)} gotoJoinRoom={() => changePage(Page.JOIN)} />;
      case Page.CREATE:
         return <CreateRoomPage gotoTitle={() => changePage(Page.TITLE)} gotoWaiting={() => changePage(Page.WAIT)} />;
      case Page.JOIN:
         return <JoinRoomPage gotoTitle={() => changePage(Page.TITLE)} gotoWaiting={() => changePage(Page.WAIT)} />;
      case Page.WAIT:
         return <WaitingPage gotoTitle={() => changePage(Page.TITLE)} gotoGame={() => changePage(Page.GAME)} />;
      case Page.GAME:
         return (<>Game page</>);
   }
}

export default App
