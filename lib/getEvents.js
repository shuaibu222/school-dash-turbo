import { client } from '@/sanity';

export default function getEvents() {
  const res = client.fetch('*[_type == "events"]');
  return res;
}
