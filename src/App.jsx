import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from '../Layout.jsx';
import Home from '../Pages/Home.jsx';
import Blog from '../Pages/Blog.jsx';
import Courses from '../Pages/Courses.jsx';

function App() {
  return (
    <Router>
      <Routes>
        <Route 
          path="/" 
          element={
            <Layout currentPageName="Home">
              <Home />
            </Layout>
          } 
        />
        <Route 
          path="/blog" 
          element={
            <Layout currentPageName="Blog">
              <Blog />
            </Layout>
          } 
        />
        <Route 
          path="/courses" 
          element={
            <Layout currentPageName="Courses">
              <Courses />
            </Layout>
          } 
        />
      </Routes>
    </Router>
  );
}

export default App;