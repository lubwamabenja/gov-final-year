import { filter } from 'lodash';
import { sentenceCase } from 'change-case';
import { useState, useEffect } from 'react';

import { Link as RouterLink } from 'react-router-dom';
// material
import {
  Card,
  Table,
  Stack,
  Avatar,
  Button,
  Checkbox,
  TableRow,
  TableBody,
  TableCell,
  Container,
  Typography,
  TableContainer,
  TablePagination,
  Box,
  CircularProgress,
  Grid,
} from '@mui/material';
// components
import Page from '../components/Page';
import Label from '../components/Label';
import Scrollbar from '../components/Scrollbar';
import Iconify from '../components/Iconify';
import SearchNotFound from '../components/SearchNotFound';
import { UserListHead, UserListToolbar, UserMoreMenu } from '../sections/@dashboard/user';
// mock
import USERLIST from '../_mock/user';
import { getEntityContract, numberWithCommas, getReconcileContract } from '../common';
import {
  AppTasks,
  AppNewsUpdate,
  AppOrderTimeline,
  AppCurrentVisits,
  AppWebsiteVisits,
  AppTrafficBySite,
  AppWidgetSummary,
  AppCurrentSubject,
  AppConversionRates,
} from '../sections/@dashboard/app';

// ----------------------------------------------------------------------

const TABLE_HEAD = [
  { id: 'date', label: 'Date', alignRight: false },
  { id: 'tin', label: 'TIN', alignRight: false },
  { id: 'amount', label: 'Amount', alignRight: false },
  { id: 'hash', label: 'Hash', alignRight: false },
  { id: 'block', label: 'Block', alignRight: false },
  { id: 'service', label: 'Service', alignRight: false },
  { id: 'bank', label: 'Bank', alignRight: false },
  { id: 'status', label: 'Status', alignRight: false },
  { id: '' },
];

// ----------------------------------------------------------------------

function descendingComparator(a, b, orderBy) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

function getComparator(order, orderBy) {
  return order === 'desc'
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}

function applySortFilter(array, comparator, query) {
  const stabilizedThis = array.map((el, index) => [el, index]);
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) return order;
    return a[1] - b[1];
  });
  if (query) {
    return filter(array, (_user) => _user.name.toLowerCase().indexOf(query.toLowerCase()) !== -1);
  }
  return stabilizedThis.map((el) => el[0]);
}

