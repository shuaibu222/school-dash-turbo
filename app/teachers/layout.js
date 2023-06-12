import Modal from './components/Modal';

export const metadata = {
  title: 'Teachers',
  description: 'teachers database',
};

export default function TeachersLayout({ children }) {
  return (
    <main>
      <Modal />
      {children}
    </main>
  );
}
