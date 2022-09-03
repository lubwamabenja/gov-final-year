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
import { getPayContract, numberWithCommas } from '../common';

// ----------------------------------------------------------------------

const TABLE_HEAD = [
  { id: 'date', label: 'Date', alignRight: false },
  { id: 'tin', label: 'TIN', alignRight: false },
  { id: 'amount', label: 'Amount', alignRight: false },
  { id: 'hash', label: 'Hash', alignRight: false },
  { id: 'block', label: 'Block', alignRight: false },
  { id: 'service', label: 'Service', alignRight: false },
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

export default function RecentTransactions() {
  const [page, setPage] = useState(0);
  const [transactions, setTransactions] = useState([]);

  const [order, setOrder] = useState('asc');

  const [selected, setSelected] = useState([]);

  const [orderBy, setOrderBy] = useState('name');

  const [filterName, setFilterName] = useState('');

  const [rowsPerPage, setRowsPerPage] = useState(5);

  const [loading, setLoading] = useState(false);

  // -----------------------GET ALL TRANSACTIONS-----------------------------------------------
  useEffect(() => {
    getAllTransactions();
  }, []);
  const getAllTransactions = () => {
    setLoading(true);
    getPayContract()
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
              email: res[i].email,
              bank: res[i].bank,
              amount: res[i].amount.toString(),
              tin: res[i].TIN,
              block: res[i].block_hash,
              hash: res[i].hash,
              commmision: res[i].commision.toString(),
              state: res[i].state,
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
            Recent Transactions
          </Typography>
          <Button variant="contained" to="#" onClick={refreshTransactions} startIcon={<Iconify icon="eva:plus-fill" />}>
            Refresh
          </Button>
        </Stack>

        <Card>
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
                    {transactions.map((row) => {
                      const { id, amount, bank, commision, block, date, email, hash, service, state, tin } = row;
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
                              {date}
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
