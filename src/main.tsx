import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import CartPage from './Routes/CartPage.tsx';
import Header from './Components/Header.tsx';

import { Provider } from "react-redux"
import { appStore } from "./Redux/appStore"
import GlobalLayout from './Routes/GlobalLayout.tsx';
import { Toaster } from 'react-hot-toast';

const router = createBrowserRouter([

  {
    path: "/",
    element: <GlobalLayout />, 
    children: [
      {
        path: "/",
        element: <App />,
      },
      {
        path: "/cart",
        element: <CartPage />,
      },
    ],
  },
]);
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={appStore}>

      <RouterProvider router={router} />
    </Provider>
  </StrictMode>,
)
