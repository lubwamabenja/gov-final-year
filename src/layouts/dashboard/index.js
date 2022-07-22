import { useState, useEffect } from 'react';
import { Outlet } from 'react-router-dom';
// material
import { styled } from '@mui/material/styles';
//
import DashboardNavbar from './DashboardNavbar';
import DashboardSidebar from './DashboardSidebar';
import { getAuthContract, getEmail } from '../../common';

// ----------------------------------------------------------------------

const APP_BAR_MOBILE = 64;
const APP_BAR_DESKTOP = 92;

const RootStyle = styled('div')({
  display: 'flex',
  minHeight: '100%',
  overflow: 'hidden',
});

const MainStyle = styled('div')(({ theme }) => ({
  flexGrow: 1,
  overflow: 'auto',
  minHeight: '100%',
  paddingTop: APP_BAR_MOBILE + 24,
  paddingBottom: theme.spacing(10),
  [theme.breakpoints.up('lg')]: {
    paddingTop: APP_BAR_DESKTOP + 24,
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2),
  },
}));

// ----------------------------------------------------------------------

export default function DashboardLayout() {
  const [open, setOpen] = useState(false);
  const [profile, setProfile] = useState({});

  const getProfile = () => {
    getAuthContract()
      .getProfile(getEmail())
      .then((res) => {
        console.log(res);
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
  }, []);
  return (
    <RootStyle>
      <DashboardNavbar onOpenSidebar={() => setOpen(true)} profile={profile} />
      <DashboardSidebar profile={profile} isOpenSidebar={open} onCloseSidebar={() => setOpen(false)} />
      <MainStyle>
        <Outlet />
      </MainStyle>
    </RootStyle>
  );
}
