import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

const EditStudent = () => {
  const [student, setStudent] = useState({
    name: '',
    email: '',
    address: '',
    phoneNumber: '',
    className: '',
    fathersName: ''
  });
  
  const { id } = useParams();
  const navigate = useNavigate(); 

  useEffect(() => {
    const fetchStudent = async () => {
      try {
        const result = await axios.get(`http://localhost:8080/api/Student/${id}`);
        setStudent(result.data);
      } catch (error) {
        console.error("Failed to fetch student data:", error);
      
      }
    };
    fetchStudent();
  }, [id]);

  const handleChange = (e) => {
    setStudent({ ...student, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`http://localhost:8080/api/Student/${id}`, student);
      navigate('/'); 
    } catch (error) {
      console.error("Failed to update student:", error);
      
    }
  };

  return (
    <div className='editStd'>
      <h2>Edit Student</h2>
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
        <button type="submit">Update Student</button>
      </form>
    </div>
  );
};

export default EditStudent;
