import { Navigate, useRoutes } from 'react-router-dom';
import { useEffect, useState } from 'react';
// layouts
import DashboardLayout from './layouts/dashboard';
import LogoOnlyLayout from './layouts/LogoOnlyLayout';
import { getToken, getEmail, getAuthContract } from './common';
//
import Blog from './pages/Blog';
import User from './pages/User';
import Login from './pages/Login';
import NotFound from './pages/Page404';
import Register from './pages/Register';
import Products from './pages/Products';
import DashboardApp from './pages/DashboardApp';

// ----------------------------------------------------------------------

export default function Router() {
  const [profile, setProfile] = useState({});
  const [balance, setBalance] = useState({});

  const getBalance = () => {
    getAuthContract()
      .getBalance(getEmail())
      .then((res) => {
        console.log(res);
        setBalance({
          umeme: res[1].toString(),
          water: res[2].toString(),
          taxes: res[3].toString(),
          penalties: res[4].toString(),
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const getProfile = () => {
    getAuthContract()
      .getProfile(getEmail())
      .then((res) => {
        if (res[1] === 'individual') {
          setProfile({
            type: res[1],
            nin: res[4],
            fname: res[5],
            lname: res[6],
            email: res[7],
            phone: res[8],
          });
        } else {
          setProfile({
            type: res[1],
            tin: res[2],
            companyName: res[3],
            email: res[7],
            phone: res[8],
          });
        }
        console.log(res[1]);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getProfile();
    getBalance();
  }, []);
  return useRoutes([
    {
      path: '/dashboard',
      element: getToken() ? <DashboardLayout /> : <Navigate to="/login" />,
      children: [
        { path: 'app', element: <DashboardApp profile={profile} balance={balance} /> },
        { path: 'user', element: <User profile={profile} /> },
        { path: 'umeme', element: <Products profile={profile} /> },
        { path: 'blog', element: <Blog profile={profile} /> },
      ],
    },
    {
      path: '/',
      element: <LogoOnlyLayout />,
      children: [
        { path: '/', element: <Navigate to="/dashboard/app" /> },
        { path: 'login', element: <Login /> },
        { path: 'register', element: <Register /> },
        { path: '404', element: <NotFound /> },
        { path: '*', element: <Navigate to="/404" /> },
      ],
    },
    { path: '*', element: <Navigate to="/404" replace /> },
  ]);
}
