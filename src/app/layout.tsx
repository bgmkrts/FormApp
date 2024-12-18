'use client';

import React from 'react';
import formStore from '../../store/FormStore';
import { Provider } from 'mobx-react';



 function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
      <Provider todoStore={formStore}>
      {children} 
    </Provider>
      </body>
    </html>
  );
}
export default Layout;