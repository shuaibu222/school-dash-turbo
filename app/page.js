import React from 'react';
import { BsPeopleFill } from 'react-icons/bs';
import { IoSchoolSharp } from 'react-icons/io5';
import { MdEvent } from 'react-icons/md';
import Image from 'next/image';
import getDepartments from '@/lib/getDepartments';
import getEvents from '@/lib/getEvents';
import getStudents from '@/lib/getStudents';
import getTeachers from '@/lib/getTeachers';
import getLatestEvents from '@/lib/getLatestEvents';
import getLatestStudents from '@/lib/getLatestStudents';
import BarCharts from './components/BarCharts';

export default async function Home() {
  const teachers = await getTeachers();
  const students = await getStudents();
  const events = await getEvents();
  const departments = await getDepartments();
  const latestStudent = await getLatestStudents();
  const latestEvents = await getLatestEvents();

  return (
    <main className="main-content">
      <h1>Dashboard</h1>
      <article className="dash-flex">
        <section className="stats-first">
          <div className="stats-card">
            <div>
              <p>{teachers.length}</p>
              <p>Total Teachers</p>
            </div>
            <IoSchoolSharp />
          </div>
          <div className="stats-card">
            <div>
              <p>{students.length}</p>
              <p>Total Students</p>
            </div>
            <BsPeopleFill />
          </div>
          <div className="stats-card">
            <div>
              <p>{events.length}</p>
              <p>Total Events</p>
            </div>
            <MdEvent />
          </div>
        </section>
        <section className="stats-second">
          <div className="chart">
            <BarCharts className="barchart" />
          </div>
          <div className="some-events">
            <h2>Upcoming Events</h2>
            {latestEvents.map((event) => {
              const { _id, date, address, title } = event;
              const minimizeDateWords = date.slice(0, 3);
              const dateNum = date.slice(-2, date.length);
              return (
                <div className="upcoming-events" key={_id}>
                  <div className="date-upcome">
                    <p>{minimizeDateWords}</p>
                    <p>{dateNum}</p>
                  </div>
                  <div className="desc-upcome">
                    <p>{title}</p>
                    <p>{address}</p>
                  </div>
                </div>
              );
            })}
            <button>more events</button>
          </div>
          <div className="recent-student">
            <h2>New Students</h2>
            {latestStudent.map((student) => {
              const { _id, image, name } = student;
              return (
                <div className="recent-card" key={_id}>
                  <div className="recent-image">
                    <Image
                      src={image}
                      width={100}
                      height={100}
                      alt={name}
                      className="recent-img"
                    />
                  </div>
                  <div className="recent-name">{name}</div>
                </div>
              );
            })}
            <button>all students</button>
          </div>
        </section>
      </article>
    </main>
  );
}
