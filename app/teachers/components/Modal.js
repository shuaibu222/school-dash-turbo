'use client';

import React from 'react';
import { useState } from 'react';
import { BiUserPlus } from 'react-icons/bi';
import { client } from '@/sanity';

export default function Modal() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [name, setName] = useState('');
  const [title, setTitle] = useState('');
  const [about, setAbout] = useState('');
  const [degree, setDegree] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [image, setImage] = useState('');
  const [courses, setCourses] = useState('');
  const [address, setAddress] = useState('');
  const [experience, setExperience] = useState('');

  const handleTeacherSubmit = async (e) => {
    e.preventDefault();
    if (
      (name,
      phone,
      email,
      title,
      degree,
      courses,
      address,
      image,
      about,
      experience)
    ) {
      const newTeacher = {
        _type: 'teachers',
        name: name,
        phone: phone,
        email: email,
        title: title,
        degree: degree,
        courses: courses,
        address: address,
        image: image,
        about: about,
        experience: experience,
      };

      try {
        const response = await client.create(newTeacher);
        console.log('Create successful: ', response._id);
      } catch (error) {
        console.log('Create failed: ', error.message);
      }
      setName('');
      setTitle('');
      setDegree('');
      setEmail('');
      setPhone('');
      setImage('');
      setCourses('');
      setAddress('');
      setAbout('');
      setExperience('');
    }
  };

  return (
    <>
      <div className="add add-teacher">
        <h3>Teachers</h3>
        <button className="more-dept" onClick={() => setIsModalOpen(true)}>
          <span>
            <BiUserPlus style={{ fontSize: '1.3rem' }} />
          </span>
          add teacher
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
                <label htmlFor="name">Teacher fullname:</label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="e.g Shuaibu AbdulKadir "
                  name="name"
                  id="name"
                />
              </div>
              <p></p>
              <div>
                <label htmlFor="title">Title:</label>
                <select
                  name="title"
                  id="title"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                >
                  <option value="default">Select</option>
                  <option value="dean">dean</option>
                  <option value="HOD">HOD</option>
                  <option value="staff">staff</option>
                  <option value="lecturer">lecturer</option>
                </select>
              </div>
              <div>
                <label htmlFor="degree">Degree:</label>
                <input
                  type="text"
                  value={degree}
                  onChange={(e) => setDegree(e.target.value)}
                  placeholder="e.g PHD in Mathematics"
                  name="degree"
                  id="degree"
                />
              </div>
              <div>
                <label htmlFor="email">Email:</label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="email"
                  name="email"
                  id="email"
                />
              </div>
              <div>
                <label htmlFor="phone">Phone:</label>
                <input
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="phone"
                  name="phone"
                  id="phone"
                />
              </div>
              <div>
                <label htmlFor="courses">Courses:</label>
                <input
                  type="text"
                  value={courses}
                  onChange={(e) => setCourses(e.target.value)}
                  placeholder="e.g programming, database"
                  name="courses"
                  id="courses"
                />
              </div>
              <div>
                <label htmlFor="experience">Experience:</label>
                <input
                  type="text"
                  value={experience}
                  onChange={(e) => setExperience(e.target.value)}
                  placeholder="e.g 10 Years in university Math"
                  name="experience"
                  id="experience"
                />
              </div>
              <div>
                <label htmlFor="image">Image:</label>
                <input
                  type="url"
                  value={image}
                  onChange={(e) => setImage(e.target.value)}
                  placeholder="paste image link"
                  name="image"
                  id="image"
                />
              </div>
              <div>
                <label htmlFor="about">About:</label>
                <textarea
                  name="about"
                  value={about}
                  onChange={(e) => setAbout(e.target.value)}
                  placeholder="About me..."
                  id="about"
                  cols="30"
                  rows="10"
                ></textarea>
              </div>
              <div>
                <label htmlFor="address">Address:</label>
                <input
                  type="text"
                  name="address"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  id="address"
                  placeholder="address"
                />
              </div>
              <button
                className="more-dept"
                type="submit"
                onClick={handleTeacherSubmit}
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
