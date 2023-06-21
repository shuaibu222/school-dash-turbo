import { client } from '@/sanity';

export default function getLatestStudents() {
  const res = client.fetch(
    '*[_type == "student"]  | order(_createdAt desc)[0..2]'
  );
  return res;
}
