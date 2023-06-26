import React from 'react';
import { client } from '@/sanity';
import Link from 'next/link';

export default async function page({ params: { id } }) {
  const teacher = await client.fetch(
    `*[_type == 'teachers' && _id == '${id}']`
  );
  const teacherData = teacher[0];
  return (
    <section>
      <Link href="/teachers">back to teachers</Link>
      <h1>{teacherData.name}</h1>
    </section>
  );
}
