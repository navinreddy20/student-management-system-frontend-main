import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const AddStudent = () => {
  const [student, setStudent] = useState({
    name: '',
    email: '',
    address: '',
    phoneNumber: '',
    className: '',
    fathersName: ''
  });

  const navigate = useNavigate(); 

  const handleChange = (e) => {
    setStudent({ ...student, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:8080/api/Student', student);
      navigate('/');
    } catch (error) {
      console.error("Failed to add student:", error);
   
    }
  };

  return (
    <div className='addStd'>
      <h2>Add Student</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input type="text" name="name" value={student.name} onChange={handleChange} required />
        </div>
        <div>
          <label>Email:</label>
          <input type="email" name="email" value={student.email} onChange={handleChange} required />
        </div>
        <div>
          <label>Address:</label>
          <input type="text" name="address" value={student.address} onChange={handleChange} required />
        </div>
        <div>
          <label>Phone Number:</label>
          <input type="text" name="phoneNumber" value={student.phoneNumber} onChange={handleChange} required />
        </div>
        <div>
          <label>Class Name:</label>
          <input type="text" name="className" value={student.className} onChange={handleChange} required />
        </div>
        <div>
          <label>Father's Name:</label>
          <input type="text" name="fathersName" value={student.fathersName} onChange={handleChange} required />
        </div>
        <button type="submit">Add Student</button>
      </form>
    </div>
  );
};

export default AddStudent;
