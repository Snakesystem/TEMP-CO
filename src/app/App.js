import React, { useEffect } from 'react'
import Home from './home/home'
import useRoles from '../hooks/useRoles'
import { BrowserRouter, Navigate, useRoutes } from 'react-router-dom'
import Register from './auth/register'
import Dashboard from './admin/dashbboard'
import Client from './client/Client'
import Admin from './admin/admin'
import ForgotPassword from './auth/forgotpassword'
import Header from '../components/layout/Header'
import Footer from '../components/layout/Footer'
import About from './home/about'
import Contact from './home/contact'
import Aos from 'aos'

const App = () => {

  useEffect(() => {
    Aos.init({
      offset: 200,
      duration: 500,
      easing: 'ease-in-sine',
      delay: 100,
    });
  }, [])

  return (
    <BrowserRouter>
      <Header/>
      <main className="container-fluid mt-7">
        <RouteRender/>
      </main>
      <Footer />
    </BrowserRouter>
  )
}

const RouteRender = () => {
  const routes = useRoutes(routesConfig);
  return routes;
}

const NotFound = () => {
  return <h1>Not Found</h1>
}

export const appRoutes = {
  HOME: '/',
  ADMIN: '/admin',
  REGISTER: '/register',
  FORGOTPASSWORD: '/forgotpassword',
  CONTACT: '/contact',
  ABOUT: '/about',
  CLIENT: 'client',
  UNKNOW: '*',
}

const PrivateRoute = ({ allowedRoles, children }) => {
  const isAuthorized = true;
  const requiredRoles = !!allowedRoles?.length;
  const roles = [useRoles.client];

  const matchRoles = requiredRoles ? allowedRoles.some((role) => roles.indexOf(role) >= 0) : true;

  if(!isAuthorized || !matchRoles) {
    return <Navigate to="/" replace />
  }

  return children;
}

const routesConfig = [

  // Public route
  {
    path: appRoutes.HOME,
    element: <Home/>,
  },
  {
    path: appRoutes.ABOUT,
    element: <About/>,
  },
  {
    path: appRoutes.CONTACT,
    element: <Contact/>,
  },
  {
    path: appRoutes.REGISTER,
    element: <Register/>,
  },
  {
    path: appRoutes.FORGOTPASSWORD,
    element: <ForgotPassword/>,
  },

  // client route
  {
    path: appRoutes.CLIENT,
    element: <PrivateRoute allowedRoles={[useRoles.client]}>
      <Client/>
    </PrivateRoute>,
  },

  // admin route
  {
    path: appRoutes.ADMIN,
    element: <PrivateRoute allowedRoles={[useRoles.administrator]}>
      <Admin/>
    </PrivateRoute>,
    children: [
      {
        path: 'dashboard',
        element: <Dashboard/>
      }
    ]
  },

  // un authorized
  {
    path: appRoutes.UNKNOW,
    element: <NotFound/>,
  },
]

export default App