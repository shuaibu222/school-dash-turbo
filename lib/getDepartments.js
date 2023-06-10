import { client } from '@/sanity';

export default function getDepartments() {
  const res = client.fetch('*[_type == "department"]');
  return res;
}
