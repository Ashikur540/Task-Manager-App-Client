import React from 'react';
import { Toaster } from 'react-hot-toast';
import { RouterProvider } from 'react-router';
import { router } from './Routes/RoutesConfig';
function App() {


  return (
    <div className="">
      <Toaster />
      <RouterProvider router={router}>
      </RouterProvider>
    </div>
  );
}

export default App;
