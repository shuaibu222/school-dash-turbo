import React from 'react';
import { BsArrowLeft } from 'react-icons/bs';
import { MdLocationOn, MdEmail } from 'react-icons/md';
import { HiPhone } from 'react-icons/hi';
import { client } from '@/sanity';
import Link from 'next/link';
import Image from 'next/image';

export default async function page({ params: { id } }) {
  const teacher = await client.fetch(
    `*[_type == 'teachers' && _id == '${id}']`
  );
  const teacherData = teacher[0];
  const {
    image,
    name,
    courses,
    about,
    email,
    phone,
    address,
    experience,
    degree,
  } = teacherData;
  return (
    <article className="each-teacher">
      <Link href="/teachers">
        <BsArrowLeft />
      </Link>
      <section className="eachteacher-card">
        <div className="image">
          <Image src={image} alt={name} width={200} height={200} />
        </div>
        <div className="eachteacher-about">
          <div className="t-name">
            <p>{name}</p>
            <p>{courses} Teacher</p>
          </div>
          <div className="t-contact">
            <div>
              <MdLocationOn />
              <p>{address}</p>
            </div>
            <div>
              <HiPhone />
              <p>{phone}</p>
            </div>
            <div>
              <MdEmail />
              <p>{email}</p>
            </div>
          </div>
          <div className="t-desc">
            <h2>About</h2>
            <p>{about}</p>
          </div>
          <div className="t-edu">
            <h2>Degree</h2>
            <p>{degree}</p>
          </div>
        </div>
      </section>
    </article>
  );
}
