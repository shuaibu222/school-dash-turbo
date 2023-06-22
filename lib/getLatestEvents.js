import { client } from '@/sanity';

export default function getLatestEvents() {
  const res = client.fetch(
    '*[_type == "events"]  | order(_createdAt desc)[0..1]'
  );
  return res;
}
