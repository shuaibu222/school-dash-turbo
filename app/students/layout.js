import Modal from './components/Modal';

export const metadata = {
  title: 'Students',
  description: 'students database',
};

export default function StudentsLayout({ children }) {
  return (
    <main>
      <Modal />
      {children}
    </main>
  );
}
