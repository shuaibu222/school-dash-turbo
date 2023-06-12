import React from 'react';
import getStudents from '@/lib/getStudents';

export default async function Students() {
  const students = await getStudents();

  return (
    <section className="students-sec">
      <table>
        <thead>
          <tr>
            <th>Image</th>
            <th>Id</th>
            <th>Date Join</th>
            <th>Name</th>
            <th>Age</th>
            <th>Parent Name</th>
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
                  <img src={image} alt={name} />
                </td>
                <td>{id}</td>
                <td>{new Date(_createdAt).toLocaleDateString()}</td>
                <td>{name}</td>
                <td>{age}</td>
                <td>{gender}</td>
                <td>{parentName}</td>
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
