import React from 'react';
import { UserContext } from '../contexts/UserContext';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';

const InstructorPage = () => {

  const loggedData = useContext(UserContext);
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("lms-token");
    loggedData.setLoggedUser(null);
    navigate("/signin");
  }
  return (
    <div>
      <h1>Instructor Dashboard</h1>
      <button
        onClick={logout}
        className="w-fit text-sm mt-4 bg-black text-white px-2 md:px-4 py-2 rounded-md"
      >
        Logout
      </button>
    </div>
  );
}

export default InstructorPage
