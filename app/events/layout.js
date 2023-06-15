import Modal from '../events/components/Modal';

export const metadata = {
  title: 'Events',
  description: 'Events at DHTN',
};

export default function Events({ children }) {
  return (
    <main>
      <Modal />
      {children}
    </main>
  );
}
