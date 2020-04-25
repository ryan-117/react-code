import React from 'react';
import logo from './logo.svg';
import './App.css';
import CommentApp from "./Component/CommentApp";

function App() {
    return (
        <div className="react-app">
            <img src={logo} className="react-app-logo" alt="logo" />
            <CommentApp />
        </div>
    );
}

export default App;
