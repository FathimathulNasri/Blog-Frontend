import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
// import { Link } from 'react-router-dom';
import './Login.css'; // Importing the CSS for styling


const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();
  // const [setFormData] = useState({
  //   username: "",
  //   email: "",
  //   password: "",
  // });
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Basic validation
    if (!email || !password) {
      setErrorMessage('Please fill in both fields');
    } else {
      setErrorMessage('');
    try {
        await axios.post('https://blog-backend-2od8.onrender.com/api/users/login', { email, password}).then(response => {
        // Get the token and role from the response
        const { token, role } = response.data;
  
        // Store token in localStorage (you can also use cookies)
        localStorage.setItem('token', token);

        // Redirect based on role
        if (role === 'admin') {
          navigate('/blogAdmin'); // Redirect to Admin page
        } else {
          navigate('/blogUser'); // Redirect to User page
        }
        })
        
      } catch (err) {
        setErrorMessage(err.message);
      }
      setEmail("");
      setPassword("");
    //   // Perform login logic, such as calling an API to authenticate
    //   axios.post('http://localhost:5000/api/users/login',{email,password})
    //   // Get the token and role from the response
    //   const { token, role } = response.data;
  };

      // .then(res => {
      //   alert(res.data.message);
      // })
      // .catch(err => console.error(err));   
      // // navigate('/blogUser')
      // }
    
      // if (email === 'admin@gmail.com' && password === 'password123') {
      //   // Successful validation, navigate to the home page
      //   navigate('/blogAdmin');
      // } 
      // else {
      //   // Show error if validation fails
      //   setErrorMessage('Invalid username or password');
      // }
    // setFormData({
    //   username: "",
    //   email: "",
    //   password: "",
    // });
    // setErrorMessage('');

  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div className="input-container">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={handleEmailChange}
            placeholder="Enter your email"
          />
        </div>
        <div className="input-container">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={handlePasswordChange}
            placeholder="Enter your password"
          />
        </div>
        {errorMessage && <div className="error-message">{errorMessage}</div>}
        {/* <button type="submit" className="login-btn"> Login</button> */}
        {/* <Link to="/blogUser"> <button type="submit" className="login-btn">Login</button></Link> */}
        <button type="submit" className="login-btn">Login</button>
      </form>
    </div>
  );
};

export default Login;
