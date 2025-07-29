import React from 'react';

export const Profile = ({ user, setUser }) => {
  const handleLogout = () => {
    setUser(null);
    localStorage.removeItem("user");
    window.location.href = "/";
  };

  if (!user) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <p className="text-lg text-gray-600">You are not logged in.</p>
      </div>
    );
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-indigo-200 to-purple-300 p-4">
      <div className="bg-white shadow-xl rounded-2xl p-8 max-w-md w-full text-center">
        <img
          src="/profile.png" // Optional: Replace with your image or avatar
          alt="User Avatar"
          className="w-24 h-24 rounded-full mx-auto mb-4 border-4 border-indigo-400"
        />
        <h2 className="text-2xl font-bold text-indigo-700 mb-2">{user.name}</h2>
        <p className="text-gray-600 mb-1">
          <strong>Phone:</strong> {user.number}
        </p>
        <p className="text-gray-600 mb-6">
          <strong>Email:</strong> {user.email}
        </p>
        <button
          onClick={handleLogout}
          className="bg-red-500 hover:bg-red-600 text-white px-6 py-2 rounded-full transition duration-200"
        >
          Logout
        </button>
      </div>
    </div>
  );
};
