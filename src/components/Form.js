// src/components/Form.js
import React, { useState } from 'react';
import axios from 'axios';

const Form = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [age, setAge] = useState('');
  const [message, setMessage] = useState('');
  
  const validateForm = () => {
    const nameRegex = /^[A-Za-z\s]+$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return nameRegex.test(name) && emailRegex.test(email) && Number.isInteger(parseInt(age));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) {
      setMessage('Please enter valid details.');
      return;
    }

    try {
      await axios.post('/api/register', { name, email, age });
      setName('');
      setEmail('');
      setAge('');
      setMessage('Registration successful!');
    } catch (error) {
      setMessage('Error submitting form.');
    }
  };

  return (
    <div className="max-w-md mx-auto my-8 p-4 border rounded-lg shadow-lg">
      <h2 className="text-2xl mb-4">User Registration</h2>
      {message && (
        <div className={`p-4 mb-4 text-white ${message.includes('successful') ? 'bg-green-500' : 'bg-red-500'}`}>
          {message}
        </div>
      )}
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700">Name:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Age:</label>
          <input
            type="number"
            value={age}
            onChange={(e) => setAge(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded"
            required
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
        >
          Register
        </button>
      </form>
    </div>
  );
};

export default Form;
