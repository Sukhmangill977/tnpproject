import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Post from './pages/home'; // Import your Post component
import AddPost from './pages/addPost'; // Assuming addPost is the name of your component

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Post />} />
        <Route path="/addPost" element={<AddPost />} />
      </Routes>
    </Router>
  );
}

export default App;
  