'use client';

import React from 'react';
import { useState } from 'react';
import { AiOutlineUsergroupAdd } from 'react-icons/ai';
import { client } from '@/sanity';

export default function Modal() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [name, setName] = useState('');
  const [parentName, setParentName] = useState('');
  const [age, setAge] = useState('');
  const [gender, setGender] = useState('');
  const [phone, setPhone] = useState('');
  const [image, setImage] = useState('');
  const [department, setDepartment] = useState('');

  const handleStudentSubmit = async (e) => {
    e.preventDefault();
    if ((name, parentName, age, tel, image, department)) {
      const newStudent = {
        _type: 'student',
        name: name,
        parentName: parentName,
        gender: gender,
        age: age,
        phone: phone,
        image: image,
        department: department,
      };

      try {
        const response = await client.create(newStudent);
        console.log('Create successful: ', response._id);
      } catch (error) {
        console.log('Create failed: ', error.message);
      }

      setName('');
      setParentName('');
      setAge('');
      setPhone('');
      setImage('');
      setDepartment('');
    }
  };

  return (
    <>
      <div className="add add-student">
        <h3>Students</h3>
        <button className="more-dept" onClick={() => setIsModalOpen(true)}>
          <span>
            <AiOutlineUsergroupAdd style={{ fontSize: '1.3rem' }} />
          </span>
          add student
        </button>
      </div>
      {isModalOpen ? (
        <div className="add-modal">
          <div className="add-modal-content">
            <span className="add-close" onClick={() => setIsModalOpen(false)}>
              &times;
            </span>
            <form>
              <div>
                <label htmlFor="name">Student name:</label>
                <input
                  type="text"
                  placeholder="Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  name="name"
                  id="name"
                />
              </div>
              <div>
                <label htmlFor="parent-name">Parent name:</label>
                <input
                  type="text"
                  name="parent-name"
                  value={parentName}
                  onChange={(e) => setParentName(e.target.value)}
                  id="parent-name"
                />
              </div>
              <div>
                <label htmlFor="name">Age:</label>
                <input
                  type="number"
                  name="age"
                  value={age}
                  onChange={(e) => setAge(e.target.value)}
                  id="age"
                />
              </div>
              <div>
                <label htmlFor="gender">Gender:</label>
                <select
                  name="gender"
                  value={gender}
                  onChange={(e) => setGender(e.target.value)}
                  id="gender"
                >
                  <option value="default">select gender</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <div>
                <label htmlFor="tel">Phone:</label>
                <input
                  type="tel"
                  placeholder="phone"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  name="tel"
                  id="tel"
                />
              </div>
              <div>
                <label htmlFor="image">Image:</label>
                <input
                  type="url"
                  placeholder="paste image link"
                  name="image"
                  id="image"
                  value={image}
                  onChange={(e) => setImage(e.target.value)}
                />
              </div>
              <div>
                <label htmlFor="department">Department:</label>
                <select
                  name="department"
                  value={department}
                  onChange={(e) => setDepartment(e.target.value)}
                  id="department"
                >
                  <option value="default">select department</option>
                  <option value="computer science">Computer Science</option>
                  <option value="economics">Economics</option>
                  <option value="mathematics">Mathematics</option>
                  <option value="science">Science</option>
                </select>
              </div>
              <button
                className="more-dept"
                type="submit"
                onClick={handleStudentSubmit}
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      ) : null}
    </>
  );
}
