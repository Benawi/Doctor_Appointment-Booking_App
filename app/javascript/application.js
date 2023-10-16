import React from 'react';
import ReactDOM from 'react-dom';

function App() {
  return (
    <h1> Hello Toyo..... are  again!</h1>
  );
}

// Create root and render App
const rootElement = document.getElementById('root');
const root = ReactDOM.createRoot(rootElement);
root.render(<App />);
