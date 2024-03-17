import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import StudentList from './StudentList';
import AddStudent from './AddStudent';
import EditStudent from './EditStudent';
import './App.css';

const App = () => {

  return (
    <>
      <h1><a href="https://telusko.com/" style={{ color: 'inherit', textDecoration: 'none' }}>Telusko-</a>Student Management System</h1>
    <Router>
      <div className="app">
        <Routes>
          <Route path="/" element={<StudentList />} exact />
          <Route path="/add" element={<AddStudent />} />
          <Route path="/edit/:id" element={<EditStudent />} />
        </Routes>
      </div>
    </Router>
    </>
  );
}

export default App;
