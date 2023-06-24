import React from 'react';
import getTeachers from '@/lib/getTeachers';

export default async function page({ params }) {
  const teachers = await getTeachers(params.Id);

  return (
    <section>
      {teachers.map((teacher) => {
        const { _id, name, subject } = teacher;
        return (
          <h1 key={_id}>
            {name}
            {subject}
          </h1>
        );
      })}
    </section>
  );
}
