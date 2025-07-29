import React, { useEffect, useState } from "react";

function Login({ user, setUser }) {
  const [open, setopen] = useState(true);
  const [data, setdata] = useState({
    number: "",
    password: "",
  });

  const onChange = (e) => {
    const { name, value } = e.target;
    setdata((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  useEffect(() => {
    if (user) setopen(false);
  }, [user]);

  const handlesubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:8000/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();
      if (response.ok) {
        alert("Login successful");
        setUser(result.user);
        localStorage.setItem("user", JSON.stringify(result.user));
        setopen(false);
        window.location.href = "/";
      } else {
        alert("Login failed: Invalid credentials");
      }
    } catch (err) {
      console.log(err);
      alert("Login error. Please try again later.");
    }
  };

  return (
    <div className="relative w-full min-h-screen bg-gradient-to-br from-gray-100 to-blue-100 flex items-center justify-center">
      {open && (
        <div className="fixed inset-0 bg-black bg-opacity-40 backdrop-blur-sm flex items-center justify-center z-50">
          <form
            onSubmit={handlesubmit}
            className="bg-white rounded-xl shadow-xl w-[90%] max-w-sm p-8"
          >
            <h2 className="text-3xl font-bold text-center text-blue-600 mb-6">
              Welcome Back
            </h2>

            <input
              name="number"
              type="text"
              placeholder="Phone Number"
              value={data.number}
              onChange={onChange}
              className="w-full px-4 py-2 border rounded-md mb-4 focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />

            <input
              name="password"
              type="password"
              placeholder="Password"
              value={data.password}
              onChange={onChange}
              className="w-full px-4 py-2 border rounded-md mb-4 focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />

            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition duration-200"
            >
              Login
            </button>

            <p className="mt-4 text-sm text-center text-gray-600">
              Don’t have an account?{" "}
              <a
                href="/Signup"
                className="text-blue-600 font-medium hover:underline"
              >
                Signup here
              </a>
            </p>
          </form>
        </div>
      )}
    </div>
  );
}

export default Login;



