import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";


function EmpLogin({setUserType}) {

    const [employeeEmail, setEmployeeEmail] = useState("");
  const [employeeId, setEmployeeId] = useState("");

  const [employeePassword, setEmployeePassword] = useState("");
  
  const navigate = useNavigate();


  const submitEmployee = (e) => {
    e.preventDefault();
    console.log("Employee Email:", employeeEmail);
    console.log("Employee Password:", employeePassword);
    console.log("Employee Id", employeeId)
    setUserType('employee');
    navigate('/emp-dashboard');
    
    
  };




  return (
    <div>
      {/* Employee Login Card */}
      <div className="lg:w-[400px] max-w-lg p-9 bg-white rounded-lg shadow-2xl border border-gray-300">
      <h2 className="text-2xl font-bold text-center mb-6">Employee Login</h2>
      <form onSubmit={submitEmployee}>
        <div className="mb-4">
          <label className="block text-gray-700">Email:</label>
          <input
            type="email"
            value={employeeEmail}
            onChange={(e) => setEmployeeEmail(e.target.value)}
            required
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 hover:ring-blue-700"
          />
          <label className="block text-gray-700 mt-3">Employee Id:</label>
          <input
            type="text"
            value={employeeId}
            onChange={(e) => setEmployeeId(e.target.value)}
            required
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 hover:ring-blue-700"
          />
        </div>
        <div className="mb-6">
          <label className="block text-gray-700">Password:</label>
          <input
            type="password"
            value={employeePassword}
            onChange={(e) => setEmployeePassword(e.target.value)}
            required
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
        <button 
          type="submit"
          className="w-full py-2 px-4 bg-blue-500 text-white rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
        >
          Login
        </button>
        <div className="mt-4 text-center">
          <Link to="/forgot-password" className="text-blue-500 hover:underline">Forgot password?</Link>
        </div>
      </form>
    </div>
    </div>
  )
}

export default EmpLogin
