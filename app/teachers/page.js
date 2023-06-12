'use client';

import Link from 'next/link';
import { BiPhone } from 'react-icons/bi';
import { HiOutlineMail } from 'react-icons/hi';
import getTeachers from '@/lib/getTeachers';
import urlFor from '@/sanity';

export default async function Teachers() {
  const teachers = await getTeachers();

  return (
    <section className="teacher">
      <div className="parent-card">
        {teachers.map((teacher) => {
          const { image, name, courses, _id } = teacher;
          return (
            <Link href="/" className="teachers-card" key={_id}>
              <img src={image} alt={name} />
              <div className="teachers-desc">
                <h4>{name}</h4>
                <p>{courses}</p>
              </div>
              <div className="teachers-icons">
                <div className="div">
                  <BiPhone className="icons" />
                </div>
                <div className="div">
                  <HiOutlineMail className="icons" />
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </section>
  );
}
