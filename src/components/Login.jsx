import React, { useEffect, useState,useContext } from "react";

function Login({user,setUser}) {
  const [open, setopen] = useState(true);
  const [data, setdata] = useState({
    number: " ",
    password: " ",
  });
  // const [user,setUser] = useState(null)

  const onChange = (e) => {
    const { name, value } = e.target;
    setdata((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  // useEffect(() => {
  //   const storeUser = localStorage.getItem("user")
  //   if(storeUser){
  //     setUser(JSON.parse(storeUser))
  //     setopen(false)
  //   }
  // },[])
  useEffect(() => {
    if (user) setopen(false);
  }, [user]);

  const handlesubmit = async (e) => {
       e.preventDefault();
       try{
        const response  = await fetch ("http://localhost:8000/login",{
           method:"POST",
           headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(data)
        })
        const result = await response.json()
        console.log(result);

       if(response.ok){
        alert("login succesfully")
        setUser(result.user)
        localStorage.setItem("user", JSON.stringify(result.user));
        setopen(false)
       }else {
        alert("something went wrong")
       }
         
       }catch(err){
        console.log(err)
       }
  }
    // Handle logout
    const handleLogout = () => {
      setUser(null);
      setopen(true);
      localStorage.removeItem("user");
    };

    return (
      <div className="relative w-full min-h-screen bg-gray-100 flex items-center justify-center">
        {open && !user ? (
          <div className="fixed inset-0 bg-white bg-opacity-50 flex items-center justify-center z-50">
            <form
              onSubmit={handlesubmit}
              className="bg-white p-8 rounded-xl shadow-lg w-[90%] max-w-md"
            >
              <h2 className="text-2xl font-bold mb-4 text-center">Login</h2>
              <input
                name="number"
                type="text"
                placeholder="Phone"
                value={data.number}
                onChange={onChange}
                className="w-full px-4 py-2 border rounded-md mb-4"
                required
              />
              <input
                name="password"
                type="password"
                placeholder="Password"
                value={data.password}
                onChange={onChange}
                className="w-full px-4 py-2 border rounded-md mb-4"
                required
              />
              <button
                className="bg-blue-500 text-white px-4 py-2 w-full rounded-md hover:bg-blue-600"
                type="submit"
              >
                Login
              </button>
            </form>
          </div>
        ) : user ? (
          <div className="bg-white p-8 rounded-xl shadow-lg w-[90%] max-w-md">
            <h2 className="text-2xl font-bold mb-4 text-center">Welcome, {user.name}</h2>
            <p className="mb-2"><strong>Phone:</strong> {user.number}</p>
            <p className="mb-2"><strong>Email:</strong> {user.email}</p>
            <button
              onClick={handleLogout}
              className="mt-6 bg-red-500 text-white px-4 py-2 w-full rounded-md hover:bg-red-600"
            >
              Logout
            </button>
          </div>
        ) : null}
      </div>
    );
}

export default Login;
