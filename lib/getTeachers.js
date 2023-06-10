import { client } from '@/sanity';

export default function getTeachers() {
  const res = client.fetch('*[_type == "teachers"]');
  return res;
}
