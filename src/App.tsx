import {  BrowserRouter,  Route,  Routes } from 'react-router-dom';
import Login from "./auth/login"
import Home from './pages/home';
import ContactForm from './pages/contact';
import Signup from './pages/signup';
import About from './pages/About';
import Profile from './pages/Profile';
import NavBar from './components/navbar';

const routes=([
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
    <BrowserRouter>  
      <div className="mainContainer" style={{ backgroundColor: '#f0f0f0', minHeight: '100vh' }}>
        <NavBar/>
        <Routes>
            {routes.map((route, index) =>{
              return <Route key={index} path={route.path} element={route.element} />
            })}
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App


