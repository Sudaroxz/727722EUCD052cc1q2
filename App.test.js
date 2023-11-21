import React from 'react';
import './App.css';
import UserProfile from './UserProfile';

function App() {
  return (
    <div className="App">
      <UserProfile name="John Doe" age={25} />
      <UserProfile name="Jane Doe" age={30} />
    </div>
  );
}

export default App;
