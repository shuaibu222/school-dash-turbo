'use client';

import { createContext, useState } from 'react';

export const MyContext = createContext({});

// export const StateProvider = ({ children }) => {
//   const [isSidebarOpen, setIsSidebarOpen] = useState(true);

//   return (
//     <StateContext.Provider value={{ isSidebarOpen, setIsSidebarOpen }}>
//       {children}
//     </StateContext.Provider>
//   );
// };
