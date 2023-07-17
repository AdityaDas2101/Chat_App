import React from 'react';

import Join from './components/Join/Join';
import Chat from './components/Chat/Chat';

import { BrowserRouter as Router,Routes, Route } from "react-router-dom";

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Join/>} />
                <Route path="/chat" element={<Chat/>} />
            </Routes>
        </Router>
    );
}

export default App;