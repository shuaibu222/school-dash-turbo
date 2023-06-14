import React from 'react';
import getStudents from '@/lib/getStudents';
import Image from 'next/image';

export default async function Students() {
  const students = await getStudents();

  return (
    <section className="students-sec">
      <table>
        <thead>
          <tr>
            <th>Profile</th>
            <th>ID</th>
            <th>Date Join</th>
            <th>Name</th>
            <th>Age</th>
            <th>Gender</th>
            <th>Phone No.</th>
            <th>Department</th>
          </tr>
        </thead>

        {students.map((student) => {
          const {
            _id,
            name,
            age,
            phone,
            department,
            gender,
            parentName,
            image,
            _createdAt,
          } = student;
          const id = _id.slice(5, 10);
          return (
            <tbody key={_id}>
              <tr>
                <td>
                  <Image src={image} width={100} height={100} alt={name} />
                </td>
                <td>{id}</td>
                <td>{new Date(_createdAt).toLocaleDateString()}</td>
                <td>
                  {name} {parentName}
                </td>
                <td>{age}</td>
                <td>{gender}</td>
                <td>{phone}</td>
                <td>{department}</td>
              </tr>
            </tbody>
          );
        })}
      </table>
    </section>
  );
}
