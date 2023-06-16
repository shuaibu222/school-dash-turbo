'use client';

import React from 'react';
import { useState } from 'react';
import { MdEvent } from 'react-icons/md';
import { client } from '@/sanity';

export default function Modal() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [date, setDate] = useState('');
  const [title, setTitle] = useState('');
  const [time, setTime] = useState('');
  const [address, setAddress] = useState('');

  const handleStudentSubmit = async (e) => {
    e.preventDefault();
    if ((date, title, time, address)) {
      const newStudent = {
        _type: 'events',
        date: date,
        title: title,
        time: time,
        address: address,
      };

      try {
        const response = await client.create(newStudent);
        console.log('Create successful: ', response._id);
      } catch (error) {
        console.log('Create failed: ', error.message);
      }

      setDate('');
      setTitle('');
      setTime('');
      setAddress('');
    }
  };

  return (
    <>
      <div className="add add-student">
        <h3>Events</h3>
        <button className="more-dept" onClick={() => setIsModalOpen(true)}>
          <span>
            <MdEvent style={{ fontSize: '1.3rem' }} />
          </span>
          add events
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
                <label htmlFor="date">Date:</label>
                <input
                  type="text"
                  placeholder="e.g. MAY 5"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  name="date"
                  id="date"
                />
              </div>
              <div>
                <label htmlFor="topic">Topic:</label>
                <input
                  type="text"
                  name="topic"
                  placeholder="e.g. AI in the modern world"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  id="topic"
                />
              </div>
              <div>
                <label htmlFor="time">Time:</label>
                <input
                  type="text"
                  placeholder="e.g. 7:00am - 12:00pm"
                  value={time}
                  onChange={(e) => setTime(e.target.value)}
                  name="time"
                  id="time"
                />
              </div>
              <div>
                <label htmlFor="address">Address:</label>
                <input
                  type="text"
                  name="address"
                  placeholder="Garawa, Tsamiya Babba"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  id="address"
                />
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
