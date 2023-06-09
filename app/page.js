'use client';

import React, { useState } from 'react';
import Sidebar from './components/Sidebar';

export default function Home() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <article className={`main-parent ${isSidebarOpen ? '' : 'main-close'}`}>
      <Sidebar
        isSidebarOpen={isSidebarOpen}
        setIsSidebarOpen={setIsSidebarOpen}
      />
      <main className="main-content">
        <button className="sidebar-btn" onClick={toggleSidebar}>
          Toggle
        </button>
        <h1>content</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus
          inventore aliquid assumenda ipsum nisi, nobis, deleniti velit atque
          qui ea dolorem. Explicabo magnam dicta commodi. Laudantium, esse.
          Minima eveniet doloremque laboriosam tempora reprehenderit sapiente
          veniam explicabo aliquid fuga, hic eos ea architecto saepe et cumque
          non quis. Voluptatem eveniet inventore doloribus illo sapiente minus
          asperiores aut laudantium dicta optio laboriosam dignissimos
          reprehenderit, commodi neque tempora laborum dolorem adipisci
          voluptatum quod itaque voluptas delectus nisi nobis. Ea doloribus
          delectus unde nemo explicabo consectetur tempora nostrum provident
          magnam, distinctio alias voluptates nisi. Soluta architecto libero
          necessitatibus alias. Quos dolor laudantium deserunt sunt, aperiam
          minus eveniet ut consequatur ab id qui cupiditate alias non porro
          saepe possimus quo est molestias! Ad inventore excepturi nisi
          necessitatibus ipsam voluptas in magni est sed laboriosam doloremque,
          commodi veritatis quibusdam consectetur praesentium qui enim accusamus
          repellendus labore? At eligendi obcaecati quam doloribus quod totam
          ratione eos ipsam nesciunt, dolor odio deserunt veritatis maxime
          pariatur ducimus laudantium laboriosam voluptates. Officiis minima,
          fugiat enim nisi sapiente blanditiis, id quaerat eius voluptatum sequi
          mollitia modi rem eveniet laborum assumenda excepturi voluptas
          corporis eligendi dolores expedita quam? Nostrum ea molestiae neque
          doloremque eaque error? Expedita fuga debitis dolorum necessitatibus,
          doloremque sit voluptas recusandae id provident sint nobis nam
          accusamus delectus qui assumenda perspiciatis tempora excepturi,
          quaerat, inventore commodi. Temporibus cumque qui animi quam nobis ex
          assumenda voluptatibus, totam velit tempore consequatur quae facilis
          ut quis. Voluptatibus fuga adipisci unde, ullam saepe alias, hic
          doloremque accusamus consequatur itaque repellat. Doloremque alias
          cupiditate qui vero sint soluta commodi. Temporibus harum hic,
          perspiciatis, unde maiores est aliquid saepe in maxime vero asperiores
          ipsam. Magni culpa fuga veritatis quia architecto necessitatibus
          soluta optio aliquam similique recusandae odit ipsam quis consectetur
          voluptatibus adipisci quidem aspernatur sit voluptas, voluptate
          repudiandae alias eligendi? Unde quidem tempora qui iste!
        </p>
      </main>
    </article>
  );
}