export default function Entities() {
  const [page, setPage] = useState(0);
  const [transactions, setTransactions] = useState([]);

  const [order, setOrder] = useState('asc');

  const [selected, setSelected] = useState([]);

  const [orderBy, setOrderBy] = useState('name');

  const [filterName, setFilterName] = useState('');

  const [rowsPerPage, setRowsPerPage] = useState(5);

  const [loading, setLoading] = useState(false);
  const [water, setWater] = useState('');
  const [umeme, setUmeme] = useState('');
  const [police, setPolice] = useState('');
  const [internal, setInternal] = useState('');

  // -----------------------GET ALL TRANSACTIONS-----------------------------------------------
  useEffect(() => {
    getAllTransactions();
  }, []);
  const getAllTransactions = () => {
    setLoading(true);

    //=============GET ENTITY TXS============================
    getReconcileContract()
      .getEntities()
      .then((res) => {
        console.log(res);
        for (let i = 0; i < res.length; i++) {
          if (res[i].entity === 'umeme') setUmeme(parseInt(res[i].amount.toString()));
          if (res[i].entity === 'water') setWater(parseInt(res[i].amount.toString()));
          if (res[i].entity === 'police') setPolice(parseInt(res[i].amount.toString()));
          if (res[i].entity === 'internal') setInternal(parseInt(res[i].amount.toString()));
        }
      })
      .catch((err) => {
        console.log(err);
      });

    getEntityContract()
      .getTransactions()
      .then((res) => {
        console.log(res);
        let txs = [];

        for (let i = 0; i < res.length; i++) {
          if (res[i].isTx) {
            let obj = {
              id: res[i].id.toString(),
              tin: res[i].TIN,
              service: res[i].service,
              date: res[i].date,
              time: res[i].time,
              email: res[i].email,
              bank: res[i].bank,
              amount: res[i].amount.toString(),
              block: res[i].block_no,
              hash: res[i].hash,
              state: res[i].state,
              account: res[i].user,
            };
            txs.push(obj);
          }
        }

        setTransactions(txs);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  };

  // -----------------------REFRESH TRANSACTIONS-----------------------------------------------
  const refreshTransactions = () => {
    getAllTransactions();
  };

  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };

  const handleSelectAllClick = (event) => {
    if (event.target.checked) {
      const newSelecteds = transactions.map((n) => n.tin);
      setSelected(newSelecteds);
      return;
    }
    setSelected([]);
  };

  const handleClick = (event, name) => {
    const selectedIndex = selected.indexOf(name);
    let newSelected = [];
    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, name);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(selected.slice(0, selectedIndex), selected.slice(selectedIndex + 1));
    }
    setSelected(newSelected);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleFilterByName = (event) => {
    setFilterName(event.target.value);
  };

  const emptyRows = page > 0 ? Math.max(0, (1 + page) * rowsPerPage - transactions.length) : 0;

  const isUserNotFound = transactions.length === 0;

  return (
    <Page title="User">
      <Container>
        <Stack direction="row" alignItems="center" justifyContent="space-between" mb={5}>
          <Typography variant="h4" gutterBottom>
            Gov. Entities Transactions
          </Typography>
          <Button variant="contained" to="#" onClick={refreshTransactions} startIcon={<Iconify icon="eva:plus-fill" />}>
            Refresh
          </Button>
        </Stack>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6} md={3}>
            <AppWidgetSummary
              title="UMEME"
              money={true}
              total={umeme}
              money={true}
              icon={'ant-design:android-filled'}
            />
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <AppWidgetSummary title="WATER" total={water} money={true} color="info" icon={'ant-design:apple-filled'} />
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <AppWidgetSummary
              title="POLICE"
              total={police}
              money={true}
              color="warning"
              icon={'ant-design:windows-filled'}
            />
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <AppWidgetSummary
              title="Internal Affairs"
              total={internal}
              money={true}
              color="error"
              icon={'ant-design:bug-filled'}
            />
          </Grid>
        </Grid>

        <Card className="mt-3">
          <UserListToolbar numSelected={selected.length} filterName={filterName} onFilterName={handleFilterByName} />

          {loading ? (
            <p className="text-center prog-l">
              <CircularProgress color="success" />
            </p>
          ) : (
            <Scrollbar>
              <TableContainer sx={{ minWidth: 800 }}>
                <Table>
                  <UserListHead
                    order={order}
                    orderBy={orderBy}
                    headLabel={TABLE_HEAD}
                    rowCount={transactions.length}
                    numSelected={selected.length}
                    onRequestSort={handleRequestSort}
                    onSelectAllClick={handleSelectAllClick}
                  />

                  <TableBody>
                    {transactions.reverse().map((row, key) => {
                      if (key < 8) {
                        const { id, amount, bank, commision, block, time, date, email, hash, service, state, tin } =
                          row;
                        const isItemSelected = selected.indexOf(tin) !== -1;

                        return (
                          <TableRow
                            hover
                            key={id}
                            tabIndex={-1}
                            role="checkbox"
                            selected={isItemSelected}
                            aria-checked={isItemSelected}
                          >
                            <TableCell padding="checkbox">
                              <Checkbox checked={isItemSelected} onChange={(event) => handleClick(event, tin)} />
                            </TableCell>
                            <TableCell component="th" scope="row" padding="none">
                              <Stack direction="row" alignItems="center" spacing={2}>
                                <span>{date}</span>
                                <span style={{ color: '#ffa500' }}> {time}</span>
                              </Stack>
                            </TableCell>
                            <TableCell align="left" className="text-truncate" style={{ maxWidth: '150px' }}>
                              {tin}
                            </TableCell>
                            <TableCell align="left">{numberWithCommas(amount)} UGX</TableCell>
                            <TableCell align="left" className="text-truncate" style={{ maxWidth: '260px' }}>
                              <a href={`https://rinkeby.etherscan.io/tx/${hash}`} target="_blank">
                                {' '}
                                {hash}
                              </a>
                            </TableCell>

                            <TableCell align="left" className="text-truncate">
                              <a href={`https://rinkeby.etherscan.io/block/${block}`} target="_blank">
                                {' '}
                                {block}
                              </a>
                            </TableCell>
                            <TableCell align="left"> {sentenceCase(service)}</TableCell>
                            <TableCell align="left"> {sentenceCase(bank)}</TableCell>
                            <TableCell align="left">
                              <Label variant="ghost" color={(state === 'pending' && 'warning') || 'success'}>
                                {sentenceCase(state)}
                              </Label>
                            </TableCell>

                            <TableCell align="right">
                              <UserMoreMenu />
                            </TableCell>
                          </TableRow>
                        );
                      }
                    })}
                    {emptyRows > 0 && (
                      <TableRow style={{ height: 53 * emptyRows }}>
                        <TableCell colSpan={6} />
                      </TableRow>
                    )}
                  </TableBody>

                  {isUserNotFound && (
                    <TableBody>
                      <TableRow>
                        <TableCell align="center" colSpan={6} sx={{ py: 3 }}>
                          <p>NO RECENT TRANSACTIONS</p>
                        </TableCell>
                      </TableRow>
                    </TableBody>
                  )}
                </Table>
              </TableContainer>
            </Scrollbar>
          )}

          {!loading && (
            <TablePagination
              rowsPerPageOptions={[5, 10, 25]}
              component="div"
              count={transactions.length}
              rowsPerPage={rowsPerPage}
              page={page}
              onPageChange={handleChangePage}
              onRowsPerPageChange={handleChangeRowsPerPage}
            />
          )}
        </Card>
      </Container>
    </Page>
  );
}
