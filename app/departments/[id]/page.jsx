import React from 'react';
import { client } from '@/sanity';
import Link from 'next/link';

export default async function page({ params: { id } }) {
  const teacher = await client.fetch(
    `*[_type == 'departments' && _id == '${id}']`
  );
  const deptData = teacher[0];
  return (
    <section>
      <Link href="/departments">back to departments</Link>
      <h1>{deptData.name}</h1>
    </section>
  );
}
