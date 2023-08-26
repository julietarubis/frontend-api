
import React, { useState } from 'react';
import axios from 'axios';


function App() {
    const [data, setData] = useState('');
    const [result, setResult] = useState(null);

    const handleChange = (e) => {
        setData(e.target.value);
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post('http://localhost:3000/calculate', { data });
            setResult(response.data);
        } catch (error) {
            console.error('There was an error!', error);
        }
    }

    return (
        <div>
            <h1>Maths Calculations</h1>
            <form onSubmit={handleSubmit}>
                <label>
                    Enter numbers:
                    <input type="text" value={data} onChange={handleChange} />
                </label>
                <button type="submit">Calculate</button>
            </form>
            {result && (
                <div>
                    <h2>Results</h2>
                    <p>Sum: {result.sum}</p>
                    <p>Average: {result.average}</p>
                    <p>Standard Deviation: {result.standardDeviation}</p>
                </div>
            )}
        </div>
    );
}

export default App;


