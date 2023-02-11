import React from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import RootLayout from './shared/routes/Root';
import ErrorPage from './shared/routes/ErrorPage';
import UsersPage from './user/routes/Users';
import NewPlacePage from './places/routes/NewPlace';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <UsersPage /> },
      {
        path: 'places',
        children: [
          {
            path: 'new',
            element: <NewPlacePage />,
          },
        ],
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
