import React from 'react';
import { useNavigate } from "react-router-dom";

// import { Container } from './styles';

const LoginPageButton: React.FC = () => {
    let navigate = useNavigate();
  
    function handleClick() {
      navigate("/login");
    }
  
    return (
      <button 
        className="bg-gray-500 hover:bg-gray-700 text-white text-xl font-bold my-2 mx-4 px-4 rounded-full"
        type="button" 
        onClick={handleClick}>
        Login Page
      </button>
    );
  }

export default LoginPageButton;