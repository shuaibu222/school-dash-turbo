import { GoPerson } from 'react-icons/go';
import { MdSchool } from 'react-icons/md';
import Image from 'next/image';
import Link from 'next/link';
import urlFor from '@/sanity';
import getDepartments from '@/lib/getDepartments';

export default async function Departments() {
  const deps = await getDepartments();
  return (
    <section className="department">
      <h3>Departments</h3>
      <div className="parent-card">
        {deps.map((department) => {
          const { name, image, head, _id } = department;
          return (
            <div className="dept-card" key={_id}>
              <Image
                src={urlFor(image).fit('max').width(200).url()}
                width={200}
                height={200}
                alt={name}
              />
              <div className="dept-desc">
                <h4>{name}</h4>
                <div className="dept-text">
                  <div className="head">
                    <GoPerson />
                    <p>Head: {head}</p>
                  </div>
                  <div className="total-student">
                    <MdSchool />
                    <p>Students: 100+</p>
                  </div>
                </div>
                <Link href={`departments/${_id}`} className="more-dept">
                  More Details
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
