import React from 'react';
import Weather from './Weather';
import './App.css'; // Ensure you have an App.css for App-specific styles

const App = () => {
  return (
    <div className="app-container"> {/* Use this for positioning if necessary */}
      <header>
      </header>
      <main>
        <Weather/>
      </main>
    </div>
  )
}
export default App;
