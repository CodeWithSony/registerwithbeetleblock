// src/App.js
import React from 'react';
import Form from './components/Form';
import AdminDashboard from './components/AdminDashboard';

const App = () => {
  return (
    <div className="App">
      <Form />
      <AdminDashboard />
    </div>
  );
};

export default App;
