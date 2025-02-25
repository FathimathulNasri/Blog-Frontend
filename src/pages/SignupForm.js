import React, { useState} from 'react';
import './SignupForm.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function SignupForm() {
  // const [formData, setFormData] = useState({
  //   username: "",
  //   email: "",
  //   password: "",
  // });
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role] = useState('user'); // Default to 'user'
  const [error, setError] = useState('');
  const navigate = useNavigate()
  // const handleChange = (e) => {
  //   const { name, value } = e.target;
  //   // setFormData((prevData) => ({
  //   //   ...prevData,
  //   //   [name]: value,
  //   // }));
  // };
  const handleSubmit = (e) => {
    e.preventDefault();
     if (!username || !email || !password) {
      setError('All fields are required');
      return;
    }
    axios.post('https://blog-backend-2od8.onrender.com/api/users/signup',{username, email, password, role})
    .then(res => {
      alert(res.data.message);
      navigate('/login')
    })
    .catch(err => console.error(err));

    //  alert('Form submitted!');
    // Here you would typically send the form data to an API.
    // console.log('User Signed Up:', formData);

    
    
    // Clear the form after submit
  //   setFormData({
  //     username: "",
  //     email: "",
  //     password: "",
  //   });
  //   setError('');
   };

  return (
    <div className="signup-form-container">
      <h2>Sign Up for Blog</h2>
      {error && <p className="error-message">{error}</p>}
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">User Name</label>
          <input
            type="text"
            id="username"
            name="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Enter user name"
          />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email Address</label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
          />
        </div>

        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Create a password"
          />
        </div>
        {/* <Link to="/loginsample"><button type="submit" className="submit-btn">Sign Up</button></Link> */}
        <button type="submit" className="submit-btn"> SIGN UP</button>
      </form>
    </div>
  );
}


export default SignupForm;