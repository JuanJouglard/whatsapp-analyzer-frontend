import { lazy } from 'react';
import './App.css';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { FileHandler } from './services/file_handler';
import Home from './pages/home';

const About =  lazy(() => import("./pages/about"))

const file_service = new FileHandler()

const router = createBrowserRouter([
    {
        path: "/about",
        element: <About />
    },
    {
        path: "/home",
        element: <Home />,
        action: async ({request}) => {
            const response = await file_service.upload(await request.formData())
            console.log("RESPONSE: ", response)

            return ""
        },
        loader: () => {
            console.log("LOADER")
            return ""
        }

    }
])
export default function Router() {

  return (
    <div>
        <RouterProvider router={router} />
    </div>
  )
}

