import React, { useState } from 'react';
import './App.css';

function App() {
  const [binary, setBinary] = useState('');
  const [decimal, setDecimal] = useState<number | null>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setBinary(e.target.value);
  };

  const convertBinaryToDecimal = () => {
    const isValidBinary = /^[01]+$/.test(binary);
    if (isValidBinary) {
      setDecimal(parseInt(binary, 2));
    } else {
      setDecimal(null);
      alert('Please enter a valid binary number');
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    convertBinaryToDecimal();
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Binary Converter</h1>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={binary}
            onChange={handleInputChange}
            placeholder="Enter binary number"
          />
          <button type="submit">Convert</button>
        </form>
        {decimal !== null && (
          <p>Decimal: {decimal}</p>
        )}
      </header>
    </div>
  );
}

export default App;