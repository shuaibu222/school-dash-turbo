import { client } from '@/sanity';

export default function getStudents() {
  const res = client.fetch('*[_type == "student"]');
  return res;
}
