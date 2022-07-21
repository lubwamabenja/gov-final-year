import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// routes
import Router from './routes';
import 'bootstrap/dist/css/bootstrap.min.css';

// theme
import ThemeProvider from './theme';
// components
import ScrollToTop from './components/ScrollToTop';
import { BaseOptionChartStyle } from './components/chart/BaseOptionChart';

// ----------------------------------------------------------------------

export default function App() {
  return (
    <ThemeProvider>
      <ToastContainer />
      <ScrollToTop />
      <BaseOptionChartStyle />
      <Router />
    </ThemeProvider>
  );
}
