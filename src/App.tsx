import { lazy } from 'react';
import './App.css';
import Chat from './pages/home/chat';
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const About =  lazy(() => import("./pages/about"))

const router = createBrowserRouter([
    {
        path: "/about",
        element: <About />
    },
    {
        path: "/",
        element: <Chat />
    }
])
function App() {

  return (
    <div>
        <RouterProvider router={router} />
    </div>
  )
}

export default App
