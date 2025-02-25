import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Home from './pages/Home';
import BlogUser from './pages/BlogUser';
import BlogAdmin from './pages/BlogAdmin';
import PostForm from './pages/PostForm';
import Blog from './pages/Blog';
import SignupForm from './pages/SignupForm';
import Login from './pages/Login';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {  
  // const [token, setToken] = useState(localStorage.getItem("token"));
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create" element={<PostForm />} />
        <Route path="/edit/:id" element={<PostForm />} />
        <Route path="/SignupForm" element={<SignupForm/>} />
        <Route path="/view" element={<Blog/>} />
        <Route path="/blogUser" element={<BlogUser/>} /> 
        <Route path="/blogAdmin" element={<BlogAdmin/>} /> 
        <Route path="/login" element={<Login/>} />
        {/* <Route path="/login"><Login setToken={setToken} /></Route>
        <Route path="/dashboard">{token ? <BlogUser /> : <Login setToken={setToken} />}
        </Route> */}
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
