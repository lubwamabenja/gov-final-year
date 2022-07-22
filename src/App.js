import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// routes
import 'bootstrap/dist/css/bootstrap.min.css';

// theme
import ThemeProvider from './theme';
// components
import ScrollToTop from './components/ScrollToTop';
import { BaseOptionChartStyle } from './components/chart/BaseOptionChart';
import Login from './pages/Login';
import Register from './pages/Register';
import PrivateRoute from './PrivateRoutes';
import DashboardApp from './pages/DashboardApp';

// ----------------------------------------------------------------------

export default function App() {
  return (
    <ThemeProvider>
      <ToastContainer />
      <ScrollToTop />
      <BaseOptionChartStyle />

      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />

        <Route element={<PrivateRoute />}>
          <Route path="*" element={<DashboardApp />} />
        </Route>
      </Routes>
    </ThemeProvider>
  );
}
