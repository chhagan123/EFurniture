import { useNavigate } from 'react-router-dom';

import React, { useState } from 'react';
  
const Signup = () => {
  const [showModal, setShowModal] = useState(true);
  const navigate = useNavigate()

  const [formData, setFormData] = useState({
    name: '',
    number: '',
    password: ''
  });

  const onChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    

    try {
      const response = await fetch('http://localhost:8000/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      const result = await response.json();
      console.log('Server response:', result);

      if (response.ok) {
        alert('Signup successful!');
        setShowModal(false);
      
      } else {
        alert('Signup failed. Please try again.');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('An error occurred while signing up.');
    
    }
  };

  return (
    <div className="relative w-full min-h-screen bg-gray-100">
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-8 rounded-xl shadow-lg w-[90%] max-w-md">
            <h2 className="text-2xl font-bold mb-4 text-center">Signup</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                name="name"
                type="text"
                placeholder="Name"
                value={formData.name}
                onChange={onChange}
                className="w-full px-4 py-2 border rounded-md"
              />
              <input
                name="number"
                type="text"
                placeholder="Phone Number"
                value={formData.number}
                onChange={onChange}
                className="w-full px-4 py-2 border rounded-md"
              />
              <input
                name="password"
                type="password"
                placeholder="Password"
                value={formData.password}
                onChange={onChange}
                className="w-full px-4 py-2 border rounded-md"
              />
              <div className="flex justify-between mt-4">
                <button
                  type="submit"
                  className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600"
                >
                  Register
                </button>
                <button
                  type="button"
                  className="bg-gray-400 text-white px-4 py-2 rounded-md hover:bg-gray-500"
                  onClick={() => setShowModal(false)}
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Signup;
