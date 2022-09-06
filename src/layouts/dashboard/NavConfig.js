// component
import Iconify from '../../components/Iconify';

// ----------------------------------------------------------------------

const getIcon = (name) => <Iconify icon={name} width={22} height={22} />;

const navConfig = [
  {
    title: 'dashboard',
    path: '/dashboard/app',
    icon: getIcon('eva:pie-chart-2-fill'),
  },
  {
    title: 'All Transactions',
    path: '/dashboard/transactions',
    icon: getIcon('eva:people-fill'),
  },
  {
    title: 'Reconciliations',
    path: '/dashboard/reconciliations',
    icon: getIcon('eva:shopping-bag-fill'),
  },
  {
    title: 'Uganda Pay',
    path: '/dashboard/ugandapay',
    icon: getIcon('eva:shopping-bag-fill'),
  },
  {
    title: 'bank',
    path: '/dashboard/bank',
    icon: getIcon('eva:shopping-bag-fill'),
  },
  {
    title: 'Gov. Entities',
    path: '/dashboard/entities',
    icon: getIcon('eva:shopping-bag-fill'),
  },
];

export default navConfig;
