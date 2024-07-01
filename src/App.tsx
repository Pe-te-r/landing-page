import {  RouterProvider, createBrowserRouter } from 'react-router-dom';
import Login from "./auth/login"
import NavBar from "./components/navbar"
import Home from './pages/home';
import ContactForm from './pages/contact';
import Signup from './pages/signup';
import About from './pages/About';
import Profile from './pages/Profile';

const router = createBrowserRouter([
  {
    path: '/',
    element:<Home/> ,
  },
  {
    path: "contact",
    element: <ContactForm/> ,
  },
  {
    path:'login',
    element: <Login />,
  },
  {
    path:'signup',
    element: <Signup/>,
  },
  {
    path: "about",
    element: <About/>
  },
  {
    path: "profile",
    element: <Profile/>
  },
  {
    path: "*",
    element: <h1>Page Not Found</h1>
  }

]);


function App() {

  return (
    <>
        {/* <NavBar /> */}
        <RouterProvider router={router}/>
    </>
  )
}

export default App


