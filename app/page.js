import React from 'react';
import { BsPeopleFill } from 'react-icons/bs';
import { IoSchoolSharp } from 'react-icons/io5';
import { MdEvent } from 'react-icons/md';
import getDepartments from '@/lib/getDepartments';
import getEvents from '@/lib/getEvents';
import getStudents from '@/lib/getStudents';
import getTeachers from '@/lib/getTeachers';

export default async function Home() {
  const teachers = await getTeachers();
  const students = await getStudents();
  const events = await getEvents();
  const departments = await getDepartments();
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
          <div className="chart"></div>
          <div className="some-events"></div>
        </section>
      </article>
    </main>
  );
}
