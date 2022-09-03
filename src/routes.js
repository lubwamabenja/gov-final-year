import { Navigate, useRoutes } from 'react-router-dom';
// layouts
import DashboardLayout from './layouts/dashboard';
import LogoOnlyLayout from './layouts/LogoOnlyLayout';
import { getToken, getEmail, getAuthContract, getTin } from './common';
//
import Blog from './pages/Blog';
import RecentTransactions from './pages/RecentTransactions';
import Login from './pages/Login';
import NotFound from './pages/Page404';
import Register from './pages/Register';
import Products from './pages/Products';
import DashboardApp from './pages/DashboardApp';
import { useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
// ----------------------------------------------------------------------

export default function Router() {
  const [profile, setProfile] = useState({});

  //============GET USER PROFILE ========================
  const getProfile = () => {
    let myuuid = uuidv4();
    console.log(myuuid);
    getAuthContract()
      .getUserByTin(getTin())
      .then((res) => {
        console.log(res);
        setProfile({
          name: res[2] + ' ' + res[1],
          email: res[3],
          tin: res[4],
          role: res[6],
        });
      })

      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getProfile();
  }, []);

  return useRoutes([
    {
      path: '/dashboard',
      element: getTin() ? <DashboardLayout profile={profile} /> : <Navigate to="/login" />,
      children: [
        { path: 'app', element: <DashboardApp profile={profile} /> },
        { path: 'user', element: <RecentTransactions profile={profile} /> },
        { path: 'products', element: <Products profile={profile} /> },
        { path: 'blog', element: <Blog profile={profile} /> },
      ],
    },
    {
      path: '/',
      element: <LogoOnlyLayout />,
      children: [
        { path: '/', element: getTin() ? <Navigate to="/dashboard/app" /> : <Navigate to="/login" /> },
        { path: 'login', element: getTin() ? <Navigate to="/dashboard/app" /> : <Login /> },
        { path: 'register', element: getTin() ? <Navigate to="/dashboard/app" /> : <Register /> },
        { path: '404', element: <NotFound /> },
        { path: '*', element: <Navigate to="/404" /> },
      ],
    },
    {
      path: '*',
      element: <Navigate to="/404" replace />,
    },
  ]);
}
