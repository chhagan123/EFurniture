import React, { useState } from "react";
function Login() {
  const [open, setopen] = useState(true);
  const [data, setdata] = useState({
    number: " ",
    password: " ",
  });
  const onChange = (e) => {
    const { name, value } = e.target;
    setdata((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

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
        setopen(false)
       }else {
        alert("something went wrong")
       }
         
       }catch(err){
        console.log(err)
       }
  }

  return (
    <div className="relative w-full min-h-screen bg-gray-100">
      {open && (
        <div className="fixed inset-0 bg-white bg-opacity-50 flex  items-center justify-center z-50">
          <form onSubmit={handlesubmit} className="bg-white p-8 rounded-xl shadow-lg w-[90%] max-w-md">
            <input
              name="number"
              type="text"
              placeholder="Phone"
              value={data.number}
              onChange={onChange}
              className="w-full px-4 py-2 border rounded-md mb-4"
            />
            <input
              name="password"
              type="password"
              placeholder="Password"
              value={data.password}
              onChange={onChange}
              className="w-full px-4 py-2 border rounded-md mb-4"
            />

            <button
           
              className="bg-gray-400 text-white px-4 py-2 rounded-md hover:bg-gray-500"
              type="submit"
            >
              Login
            </button>
          </form>
        </div>
      )}
    </div>
  );
}

export default Login;
