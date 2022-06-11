import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { createRoot } from 'react-dom/client';
const container = document.getElementById('root')
const root = createRoot(container)

export default function App() {
    let [results, setResults] = useState([])

    function getResults() {
        axios.get("http://localhost:3001/")
        .then(response => setResults(response.data))
    }

    useEffect(() => {
        getResults();
    }, [])

    let allResults = results.map((element, idx) => {
        return (
            <h1 key={element.id}>{element.name}</h1>
        )
    })

    function submitBerkay() {
        axios.post("http://localhost:3001")
        .then(getResults)
    }

    return (
        <div>
            <button onClick={submitBerkay}>Bir berkay da sen ekle</button>
            {allResults}
        </div>
    )
}

root.render(<App />)