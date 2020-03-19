import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import axios from "axios";

const Data = () => {
    const [text, setText] = useState("")

    useEffect(() => {
        axios
            .get("http://localhost:3000/data")
            .then( ({data}) => { setText(data); });
    })
    
    return (
      <div>{text}</div>
    );
}

function tick() {
    ReactDOM.render(<Data />, document.getElementById('root'));
}

setInterval(tick, 3000);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
