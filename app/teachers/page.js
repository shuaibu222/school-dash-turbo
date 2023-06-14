'use client';

import Link from 'next/link';
import { BiPhone } from 'react-icons/bi';
import { HiOutlineMail } from 'react-icons/hi';
import getTeachers from '@/lib/getTeachers';
import urlFor from '@/sanity';
import Image from 'next/image';

export default async function Teachers() {
  const teachers = await getTeachers();

  return (
    <section className="teacher">
      <div className="parent-card">
        {teachers.map((teacher) => {
          const { image, name, courses, _id } = teacher;
          return (
            <Link href="/" className="teachers-card" key={_id}>
              <Image
                src={image}
                width={150}
                height={150}
                quality={100}
                unoptimized={true}
                alt={name}
                className="img"
              />
              <div className="teachers-desc">
                <p className="t-name">{name}</p>
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
