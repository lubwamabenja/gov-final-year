import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import PropTypes from 'prop-types';
// material
import {
  Grid,
  Container,
  Stack,
  IconButton,
  InputAdornment,
  TextField,
  OutlinedInput,
  InputLabel,
  FormControl,
  SelectChangeEvent,
  Select,
  MenuItem,
} from '@mui/material';
import { LoadingButton } from '@mui/lab';
import ShopProductCard from './ProductCard';
import { getToken, getEmail, getUmemeContract } from '../../../common';

// ----------------------------------------------------------------------

ProductList.propTypes = {
  products: PropTypes.array.isRequired,
};

export default function ProductList({ products, ...other }) {
  const [customerNo, setCustomerNo] = useState('');
  const [propertyNo, setPropertyNo] = useState('');
  const [meterNo, setMeterNo] = useState('');
  const [nin, setNIN] = useState('');
  const [amount, setAmount] = useState('0');
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [validation, setValidation] = useState('');

  const [method, setMethod] = useState('');

  const handleChange = (event) => {
    setMethod(event.target.value);
  };

  const clearAll = () => {
    setCustomerNo('');
    setPropertyNo('');
    setMeterNo(''); //
    setNIN('');
    setEmail('');
    setAmount('');
    setMethod('');
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setValidation(true);
    if (
      customerNo === '' ||
      propertyNo === '' ||
      meterNo === '' ||
      nin === '' ||
      email === '' ||
      amount === '' ||
      method === ''
    ) {
      toast.error('Please fill in all the required  fields');
      return;
    }
    setValidation(false);
    setLoading(true);
    getUmemeContract()
      .registerUmemePayment(customerNo, propertyNo, meterNo, nin, email, parseInt(amount, 10), method, '22-07-2022')
      .then((res) => {
        setLoading(false);
        console.log(res);
        toast.success('Payment was Successfully');
        clearAll();
      })
      .catch((err) => {
        setLoading(false);
        console.log(err);
      });
  };
  return (
    <Grid container spacing={3} {...other}>
      <Grid item xs={12} md={6} lg={8}>
        <form onSubmit={handleSubmit}>
          <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
            <TextField
              id="customer-n0"
              label="Customer N0."
              fullWidth
              value={customerNo}
              onChange={(e) => {
                setCustomerNo(e.target.value);
              }}
              error={validation && customerNo === ''}
              helperText={validation && customerNo === '' ? 'Please enter a Customer N0.' : ''}
            />

            <TextField
              id="prop"
              label="Property N0."
              fullWidth
              value={propertyNo}
              onChange={(e) => {
                setPropertyNo(e.target.value);
              }}
              error={validation && propertyNo === ''}
              helperText={validation && propertyNo === '' ? 'Please enter a valid Property Number' : ''}
            />
          </Stack>
          <div className="mt-3">
            <TextField
              id="meter"
              label="Meter Details /Serial No."
              fullWidth
              value={meterNo}
              onChange={(e) => {
                setMeterNo(e.target.value);
              }}
              error={validation && meterNo === ''}
              helperText={validation && meterNo === '' ? 'Please enter a valid Meter Number' : ''}
            />
          </div>
          <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} className="mt-3">
            <TextField
              id="nin"
              label="NIN."
              fullWidth
              value={nin}
              onChange={(e) => {
                setNIN(e.target.value);
              }}
              error={validation && nin === ''}
              helperText={validation && nin === '' ? 'Please enter a NIN.' : ''}
            />

            <TextField
              id="email"
              label="Email."
              fullWidth
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              error={validation && email === ''}
              helperText={validation && email === '' ? 'Please enter a valid Email' : ''}
            />
          </Stack>

          <div className="mt-3">
            <TextField
              id="amount"
              label="Amount."
              fullWidth
              value={amount}
              onChange={(e) => {
                setAmount(e.target.value);
              }}
              error={validation && amount === ''}
              helperText={validation && amount === '' ? 'Amount cant be zero' : ''}
            />
          </div>

          <div className="form-group mt-3">
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">Payment Method</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={method}
                label="Payment Method"
                onChange={handleChange}
              >
                <MenuItem value={'Mobile Money'}>Mobile Money</MenuItem>
                <MenuItem value={'Credit Card'}>Credit Card</MenuItem>
              </Select>
            </FormControl>
          </div>
          <div className="form-group mt-3">
            <LoadingButton fullWidth size="large" type="submit" variant="contained" loading={loading}>
              Submit
            </LoadingButton>
          </div>
        </form>
      </Grid>
      {/* {products.map((product) => (
        <Grid key={product.id} item xs={12} sm={6} md={3}>
          <ShopProductCard product={product} />
        </Grid>
      ))} */}
    </Grid>
  );
}
